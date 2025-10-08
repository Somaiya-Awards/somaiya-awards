"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
var constants_1 = require("../constants");
function getErrorJson(err, statusCode) {
    var debug = process.env.DEBUG === "1";
    var getTitle = function (statusCode) {
        switch (statusCode) {
            case constants_1.StatusCode.BAD_REQUEST:
                return "400 : BAD REQUEST";
            case constants_1.StatusCode.UNAUTHORIZED:
                return "401 : UNAUTHORIZED";
            case constants_1.StatusCode.FORBIDDEN:
                return "403 : FORBIDDEN";
            case constants_1.StatusCode.NOT_FOUND:
                return "404 : NOT FOUND";
            case constants_1.StatusCode.METHOD_NOT_ALLOWED:
                return "405 : METHOD NOT ALLOWED";
            default:
                return "500 : Server Error";
        }
    };
    if (debug) {
        return {
            title: getTitle(statusCode),
            message: err.message,
            stack: err.stack,
        };
    }
    else {
        return {
            title: getTitle(statusCode),
            message: err.message,
        };
    }
}
function errorHandler(err, req, res, next) {
    var statusCode = res.statusCode ? res.statusCode : 500;
    var json = err.message;
    try {
        json = JSON.parse(json);
    }
    catch (e) { }
    err.message = json;
    res.json(getErrorJson(err, statusCode));
}
