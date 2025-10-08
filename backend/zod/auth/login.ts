import * as z from "zod";
import { email, anyString } from "..";

export const UserLogin = z.object({
    user_email: email,
    user_password: anyString,
});

export type UserLoginType = z.infer<typeof UserLogin>;
