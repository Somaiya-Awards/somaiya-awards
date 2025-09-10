import asyncHandler from "express-async-handler";
// import { authLogger } from "logger";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { AccessHeader, RefreshHeader } from "../constants";
import { AuthRequest } from "../types/request";
import { JwtForm, JwtType } from "../zod/auth/jwt";
import { Model } from "sequelize";

export function getJwtToken(token: string): JwtType | null {
    try {
        if (!token.startsWith("Bearer ")) {
            throw new Error("Malformed auth header");
        }

        token = token.split("Bearer ")[1];

        const secret = process.env.JWT_SECRET;
        console.log(secret);
        if (secret === undefined) throw new Error("JWT Secret not found");

        return JwtForm.parse(jwt.verify(token, secret));
    } catch (err) {
        console.error(err);
        return null;
    }
}

// This is parse by jwtLib
type JwtTimeout = "1h" | "1d";

export function setJwtToken(user: Model, expire: JwtTimeout) {
    let payload = {
        id: user.getDataValue("id"),
        email_id: user.getDataValue("email_id"),
        role: user.getDataValue("role"),
        institution: user.getDataValue("institution"),
    };

    //@ts-ignore No Password on token
    const secret = process.env.JWT_SECRET;

    if (secret === undefined) throw new Error("JWT Secret not found");

    return jwt.sign(payload, secret, { expiresIn: expire });
}

/**
 * Auth Workflow:
 *   Header Token -> x-access (Main Token), x-refresh (Refresh Token to refresh access)
 * */
const userAuthenticator = asyncHandler(async (req, res, next) => {
    const accessToken = req.cookies[AccessHeader];
    const refreshToken = req.cookies[RefreshHeader];
    /**
     * WARN: (Don't Follow that):
     *
     * if something breaks remove this if statement due to token or userID while TESTING
     * */

    // Both absent
    if (!accessToken || !refreshToken) {
        res.status(400).json({
            message: "Malformed Request",
        });
        return;
    }

    if (Array.isArray(accessToken) || Array.isArray(refreshToken)) {
        res.status(400).json({
            error: "Received Multiple Tokens",
        });
        return;
    }

    /**till here */

    let access = getJwtToken(accessToken);
    let refresh = getJwtToken(refreshToken);

    if (refresh === null) {
        res.status(401).json({
            message: "Token Expired",
        });
        return;
    }

    let toCheckToken = refresh;

    if (access !== null) {
        toCheckToken = access;
    }

    let user = await User.findOne({
        where: { id: toCheckToken.id, email_id: toCheckToken.email_id },
    });

    if (user == null) {
        res.status(401).json({
            message: "User ID not found",
        });
        return;
    }

    let newAccess = accessToken.split("Bearer ")[1],
        newRefresh = refreshToken.split("Bearer ")[1];

    if (access === null) {
        newAccess = setJwtToken(user, "1h");
        newRefresh = setJwtToken(user, "1d");
    }

    (req as AuthRequest).user = user;
    res.cookie(AccessHeader, `Bearer ${newAccess}`, {expires: new Date(Date.now() + 1000*60*60), httpOnly: true});
    res.cookie(RefreshHeader, `Bearer ${newRefresh}`, {expires: new Date(Date.now() + 1000*60*60*24), httpOnly: true});

    next();
});

export default userAuthenticator;
