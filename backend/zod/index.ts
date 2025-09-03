import * as z from "zod";
import { Role } from "../types/role";
import institutes from "../../frontend/src/data/Institutions/institutes";

export const email = z.email({ error: "Invalid email address" });
export const validNumber = z.number().gte(0, "Number should be greater than 0");
export const role = z.enum(Role);
export const validString = z.string({ error: "String must not be null" });
export const institute = z.enum(institutes);
export const validBoolean = z.boolean();
