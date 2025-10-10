import * as z from "zod";
import { email, institute, role, validNumber, validString } from "..";

export const JwtForm = z.object({
  id: validNumber,
  email_id: email,
  institution: institute.optional(),
  role: role.optional(),
});

export type JwtType = z.infer<typeof JwtForm>;
