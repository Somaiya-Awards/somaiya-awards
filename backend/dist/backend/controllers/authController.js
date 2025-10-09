"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogout = exports.bulkCreateOrUpdateUsers = exports.changePassword = exports.verifyForPasswordReset = exports.passwordReset = exports.registerUser = exports.userRefresh = exports.userLogin = void 0;
const models_1 = require("../models");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_1 = require("../middleware/logger");
const login_1 = require("../zod/auth/login");
const constants_1 = require("../constants");
const register_1 = require("../zod/auth/register");
const zod_1 = __importDefault(require("zod"));
const password_1 = require("../zod/auth/password");
const _1 = require(".");
const zod_2 = require("../zod");
const jwt_1 = require("../middleware/jwt");
const cookie_1 = require("../middleware/cookie");
const csrfMiddleware_1 = require("../middleware/csrfMiddleware");
//@desc handle login
//@route POST /auth/login
//@access public
exports.userLogin = (0, express_async_handler_1.default)(async (req, res) => {
    const { user_email, user_password } = (0, _1.checkObject)(req.body, login_1.UserLogin, res);
    const user = await models_1.User.findOne({ where: { email_id: user_email } });
    if (!user) {
        logger_1.authLogger.error(`User not found request made by IP address ${req.ip}`);
        res.status(401);
        throw new Error("Unauthorized login request");
    }
    const dbPassword = user.password;
    const result = await bcrypt_1.default.compare(user_password, dbPassword); // this was a promise??
    if (result) {
        const accessCookie = (0, jwt_1.setJwtToken)(user, "1h");
        const refreshCookie = (0, jwt_1.setJwtToken)(user, "1d");
        logger_1.authLogger.info(`${user.email_id} logged in successfully`);
        (0, cookie_1.setAccessCookie)(res, accessCookie);
        (0, cookie_1.setRefreshCookie)(res, refreshCookie);
        (0, csrfMiddleware_1.setCsrfCookie)(req, res);
        res.status(200).json({
            role: user.role,
            institution: user.institution,
        });
    }
    else {
        logger_1.authLogger.error(`User failed to log in ip ${req.ip}`);
        res.status(401);
        throw new Error("Incorrect Email or password");
    }
});
//@desc handle cookie refresh
//@route POST /auth/refresh
//@access public
exports.userRefresh = (0, express_async_handler_1.default)(async (req, res) => {
    const refreshToken = req.cookies[constants_1.RefreshCookie];
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
        return;
    }
    if (Array.isArray(refreshToken)) {
        res.status(400).json({
            error: "Received Multiple Tokens",
        });
        return;
    }
    /**till here */
    let refresh = (0, jwt_1.getJwtToken)(refreshToken);
    if (refresh === null) {
        res.status(401).json({
            message: "Token Expired",
        });
        return;
    }
    let user = await models_1.User.findOne({
        where: { id: refresh.id, email_id: refresh.email_id },
    });
    if (user === null) {
        res.status(401).json({
            message: "User ID not found",
        });
        return;
    }
    (0, cookie_1.setAccessCookie)(res, (0, jwt_1.setJwtToken)(user, "1h"));
    (0, cookie_1.setRefreshCookie)(res, refreshToken);
    res.status(200).json({});
});
//@desc handle user creation from admin side
//@route POST /auth/register
//@access private
exports.registerUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { user_email_id, user_password, user_role, user_institution } = (0, _1.checkObject)(req.body, register_1.Register, res);
    const user = await models_1.User.findOne({ where: { email_id: user_email_id } });
    if (user) {
        //throw error
        logger_1.authLogger.error(`Failed to create usera as user already exists email ID : ${user_email_id}`);
        res.status(400);
        throw new Error("User already exists!");
    }
    const hashedPassword = await bcrypt_1.default.hash(user_password, 10);
    await models_1.User.create({
        email_id: user_email_id,
        institution: user_institution,
        role: user_role,
        password: hashedPassword,
    });
    logger_1.authLogger.info(`New user created email_id : ${user_email_id}`);
    res.status(200).json({
        message: "User created successfully",
    });
});
//@desc handle password change request
//@route POST /auth/forgot-password
//@access public
exports.passwordReset = (0, express_async_handler_1.default)(async (req, res) => {
    const quick = zod_1.default.object({ user_email: zod_2.email });
    const { user_email } = (0, _1.checkObject)(req.body, quick, res);
    const user = await models_1.User.findOne({
        where: { email_id: user_email },
    });
    if (!user) {
        logger_1.authLogger.error(`User tried to reset password failed (user not found) IP ${req.ip}`);
        res.status(400);
        throw new Error("User not Found ! Please make sure You have entered valid email address");
    }
    const secret = process.env.JWT_RESET_SECRET + user.password;
    const token = jsonwebtoken_1.default.sign({
        email: user.email_id,
        id: user.id,
    }, secret, { expiresIn: "5m" });
    // const link = `http://localhost:3000/auth/${user.id}/${token}`;
    const link = `https://somaiyaawards.somaiya.edu/auth/${user.id}/${token}`;
    // // mail the link to user
    let testAccount = await nodemailer_1.default.createTestAccount();
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    let message = {
        from: '"Somaiya Awards Server" <awards.svv@gmail.com>',
        to: `{ ${user_email}}`,
        subject: "Request for Password Reset",
        text: `${link}`,
        html: `
                <h2 style= "background-color: rgb(185,28,28); width:100%;  text-align:center; padding:20px; color:white">
                     Link to Reset Password
                </h2>
                <br/>
      
                <p style="font-size:20px ;color: rgb(185,28,28)">
                    <strong> NOTE <strong> : Link will expire in 5 minutes
                </p>
                <br>
                <p> ${link} <p>
                <br>
                <p style="text-align:center; background-color: #ededed; padding: 20px; line-height:2; ">
                    All Rights Reserved 
                    <br>
                    Somaiya Awards Team
                </p>
            `,
    };
    transporter.sendMail(message, (err) => {
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
});
//@desc verify user to change password
//@route GET /auth/:id/:token
//@access private
exports.verifyForPasswordReset = (0, express_async_handler_1.default)(async (req, res) => {
    const { id, token } = req.params;
    const user = await models_1.User.findOne({ where: { id: id } });
    if (!user) {
        logger_1.authLogger.error(`User not found for password reset verification  ID :${id}`);
        res.status(401);
        throw new Error("Unauthorized access !");
    }
    const secret = process.env.JWT_RESET_SECRET + user.password;
    const verify = jsonwebtoken_1.default.verify(token, secret);
    if (verify) {
        logger_1.authLogger.info(`User verified for password reset user token ${token} id ${id}`);
        res.status(200).json({
            authorized: true,
        });
    }
    else {
        logger_1.authLogger.info(`Reset password access invalid token id ${id} token recieved ${token}`);
        res.status(401);
        throw new Error(" Unauthorized access !");
    }
});
//@desc  change password
//@route POST /auth/:id/:token
//@access private
exports.changePassword = (0, express_async_handler_1.default)(async (req, res) => {
    const { id, token } = req.params;
    const user = await models_1.User.findOne({ where: { id: id } });
    if (!user) {
        logger_1.authLogger.error(`User not found for password reset verification  ID :${id}`);
        res.status(401);
        throw new Error("Unauthorized access!");
    }
    const secret = process.env.JWT_RESET_SECRET + user.password;
    const verify = jsonwebtoken_1.default.verify(token, secret);
    if (verify) {
        logger_1.authLogger.info(`User verified for password reset user token ${token} id ${id}`);
        res.status(200).json({
            authorized: true,
        });
    }
    else {
        logger_1.authLogger.info(`Reset password access invalid token id ${id} token received ${token}`);
        res.status(401);
        throw new Error(" Unauthorized access!");
    }
    const response = password_1.resetPassword.safeParse(req.body);
    if (!response.success) {
        res.status(400);
        throw new Error(response.error.issues.map((value) => value.message).join("\n"));
    }
    const { user_password_new } = response.data;
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    const hashedPassword = await bcrypt_1.default.hash(user_password_new, 10);
    await user.update({ password: hashedPassword });
    await user.save();
    logger_1.authLogger.info(`User ${user.email_id} changed password successfully`);
    res.status(200).json({
        message: "Password changed successfully",
    });
});
exports.bulkCreateOrUpdateUsers = (0, express_async_handler_1.default)(async (req, res) => {
    const quick = zod_1.default.object({ formData: zod_1.default.array(register_1.Register) });
    const { formData } = (0, _1.checkObject)(req.body, quick, res);
    const results = [];
    for (const userData of formData) {
        const { user_email_id, user_institution, user_password, user_role } = userData;
        const user = await models_1.User.findOne({ where: { email_id: user_email_id } });
        if (user) {
            // User exists, update the user's information
            user.institution = user_institution || user.institution; // Update if new value is provided
            user.role = user_role || user.role; // Update if new value is provided
            if (user_password) {
                user.password = await bcrypt_1.default.hash(user_password, 10); // Hash new password if provided
            }
            await user.save();
            results.push({ email_id: user_email_id, action: "updated" });
            logger_1.authLogger.info(`User updated: ${user_email_id}`);
        }
        else {
            // User does not exist, create a new user
            const hashedPassword = await bcrypt_1.default.hash(user_password, 10);
            await models_1.User.create({
                email_id: user_email_id,
                institution: user_institution,
                role: user_role,
                password: hashedPassword,
            });
            results.push({ email_id: user_email_id, action: "created" });
            logger_1.authLogger.info(`New user created: ${user_email_id}`);
        }
    }
    res.status(200).json({
        message: "Bulk operation completed successfully",
        results,
    });
});
//@desc handle logout
//@route POST /auth/logout
//@access public
exports.userLogout = (0, express_async_handler_1.default)(async (req, res) => {
    const user = req.user;
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
});
