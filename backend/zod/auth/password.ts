import * as z from "zod";
import { anyString, email } from "..";

export const resetPassword = z.object({
    user_email: email,
    user_password_new: anyString,
});

export type resetPasswordType = z.infer<typeof resetPassword>;
