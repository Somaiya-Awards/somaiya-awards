import z from "zod";
import {
    anyString,
    email,
} from "../../../../backend/zod";

const LoginValidator = z.object({
    user_email: email,
    user_password: anyString,
})

export default LoginValidator;
export type LoginType = z.infer<typeof LoginValidator>;