import * as z from "zod";
import { email, validString } from "../../../../backend/zod";
import { Role } from "../../../../backend/types/role";

export const UserLogin = z.object({
    role: z.enum(Role),
    institution: validString,
});

export type UserLoginType = z.infer<typeof UserLogin>;

export const BulkCreate = z.object({
    message: validString,
    results: z.array(
        z.object({
            email_id: email,
            action: validString.refine(
                (action: string) =>
                    action === "updated" || action === "created",
                { message: "Invalid action received" }
            ),
        })
    ),
});

export type BulkCreateType = z.infer<typeof BulkCreate>;
