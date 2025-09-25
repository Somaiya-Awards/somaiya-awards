import asyncHandler from "express-async-handler";
// import { authLogger } from "logger";
import { User } from "../models";
import { AccessHeader, RefreshHeader } from "../constants";
import { AuthRequest } from "../types/request";
import { getJwtToken } from "./jwt";

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

    let user = await User.findOne({
        where: { id: access.id, email_id: access.email_id },
    });

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
