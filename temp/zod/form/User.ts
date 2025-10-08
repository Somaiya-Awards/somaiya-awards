import * as z from "zod";
import { email, role, validString } from "..";

export const UserForm = z.object({
    email_id: email,
    institution: validString,
    password: validString,
    role: role.nullable(),
});

export type UserType = z.infer<typeof UserForm>;
