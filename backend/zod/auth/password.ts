import * as z from "zod";
import { email, validString } from "..";

export const resetPassword = z.object({
    user_email: email,
    user_password_new: validString,
});
