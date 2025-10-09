"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = roleMiddle;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
function roleMiddle(role) {
    return (0, express_async_handler_1.default)(async (req, res, next) => {
        const user = req.user;
        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }
        if (user.role !== role) {
            res.status(403);
            throw new Error("Forbidden Access");
        }
        next();
    });
}
