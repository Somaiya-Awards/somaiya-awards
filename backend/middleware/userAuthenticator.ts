import asyncHandler from "express-async-handler";
// import { authLogger } from "logger";
import jwt from "jsonwebtoken";
import { User } from "../models/tables/User";
import { AccessHeader, RefreshHeader } from "../constants";
import { AuthRequest } from "../types/request";

export function getJwtToken(token: string): User | null {
    try {
        if (!token.startsWith("Bearer "))
            throw new Error("Malformed auth header");

        token = token.split("Bearer ")[1];

        const secret = process.env.JWT_SECRET;

        if (secret === undefined) throw new Error("JWT Secret not found");

        //@ts-expect-error
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

// This is parse by jwtLib
type JwtTimeout = "1h" | "1d";

export function setJwtToken(user: User, expire: JwtTimeout) {
    let payload: User = user.toJSON();

    //@ts-ignore No Password on token
    delete payload.password; // Remove password, cause why not :)
    const secret = process.env.JWT_SECRET;

    if (secret === undefined) throw new Error("JWT Secret not found");

    return jwt.sign(payload, secret, { expiresIn: expire });
}

/**
 * Auth Workflow:
 *   Header Token -> x-access (Main Token), x-refresh (Refresh Token to refresh access)
 * */
const userAuthenticator = asyncHandler(async (req, res, next) => {
    const accessToken = req.headers[AccessHeader];
    const refreshToken = req.headers[RefreshHeader];

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

    /**till here */

    let access = getJwtToken(accessToken.toString());
    let refresh = getJwtToken(refreshToken.toString());

    if (refresh === null) {
        res.status(401).json({
            message: "Token Expired",
        });
        return;
    }

    let toCheckToken: User = refresh;

    if (access !== null) {
        if (access !== refresh) {
            req.header.coo;
        }
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

    let newAccess = accessToken,
        newRefresh = refreshToken;

    if (access === null) {
        newAccess = setJwtToken(user, "1h");
        newRefresh = setJwtToken(user, "1d");
    }

    (req as AuthRequest).user = user;
    res.setHeader(AccessHeader, newAccess);
    res.setHeader(RefreshHeader, newRefresh);

    next();
});

export default userAuthenticator;
