import * as z from "zod";
import { email, role, validString, anyString } from "..";

export const UserForm = z.object({
    email_id: email,
    institution: validString,
    password: anyString,
    role: role.nullable(),
});

export type UserType = z.infer<typeof UserForm>;
