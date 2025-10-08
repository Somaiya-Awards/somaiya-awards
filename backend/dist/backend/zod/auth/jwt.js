"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtForm = void 0;
var z = require("zod");
var __1 = require("..");
exports.JwtForm = z.object({
    id: __1.validNumber,
    email_id: __1.email,
    institution: __1.validString.nullable(),
    role: __1.role.nullable(),
});
