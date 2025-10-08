"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
var z = require("zod");
var __1 = require("..");
exports.UserLogin = z.object({
    user_email: __1.email,
    user_password: __1.validString,
});
