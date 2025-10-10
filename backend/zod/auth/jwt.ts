import * as z from "zod";
import { email, institute, role, validNumber, validString } from "..";

export const JwtForm = z.object({
  id: validNumber,
  email_id: email,
  institution: validString.optional().nullable(),
  role: role.optional(),
});

export type JwtType = z.infer<typeof JwtForm>;