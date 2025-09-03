import { User } from "../models";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { authLogger } from "../middleware/logger";
import { UserLogin, UserLoginType } from "../zod/auth/login";
import { setJwtToken } from "../middleware/userAuthenticator";
import { AccessHeader, RefreshHeader } from "../constants";
import { Register, RegisterType } from "../zod/auth/register";
import z from "zod";
import { resetPassword } from "../zod/auth/password";
import { checkObject } from ".";
import { email } from "../zod";

//@desc handle login
//@route POST /auth/login
//@access public
export const userLogin = asyncHandler(async (req, res) => {
    const { user_email, user_password } = checkObject<UserLoginType>(
        req.body,
        UserLogin,
        res
    );

    const user = await User.findOne({ where: { email_id: user_email } });

    if (!user) {
        authLogger.error(`User not found request made by IP address ${req.ip}`);
        res.status(401);
        throw new Error("Unauthorized login request");
    }

    const dbPassword = user.password;

    const result = bcrypt.compare(user_password, dbPassword);

    if (result) {
        let access = setJwtToken(user, "1h");
        let refresh = setJwtToken(user, "1d");

        authLogger.info(`${user.email_id} logged in successfully`);
        res.header(AccessHeader, access);
        res.header(RefreshHeader, refresh);

        res.status(200).json({
            authorized: result,
            role: user.role,
            institution: user.institution,
        });
    } else {
        authLogger.error(`User failed to log in ip ${req.ip}`);
        res.status(401);
        throw new Error("Incorrect Email or password");
    }
});

/** User Registration Code */
// export const userLogin = asyncHandler( async (req,res)=>{

//     const {user_email , user_password } = req.body;

//     const user = await User.findOne({where: {email_id: user_email}})

//     if(user){

//         res.status(400)
//         throw new Error("User already Exists")

//     }

//     const hashedPassword = await bcrypt.hash(user_password,10);

//     await User.create({email_id:user_email , password: hashedPassword , role:"hoi" })

//     res.status(200).json({
//         message:"User created successfully"
//     })

// })

//@desc handle user creation from admin side
//@route POST /auth/register
//@access private

export const registerUser = asyncHandler(async (req, res) => {
    const { user_email_id, user_password, user_role, user_institution } =
        checkObject<RegisterType>(req.body, Register, res);

    const user = await User.findOne({ where: { email_id: user_email_id } });

    if (user) {
        //throw error
        authLogger.error(
            `Failed to create usera as user already exists email ID : ${user_email_id}`
        );
        res.status(400);
        throw new Error("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    await User.create({
        email_id: user_email_id,
        institution: user_institution,
        role: user_role,
        password: hashedPassword,
    });

    authLogger.info(`New user created email_id : ${user_email_id}`);
    res.status(200).json({
        message: "User created successfully",
    });
});

//@desc handle password change request
//@route POST /auth/forgot-password
//@access public

export const passwordReset = asyncHandler(async (req, res) => {
    const quick = z.object({ user_email: email });
    type Quick = z.infer<typeof quick>;
    const { user_email } = checkObject<Quick>(req.body, quick, res);

    const user = await User.findOne({
        where: { email_id: user_email },
    });

    if (!user) {
        authLogger.error(
            `User tried to reset password failed (user not found) IP ${req.ip}`
        );
        res.status(400);
        throw new Error(
            "User not Found ! Please make sure You have entered valid email address"
        );
    }

    const secret = process.env.JWT_RESET_SECRET + user.password;

    const token = jwt.sign(
        {
            email: user.email_id,
            id: user.id,
        },
        secret,
        { expiresIn: "5m" }
    );

    // const link = `http://localhost:3000/auth/${user.id}/${token}`
    const link = `https://somaiyaawards.somaiya.edu/auth/${user.id}/${token}`;

    // // mail the link to user

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
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
        } else {
            console.log("email sent !!");
        }
    });

    console.log(link);

    res.status(200).json({
        message:
            "Link to reset password has been sent to registered mail ID. Please check your mail",
    });
});

//@desc verify user to change password
//@route GET /auth/:id/:token
//@access private

export const verifyForPasswordReset = asyncHandler(async (req, res) => {
    const { id, token } = req.params;

    const user = await User.findOne({ where: { id: id } });

    if (!user) {
        authLogger.error(
            `User not found for password reset verification  ID :${id}`
        );
        res.status(401);
        throw new Error("Unauthorized access !");
    }

    const secret = process.env.JWT_RESET_SECRET + user.password;
    const verify = jwt.verify(token, secret);

    if (verify) {
        authLogger.info(
            `User verified for password reset user token ${token} id ${id}`
        );
        res.status(200).json({
            authorized: true,
        });
    } else {
        authLogger.info(
            `Reset password access invalid token id ${id} token recieved ${token}`
        );
        res.status(401);
        throw new Error(" Unauthorized access !");
    }
});

//@desc  change password
//@route POST /auth/:id/:token
//@access private

export const changePassword = asyncHandler(async (req, res) => {
    const { id, token } = req.params;

    const user = await User.findOne({ where: { id: id } });

    if (!user) {
        authLogger.error(
            `User not found for password reset verification  ID :${id}`
        );
        res.status(401);
        throw new Error("Unauthorized access!");
    }

    const secret = process.env.JWT_RESET_SECRET + user.password;
    const verify = jwt.verify(token, secret);

    if (verify) {
        authLogger.info(
            `User verified for password reset user token ${token} id ${id}`
        );
        res.status(200).json({
            authorized: true,
        });
    } else {
        authLogger.info(
            `Reset password access invalid token id ${id} token received ${token}`
        );
        res.status(401);
        throw new Error(" Unauthorized access!");
    }
    
    const response = resetPassword.safeParse(req.body);

    if (!response.success) {
        res.status(400);
        throw new Error(
            response.error.issues.map((value) => value.message).join("\n")
        );
    }

    const { user_password_new } = response.data;

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }

    const hashedPassword = await bcrypt.hash(user_password_new, 10);

    await user.update({ password: hashedPassword });

    await user.save();

    authLogger.info(`User ${user.email_id} changed password successfully`);
    
    res.status(200).json({
        message: "Password changed successfully",
    });
});

export const bulkCreateOrUpdateUsers = asyncHandler(async (req, res) => {
    const quick = z.object({ formData: z.array(Register) });

    const { formData } = checkObject<z.infer<typeof quick>>(
        req.body,
        quick,
        res
    );

    const results = [];

    for (const userData of formData) {
        const { user_email_id, user_institution, user_password, user_role } =
            userData;

        const user = await User.findOne({ where: { email_id: user_email_id } });

        if (user) {
            // User exists, update the user's information
            user.institution = user_institution || user.institution; // Update if new value is provided
            user.role = user_role || user.role; // Update if new value is provided
            if (user_password) {
                user.password = await bcrypt.hash(user_password, 10); // Hash new password if provided
            }
            await user.save();
            results.push({ email_id: user_email_id, action: "updated" });
            authLogger.info(`User updated: ${user_email_id}`);
        } else {
            // User does not exist, create a new user
            const hashedPassword = await bcrypt.hash(user_password, 10);
            await User.create({
                email_id: user_email_id,
                institution: user_institution,
                role: user_role,
                password: hashedPassword,
            });
            results.push({ email_id: user_email_id, action: "created" });
            authLogger.info(`New user created: ${user_email_id}`);
        }
    }

    res.status(200).json({
        message: "Bulk operation completed successfully",
        results,
    });
});
