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
var express_async_handler_1 = require("express-async-handler");
// import { authLogger } from "logger";
var models_1 = require("../models");
var constants_1 = require("../constants");
var jwt_1 = require("./jwt");
/**
 * Auth Workflow:
 *   Header Token -> x-access (Main Token), x-refresh (Refresh Token to refresh access)
 * */
var userAuthenticator = (0, express_async_handler_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, access, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                accessToken = req.cookies[constants_1.AccessCookie];
                /**
                 * WARN: (Don't Follow that):
                 *
                 * if something breaks remove this if statement due to token or userID while TESTING
                 * */
                // Both absent
                if (!accessToken) {
                    res.status(400).json({
                        message: "Malformed Request",
                    });
                    return [2 /*return*/];
                }
                if (Array.isArray(accessToken)) {
                    res.status(400).json({
                        error: "Received Multiple Tokens",
                    });
                    return [2 /*return*/];
                }
                access = (0, jwt_1.getJwtToken)(accessToken);
                if (access === null) {
                    res.status(418).json({
                        message: "Token Expired",
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, models_1.User.findOne({
                        where: { id: access.id, email_id: access.email_id },
                    })];
            case 1:
                user = _a.sent();
                if (user == null) {
                    res.status(401).json({
                        message: "User ID not found",
                    });
                    return [2 /*return*/];
                }
                req.user = user;
                next();
                return [2 /*return*/];
        }
    });
}); });
exports.default = userAuthenticator;
