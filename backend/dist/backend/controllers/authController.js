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
exports.userLogout = exports.bulkCreateOrUpdateUsers = exports.changePassword = exports.verifyForPasswordReset = exports.passwordReset = exports.registerUser = exports.userRefresh = exports.userLogin = void 0;
var models_1 = require("../models");
var express_async_handler_1 = require("express-async-handler");
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var nodemailer_1 = require("nodemailer");
var logger_1 = require("../middleware/logger");
var login_1 = require("../zod/auth/login");
var constants_1 = require("../constants");
var register_1 = require("../zod/auth/register");
var zod_1 = require("zod");
var password_1 = require("../zod/auth/password");
var _1 = require(".");
var zod_2 = require("../zod");
var jwt_1 = require("../middleware/jwt");
var cookie_1 = require("../middleware/cookie");
var csrfMiddleware_1 = require("../middleware/csrfMiddleware");
//@desc handle login
//@route POST /auth/login
//@access public
exports.userLogin = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_email, user_password, user, dbPassword, result, accessCookie, refreshCookie;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = (0, _1.checkObject)(req.body, login_1.UserLogin, res), user_email = _a.user_email, user_password = _a.user_password;
                return [4 /*yield*/, models_1.User.findOne({ where: { email_id: user_email } })];
            case 1:
                user = _b.sent();
                if (!user) {
                    logger_1.authLogger.error("User not found request made by IP address ".concat(req.ip));
                    res.status(401);
                    throw new Error("Unauthorized login request");
                }
                dbPassword = user.password;
                return [4 /*yield*/, bcrypt_1.default.compare(user_password, dbPassword)];
            case 2:
                result = _b.sent();
                if (result) {
                    accessCookie = (0, jwt_1.setJwtToken)(user, "1h");
                    refreshCookie = (0, jwt_1.setJwtToken)(user, "1d");
                    logger_1.authLogger.info("".concat(user.email_id, " logged in successfully"));
                    (0, cookie_1.setAccessCookie)(res, accessCookie);
                    (0, cookie_1.setRefreshCookie)(res, refreshCookie);
                    (0, csrfMiddleware_1.setCsrfCookie)(req, res);
                    res.status(200).json({
                        role: user.role,
                        institution: user.institution,
                    });
                }
                else {
                    logger_1.authLogger.error("User failed to log in ip ".concat(req.ip));
                    res.status(401);
                    throw new Error("Incorrect Email or password");
                }
                return [2 /*return*/];
        }
    });
}); });
//@desc handle cookie refresh
//@route POST /auth/refresh
//@access public
exports.userRefresh = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, refresh, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                refreshToken = req.cookies[constants_1.RefreshCookie];
                /**
                 * WARN: (Don't Follow that):
                 *
                 * if something breaks remove this if statement due to token or userID while TESTING
                 * */
                // Refresh absent
                if (!refreshToken) {
                    res.status(400).json({
                        message: "Malformed Request",
                    });
                    return [2 /*return*/];
                }
                if (Array.isArray(refreshToken)) {
                    res.status(400).json({
                        error: "Received Multiple Tokens",
                    });
                    return [2 /*return*/];
                }
                refresh = (0, jwt_1.getJwtToken)(refreshToken);
                if (refresh === null) {
                    res.status(401).json({
                        message: "Token Expired",
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, models_1.User.findOne({
                        where: { id: refresh.id, email_id: refresh.email_id },
                    })];
            case 1:
                user = _a.sent();
                if (user === null) {
                    res.status(401).json({
                        message: "User ID not found",
                    });
                    return [2 /*return*/];
                }
                (0, cookie_1.setAccessCookie)(res, (0, jwt_1.setJwtToken)(user, "1h"));
                (0, cookie_1.setRefreshCookie)(res, refreshToken);
                res.status(200).json({});
                return [2 /*return*/];
        }
    });
}); });
//@desc handle user creation from admin side
//@route POST /auth/register
//@access private
exports.registerUser = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_email_id, user_password, user_role, user_institution, user, hashedPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = (0, _1.checkObject)(req.body, register_1.Register, res), user_email_id = _a.user_email_id, user_password = _a.user_password, user_role = _a.user_role, user_institution = _a.user_institution;
                return [4 /*yield*/, models_1.User.findOne({ where: { email_id: user_email_id } })];
            case 1:
                user = _b.sent();
                if (user) {
                    //throw error
                    logger_1.authLogger.error("Failed to create usera as user already exists email ID : ".concat(user_email_id));
                    res.status(400);
                    throw new Error("User already exists!");
                }
                return [4 /*yield*/, bcrypt_1.default.hash(user_password, 10)];
            case 2:
                hashedPassword = _b.sent();
                return [4 /*yield*/, models_1.User.create({
                        email_id: user_email_id,
                        institution: user_institution,
                        role: user_role,
                        password: hashedPassword,
                    })];
            case 3:
                _b.sent();
                logger_1.authLogger.info("New user created email_id : ".concat(user_email_id));
                res.status(200).json({
                    message: "User created successfully",
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle password change request
//@route POST /auth/forgot-password
//@access public
exports.passwordReset = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quick, user_email, user, secret, token, link, testAccount, transporter, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                quick = zod_1.default.object({ user_email: zod_2.email });
                user_email = (0, _1.checkObject)(req.body, quick, res).user_email;
                return [4 /*yield*/, models_1.User.findOne({
                        where: { email_id: user_email },
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    logger_1.authLogger.error("User tried to reset password failed (user not found) IP ".concat(req.ip));
                    res.status(400);
                    throw new Error("User not Found ! Please make sure You have entered valid email address");
                }
                secret = process.env.JWT_RESET_SECRET + user.password;
                token = jsonwebtoken_1.default.sign({
                    email: user.email_id,
                    id: user.id,
                }, secret, { expiresIn: "5m" });
                link = "http://localhost:3000/auth/".concat(user.id, "/").concat(token);
                return [4 /*yield*/, nodemailer_1.default.createTestAccount()];
            case 2:
                testAccount = _a.sent();
                transporter = nodemailer_1.default.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.EMAIL_PASSWORD,
                    },
                });
                message = {
                    from: '"Somaiya Awards Server" <awards.svv@gmail.com>',
                    to: "{ ".concat(user_email, "}"),
                    subject: "Request for Password Reset",
                    text: "".concat(link),
                    html: "\n                <h2 style= \"background-color: rgb(185,28,28); width:100%;  text-align:center; padding:20px; color:white\">\n                     Link to Reset Password\n                </h2>\n                <br/>\n      \n                <p style=\"font-size:20px ;color: rgb(185,28,28)\">\n                    <strong> NOTE <strong> : Link will expire in 5 minutes\n                </p>\n                <br>\n                <p> ".concat(link, " <p>\n                <br>\n                <p style=\"text-align:center; background-color: #ededed; padding: 20px; line-height:2; \">\n                    All Rights Reserved \n                    <br>\n                    Somaiya Awards Team\n                </p>\n            "),
                };
                transporter.sendMail(message, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("email sent !!");
                    }
                });
                console.log(link);
                res.status(200).json({
                    message: "Link to reset password has been sent to registered mail ID. Please check your mail",
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc verify user to change password
//@route GET /auth/:id/:token
//@access private
exports.verifyForPasswordReset = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, token, user, secret, verify;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, token = _a.token;
                return [4 /*yield*/, models_1.User.findOne({ where: { id: id } })];
            case 1:
                user = _b.sent();
                if (!user) {
                    logger_1.authLogger.error("User not found for password reset verification  ID :".concat(id));
                    res.status(401);
                    throw new Error("Unauthorized access !");
                }
                secret = process.env.JWT_RESET_SECRET + user.password;
                verify = jsonwebtoken_1.default.verify(token, secret);
                if (verify) {
                    logger_1.authLogger.info("User verified for password reset user token ".concat(token, " id ").concat(id));
                    res.status(200).json({
                        authorized: true,
                    });
                }
                else {
                    logger_1.authLogger.info("Reset password access invalid token id ".concat(id, " token recieved ").concat(token));
                    res.status(401);
                    throw new Error(" Unauthorized access !");
                }
                return [2 /*return*/];
        }
    });
}); });
//@desc  change password
//@route POST /auth/:id/:token
//@access private
exports.changePassword = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, token, user, secret, verify, response, user_password_new, hashedPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, token = _a.token;
                return [4 /*yield*/, models_1.User.findOne({ where: { id: id } })];
            case 1:
                user = _b.sent();
                if (!user) {
                    logger_1.authLogger.error("User not found for password reset verification  ID :".concat(id));
                    res.status(401);
                    throw new Error("Unauthorized access!");
                }
                secret = process.env.JWT_RESET_SECRET + user.password;
                verify = jsonwebtoken_1.default.verify(token, secret);
                if (verify) {
                    logger_1.authLogger.info("User verified for password reset user token ".concat(token, " id ").concat(id));
                    res.status(200).json({
                        authorized: true,
                    });
                }
                else {
                    logger_1.authLogger.info("Reset password access invalid token id ".concat(id, " token received ").concat(token));
                    res.status(401);
                    throw new Error(" Unauthorized access!");
                }
                response = password_1.resetPassword.safeParse(req.body);
                if (!response.success) {
                    res.status(400);
                    throw new Error(response.error.issues.map(function (value) { return value.message; }).join("\n"));
                }
                user_password_new = response.data.user_password_new;
                if (!user) {
                    res.status(401);
                    throw new Error("User not found");
                }
                return [4 /*yield*/, bcrypt_1.default.hash(user_password_new, 10)];
            case 2:
                hashedPassword = _b.sent();
                return [4 /*yield*/, user.update({ password: hashedPassword })];
            case 3:
                _b.sent();
                return [4 /*yield*/, user.save()];
            case 4:
                _b.sent();
                logger_1.authLogger.info("User ".concat(user.email_id, " changed password successfully"));
                res.status(200).json({
                    message: "Password changed successfully",
                });
                return [2 /*return*/];
        }
    });
}); });
exports.bulkCreateOrUpdateUsers = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quick, formData, results, _i, formData_1, userData, user_email_id, user_institution, user_password, user_role, user, _a, hashedPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                quick = zod_1.default.object({ formData: zod_1.default.array(register_1.Register) });
                formData = (0, _1.checkObject)(req.body, quick, res).formData;
                results = [];
                _i = 0, formData_1 = formData;
                _b.label = 1;
            case 1:
                if (!(_i < formData_1.length)) return [3 /*break*/, 10];
                userData = formData_1[_i];
                user_email_id = userData.user_email_id, user_institution = userData.user_institution, user_password = userData.user_password, user_role = userData.user_role;
                return [4 /*yield*/, models_1.User.findOne({ where: { email_id: user_email_id } })];
            case 2:
                user = _b.sent();
                if (!user) return [3 /*break*/, 6];
                // User exists, update the user's information
                user.institution = user_institution || user.institution; // Update if new value is provided
                user.role = user_role || user.role; // Update if new value is provided
                if (!user_password) return [3 /*break*/, 4];
                _a = user;
                return [4 /*yield*/, bcrypt_1.default.hash(user_password, 10)];
            case 3:
                _a.password = _b.sent(); // Hash new password if provided
                _b.label = 4;
            case 4: return [4 /*yield*/, user.save()];
            case 5:
                _b.sent();
                results.push({ email_id: user_email_id, action: "updated" });
                logger_1.authLogger.info("User updated: ".concat(user_email_id));
                return [3 /*break*/, 9];
            case 6: return [4 /*yield*/, bcrypt_1.default.hash(user_password, 10)];
            case 7:
                hashedPassword = _b.sent();
                return [4 /*yield*/, models_1.User.create({
                        email_id: user_email_id,
                        institution: user_institution,
                        role: user_role,
                        password: hashedPassword,
                    })];
            case 8:
                _b.sent();
                results.push({ email_id: user_email_id, action: "created" });
                logger_1.authLogger.info("New user created: ".concat(user_email_id));
                _b.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 1];
            case 10:
                res.status(200).json({
                    message: "Bulk operation completed successfully",
                    results: results,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle logout
//@route POST /auth/logout
//@access public
exports.userLogout = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = req.user;
        if (!user) {
            res.status(301).json({
                message: "Already logged out",
            });
        }
        (0, cookie_1.removeAccessCookie)(res);
        (0, cookie_1.removeRefreshCookie)(res);
        res.status(200).json({
            message: "Successfully logged out",
        });
        return [2 /*return*/];
    });
}); });
