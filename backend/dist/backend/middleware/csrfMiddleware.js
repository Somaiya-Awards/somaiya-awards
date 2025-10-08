"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = randomString;
exports.setCsrfCookie = setCsrfCookie;
var express_async_handler_1 = require("express-async-handler");
var constants_1 = require("../constants");
var cookie_1 = require("./cookie");
function randomString(size) {
    if (size === void 0) { size = constants_1.CSRF_SIZE; }
    var csrfString = "";
    for (var i = 0; i < size; i++) {
        csrfString += constants_1.CSRF.charAt(Math.floor(Math.random() * constants_1.CSRF.length));
    }
    return csrfString;
}
function maskSecret(secret) {
    if (secret.length !== constants_1.CSRF_SIZE)
        return null;
    var mask = randomString();
    var cipher = "";
    for (var i = 0; i < constants_1.CSRF_SIZE; i++) {
        cipher += constants_1.CSRF.charAt((constants_1.CSRF.indexOf(mask.charAt(i)) + constants_1.CSRF.indexOf(secret.charAt(i))) %
            constants_1.CSRF.length);
    }
    return mask + cipher;
}
function unmaskSecret(token) {
    if (token.length !== 2 * constants_1.CSRF_SIZE)
        return null;
    var mask = token.substring(0, constants_1.CSRF_SIZE);
    var cipher = token.substring(constants_1.CSRF_SIZE);
    var secret = "";
    for (var i = 0; i < constants_1.CSRF_SIZE; i++) {
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
    var csrfToken = maskSecret(cookie);
    res.setHeader(constants_1.CsrfName, csrfToken);
}
/**
 * CSRF Workflow:
 *   Header Token -> x-csrf (CSRF Token)
 * */
var csrfMiddleware = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var csrfTokenHeader, csrfTokenCookie;
    return __generator(this, function (_a) {
        csrfTokenHeader = req.headers[constants_1.CsrfName];
        csrfTokenCookie = req.cookies[constants_1.CsrfName];
        setCsrfCookie(req, res);
        if (req.method === "GET") {
            next();
            return [2 /*return*/];
        }
        if (!(csrfTokenCookie && csrfTokenHeader)) {
            res.status(400).json({
                message: "Malformed CSRF Request",
            });
            return [2 /*return*/];
        }
        if (Array.isArray(csrfTokenCookie) || Array.isArray(csrfTokenHeader)) {
            res.status(400).json({
                error: "Received Multiple CSRF Tokens",
            });
            return [2 /*return*/];
        }
        if (csrfTokenCookie !== unmaskSecret(csrfTokenHeader)) {
            res.status(400).json({
                error: "Incorrect CSRF Token",
            });
            return [2 /*return*/];
        }
        next();
        return [2 /*return*/];
    });
}); });
exports.default = csrfMiddleware;
