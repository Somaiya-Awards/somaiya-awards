"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = randomString;
exports.setCsrfCookie = setCsrfCookie;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const constants_1 = require("../constants");
const cookie_1 = require("./cookie");
function randomString(size = constants_1.CSRF_SIZE) {
    let csrfString = "";
    for (let i = 0; i < size; i++) {
        csrfString += constants_1.CSRF.charAt(Math.floor(Math.random() * constants_1.CSRF.length));
    }
    return csrfString;
}
function maskSecret(secret) {
    if (secret.length !== constants_1.CSRF_SIZE)
        return null;
    const mask = randomString();
    let cipher = "";
    for (let i = 0; i < constants_1.CSRF_SIZE; i++) {
        cipher += constants_1.CSRF.charAt((constants_1.CSRF.indexOf(mask.charAt(i)) + constants_1.CSRF.indexOf(secret.charAt(i))) %
            constants_1.CSRF.length);
    }
    return mask + cipher;
}
function unmaskSecret(token) {
    if (token.length !== 2 * constants_1.CSRF_SIZE)
        return null;
    const mask = token.substring(0, constants_1.CSRF_SIZE);
    const cipher = token.substring(constants_1.CSRF_SIZE);
    let secret = "";
    for (let i = 0; i < constants_1.CSRF_SIZE; i++) {
        secret += constants_1.CSRF.charAt((constants_1.CSRF.indexOf(cipher.charAt(i)) -
            constants_1.CSRF.indexOf(mask.charAt(i)) +
            constants_1.CSRF.length) %
            constants_1.CSRF.length);
    }
    return secret;
}
function setCsrfCookie(req, res) {
    var cookie;
    if (!req.cookies[constants_1.CsrfName]) {
        cookie = randomString();
        (0, cookie_1.setCookie)(res, constants_1.CsrfName, cookie, "1h");
    }
    else {
        cookie = req.cookies[constants_1.CsrfName];
    }
    const csrfToken = maskSecret(cookie);
    res.setHeader(constants_1.CsrfName, csrfToken);
}
/**
 * CSRF Workflow:
 *   Header Token -> x-csrf (CSRF Token)
 * */
const csrfMiddleware = (0, express_async_handler_1.default)(async (req, res, next) => {
    const csrfTokenHeader = req.headers[constants_1.CsrfName];
    const csrfTokenCookie = req.cookies[constants_1.CsrfName];
    const disable = process.env.CsrfDisable === "1";
    if (disable) {
        next();
        return;
    }
    setCsrfCookie(req, res);
    if (req.method === "GET") {
        next();
        return;
    }
    if (!(csrfTokenCookie && csrfTokenHeader)) {
        res.status(400).json({
            message: "Malformed CSRF Request",
        });
        return;
    }
    if (Array.isArray(csrfTokenCookie) || Array.isArray(csrfTokenHeader)) {
        res.status(400).json({
            error: "Received Multiple CSRF Tokens",
        });
        return;
    }
    if (csrfTokenCookie !== unmaskSecret(csrfTokenHeader)) {
        res.status(400).json({
            error: "Incorrect CSRF Token",
        });
        return;
    }
    next();
});
exports.default = csrfMiddleware;
