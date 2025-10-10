import * as z from "zod";
import { email, role, validNumber, validString } from "..";

export const JwtForm = z.object({
    id: validNumber,
    email_id: email,
    institution: validString.optional(),
    role: role.optional(),
});

export type JwtType = z.infer<typeof JwtForm>;
