import * as z from "zod";
import { anyString, email, institute, role } from "..";

export const Register = z.object({
    user_email_id: email,
    user_institution: institute.optional(),
    user_password: anyString,
    user_role: role,
});

export type RegisterType = z.infer<typeof Register>;
