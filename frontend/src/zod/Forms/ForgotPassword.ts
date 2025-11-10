import z from "zod";
import { anyString, email } from "@/backend/zod";

const ForgotValidator = z.object({
    user_email: email,
    user_password_new: anyString,
});

export default ForgotValidator;
export type ForgotType = z.infer<typeof ForgotValidator>;

export const ForgotPasswordValidator = z.object({
    user_email_id: email,
});

export type ForgotPasswordType = z.infer<typeof ForgotPasswordValidator>;
