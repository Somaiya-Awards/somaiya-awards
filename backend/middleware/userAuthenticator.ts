import asyncHandler from "express-async-handler";
// import { authLogger } from "logger";
import jwt from "jsonwebtoken";
import { User } from "../models";
import {
    AccessHeader,
    IstOffset,
    LoggedHeader,
    RefreshHeader,
} from "../constants";
import { AuthRequest } from "../types/request";
import { JwtForm, JwtType } from "../zod/auth/jwt";
import { Model } from "sequelize";
import { Response } from "express";

export function setCookies(
    res: Response,
    accessCookie: string,
    refreshCookie: string
) {
    res.cookie(AccessHeader, accessCookie, {
        expires: new Date(Date.now() + IstOffset + 1000 * 60 * 60),
        httpOnly: true,
        sameSite: "strict",
    });

    res.cookie(RefreshHeader, refreshCookie, {
        expires: new Date(Date.now() + IstOffset + 1000 * 60 * 60 * 24),
        httpOnly: true,
        sameSite: "strict",
        path: "/auth/refresh",
    });

    res.cookie(LoggedHeader, "true", {
        expires: new Date(Date.now() + IstOffset + 1000 * 60 * 60 * 24),
        httpOnly: false,
        sameSite: "strict",
    });
}

export function getJwtToken(token: string): JwtType | null {
    try {
        const secret = process.env.JWT_SECRET;

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
    /**
     * WARN: (Don't Follow that):
     *
     * if something breaks remove this if statement due to token or userID while TESTING
     * */

    // Both absent
    if (!accessToken) {
        res.status(400).json({
            message: "Malformed Request",
        });
        return;
    }

    if (Array.isArray(accessToken)) {
        res.status(400).json({
            error: "Received Multiple Tokens",
        });
        return;
    }

    /**till here */

    let access = getJwtToken(accessToken);

    if (access === null) {
        res.status(418).json({
            message: "Token Expired",
        });
        return;
    }

    // TODO: Remove this auto refreshing

    let user = await User.findOne({
        where: { id: access.id, email_id: access.email_id },
    });

    console.log(access, 1);

    if (user == null) {
        res.status(401).json({
            message: "User ID not found",
        });
        return;
    }

    (req as AuthRequest).user = user;

    next();
});

export default userAuthenticator;
