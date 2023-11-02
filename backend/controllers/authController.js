const { where } = require('sequelize');
const { User } = require('../models')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { userAuthenticator } = require('../middleware/userAuthenticator')
const { authLogger } = require('../middleware/logger')

//@desc handle login
//@route POST /auth/login
//@access public

const userLogin = asyncHandler(async (req, res) => {

    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {

        authLogger.error("Email Id or password was not entered")
        res.status(400)
        throw new Error("All field are mandatory")
    }

    const user = await User.findOne({ where: { email_id: user_email } })

    if (!user) {

        authLogger.error(`User not found request made by IP address ${req.ip}`)
        res.status(401)
        throw new Error("Unauthorized login request")

    }

    const dbPassword = user['password']

    const result = await bcrypt.compare(user_password, dbPassword)

    if (result) {

        const secret = process.env.JWT_SECRET + user.password

        const token = jwt.sign({ email_id: user.email_id, id: user.id }, secret, { expiresIn: '2d' });

        authLogger.info(`${user.email_id} logged in successfully`)
        res.status(200).json({
            token: token,
            user_id: user.id,
            authorized: result,
            role: user.role,
            institution: user.institution
        })
    }
    else {
        authLogger.error(`User failed to log in ip ${req.ip}`)
        res.status(401)
        throw new Error("Incorrect Email or password")
    }

})


/** User Registration Code */
// const userLogin = asyncHandler( async (req,res)=>{

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

const registerUser = asyncHandler(async (req, res) => {

    const { user_email_id, user_institution, user_password, user_role } = req.body

    const user = await User.findOne({ where: { email_id: user_email_id } })

    if (user) {

        //throw error
        authLogger.error(`Failed to create usera as user already exists email ID : ${user_email_id}`)
        res.status(400)
        throw new Error("User already exists!")
    }

    const hashedPassword = await bcrypt.hash(user_password, 10)

    await User.create({ email_id: user_email_id, institution: user_institution, role: user_role, password: hashedPassword })

    authLogger.info(`New user created email_id : ${user_email_id}`)
    res.status(200).json({
        message: "User created successfully"
    })
})


//@desc handle password change request
//@route POST /auth/forgot-password
//@access public 

const passwordReset = asyncHandler(async (req, res) => {

    const { user_email } = req.body

    const user = await User.findOne({ where: { email_id: user_email } });

    if (!user) {

        authLogger.error(`User tried to reset password failed (user not found) IP ${req.ip}`)
        res.status(400)
        throw new Error("User not Found ! Please make sure You have entered valid email address")
    }

    const secret = process.env.JWT_RESET_SECRET + user.password

    const token = jwt.sign({
        email: user.email_id,
        id: user.id
    }, secret, { expiresIn: "5m" })

    const link = `http://localhost:3000/auth/${user.id}/${token}`

    // // mail the link to user

    let testAccount = await nodemailer.createTestAccount();


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let message = {
        from: '"Somaiya Awards Server" <somaiya_awards@somaiya.edu>',
        to: `{ ${user_email}}`,
        subject: "Testing",
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
    }

    let info = await transporter.sendMail(message, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('email sent !!')
        }
    });

    console.log(link);

    res.info(`Passord reset mail sent to user : ${user.email_id}`)
    res.status(200).json({
        message: "Link to reset password has been sent to registered mail ID. Please check your mail"
    })
})

//@desc verify user to change password
//@route GET /auth/:id/:token
//@access private 

const verifyForPasswordReset = asyncHandler(async (req, res) => {

    const { id, token } = req.params

    const user = await User.findOne({ where: { id: id } })

    if (!user) {

        authLogger.error(`user not found for password reset verification  ID :${id}`)
        res.status(401)
        throw new Error("Unauthorized access !")
    }

    const secret = process.env.JWT_RESET_SECRET + user.password
    const verify = jwt.verify(token, secret)

    if (verify) {

        authLogger.info(`User verified for password reset user token ${token} id ${id}`)
        res.status(200).json({

            authorized: true
        })
    }
    else {
        authLogger.info(`Reset password access invalid token id ${id} token recieved ${token}`)
        res.status(401)
        throw new Error(" Unauthorized access !")
    }
})

//@desc  change password
//@route POST /auth/:id/:token
//@access private 

const changePassword = asyncHandler(async (req, res) => {

    const { user_email, user_password_new } = req.body;

    const { id, token } = req.params

    const user = await User.findOne({ where: { id: id } })


    const hashedPassword = await bcrypt.hash(user_password_new, 10)

    await user.update({ password: hashedPassword })

    await user.save()

    authLogger.info(` user ${user.email_id} changed password successfully`)
    res.status(200).json({
        message: "Password changed successfully"
    })
})


const userValidate = asyncHandler(async (req, res) => {

    const token = res.token
    const user_id = res.user_id

    try {
        const user = await User.findOne({ where: { id: user_id } })

        if (!user) {
            // throw error
            res.status(404)
            throw new Error(" User not found !")
        }

        const secret = process.env.JWT_SECRET + user.password

        const result = jwt.verify(token, secret)

        if (!result) {
            //throw error

            res.status(401)
            throw new Error("User token invalid. Try logging again")
        }

        res.status(200).json({
            authorized: true,
            role: user.role
        })
    }
    catch (err) {
        res.status(401)

        throw new Error("User token invalid. Try logging again")
    }

})


/**
 * Exports
 */

module.exports = {
    userLogin,
    passwordReset,
    verifyForPasswordReset,
    changePassword,
    userValidate,
    registerUser
}

/**
 * default Credentials for Admin
 */

// email_id : admin@gmail.com
//password: Admin@123 (db BlowFish Encrypt 10  128b salts crypted )