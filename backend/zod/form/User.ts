import * as z from "zod";
import { email, role, validNumber, validString } from "..";

export const UserForm = z.object({
    id: validNumber,
    email_id: validString,
    institution: validString,
    password: validString,
    role: role.nullable(),
});
