"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = setCookie;
exports.setAccessCookie = setAccessCookie;
exports.setRefreshCookie = setRefreshCookie;
exports.removeAccessCookie = removeAccessCookie;
exports.removeRefreshCookie = removeRefreshCookie;
const constants_1 = require("../constants");
function setCookieOption(timeout, path = null, httpOnly = true) {
    let maxAge = 0;
    let prod = process.env.PROD === "1";
    switch (timeout) {
        case "1h":
            maxAge += 1000 * 60 * 60;
            break;
        case "1d":
            maxAge += 1000 * 60 * 60 * 24;
            break;
        default:
            throw new Error("Invalid expiration time");
    }
    let config = {
        maxAge,
        httpOnly,
        secure: prod,
        sameSite: prod ? "none" : "lax",
    };
    if (path) {
        config.path = path;
    }
    return config;
}
function setCookie(res, cookieName, cookieValue, timeout, path = null, httpOnly = false) {
    res.cookie(cookieName, cookieValue, setCookieOption(timeout, path, httpOnly));
}
function setAccessCookie(res, cookie) {
    setCookie(res, constants_1.AccessCookie, cookie, "1h");
}
function setRefreshCookie(res, cookie) {
    setCookie(res, constants_1.RefreshCookie, cookie, "1d", "/auth/refresh");
}
function removeAccessCookie(res) {
    res.clearCookie(constants_1.AccessCookie, setCookieOption("1h"));
}
function removeRefreshCookie(res) {
    res.clearCookie(constants_1.RefreshCookie, setCookieOption("1d", "/auth/refresh"));
}
