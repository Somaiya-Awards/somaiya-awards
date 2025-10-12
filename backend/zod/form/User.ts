import * as z from "zod";
import { email, role, validString, anyString } from "..";

export const UserForm = z.object({
    email_id: email,
    institution: validString.optional().nullable(),
    password: anyString,
    role: role,
});

export type UserType = z.infer<typeof UserForm>;
