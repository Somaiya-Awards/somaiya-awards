import * as z from "zod";
import { email, institute, role, validString } from "..";

export const Register = z.object({
    user_email_id: email,
    user_institution: institute,
    user_password: validString,
    user_role: role,
});

export type RegisterType = z.infer<typeof Register>;
