"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// import { authLogger } from "logger";
const models_1 = require("../models");
const constants_1 = require("../constants");
const jwt_1 = require("./jwt");
/**
 * Auth Workflow:
 *   Header Token -> x-access (Main Token), x-refresh (Refresh Token to refresh access)
 * */
const userAuthenticator = (0, express_async_handler_1.default)(async (req, res, next) => {
    const accessToken = req.cookies[constants_1.AccessCookie];
    /**
     * WARN: (Don't Follow that):
     *
     * if something breaks remove this if statement due to token or userID while TESTING
     * */
    // Both absent
    //
    const disable = process.env.AuthDisable === "1";
    /** Might break further user based requests */
    if (disable) {
        next();
        return;
    }
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
    let access = (0, jwt_1.getJwtToken)(accessToken);
    if (access === null) {
        res.status(418).json({
            message: "Token Expired",
        });
        return;
    }
    let user = await models_1.User.findOne({
        where: { id: access.id, email_id: access.email_id },
    });
    if (user == null) {
        res.status(401).json({
            message: "User ID not found",
        });
        return;
    }
    req.user = user;
    next();
});
exports.default = userAuthenticator;
