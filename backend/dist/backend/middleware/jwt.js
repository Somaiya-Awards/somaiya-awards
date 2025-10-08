"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtToken = getJwtToken;
exports.setJwtToken = setJwtToken;
exports.randomJwt = randomJwt;
var jsonwebtoken_1 = require("jsonwebtoken");
var jwt_1 = require("../zod/auth/jwt");
function getJwtToken(token) {
    try {
        var secret = process.env.JWT_SECRET;
        if (secret === undefined)
            throw new Error("JWT Secret not found");
        return jwt_1.JwtForm.parse(jsonwebtoken_1.default.verify(token, secret));
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
function setJwtToken(user, expire) {
    var payload = {
        id: user.getDataValue("id"),
        email_id: user.getDataValue("email_id"),
        role: user.getDataValue("role"),
        institution: user.getDataValue("institution"),
    };
    //@ts-ignore No Password on token
    var secret = process.env.JWT_SECRET;
    if (secret === undefined)
        throw new Error("JWT Secret not found");
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expire });
}
function randomJwt(expire) {
    //@ts-ignore No Password on token
    var secret = process.env.JWT_SECRET;
    if (secret === undefined)
        throw new Error("JWT Secret not found");
    return jsonwebtoken_1.default.sign({ key: Date.now() * Math.random(), value: Date.now() * Math.random() }, secret, { expiresIn: expire });
}
