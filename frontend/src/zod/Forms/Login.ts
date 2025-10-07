import z from "zod";
import {
    validString,
    email,
} from "../../../../backend/zod";

const LoginValidator = z.object({
    user_email: email,
    user_password: validString,
})

export default LoginValidator;
export type LoginType = z.infer<typeof LoginValidator>;