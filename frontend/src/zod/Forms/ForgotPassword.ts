import z from "zod";
import {
    validString,
    email,
} from "../../../../backend/zod";

const ForgotValidator = z.object({
    user_email: email,
    user_password_new: validString,
})

export default ForgotValidator;
export type ForgotType = z.infer<typeof ForgotValidator>;

export const ForgotPasswordValidator = z.object({
    user_email_id: email
})

export type ForgotPasswordType = z.infer<typeof ForgotPasswordValidator>;