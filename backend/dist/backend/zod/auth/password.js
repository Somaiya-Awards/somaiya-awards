"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
var z = require("zod");
var __1 = require("..");
exports.resetPassword = z.object({
    user_email: __1.email,
    user_password_new: __1.validString,
});
