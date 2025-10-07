import * as z from "zod";
import { validString, email } from "..";

export const UserLogin = z.object({
    user_email: email,
    user_password: validString,
});

export type UserLoginType = z.infer<typeof UserLogin>;
