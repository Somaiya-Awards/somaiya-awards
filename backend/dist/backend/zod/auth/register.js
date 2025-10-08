"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
var z = require("zod");
var __1 = require("..");
exports.Register = z.object({
    user_email_id: __1.email,
    user_institution: __1.institute,
    user_password: __1.validString,
    user_role: __1.role,
});
