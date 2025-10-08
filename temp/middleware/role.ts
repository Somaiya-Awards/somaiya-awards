import asyncHandler from "express-async-handler";
import { AuthRequest } from "../types/request";
import { Role } from "../types/role";

export default function roleMiddle(role: Role) {
    return asyncHandler(async (req, res, next) => {
        const user = (req as AuthRequest).user;

        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        if (user.role !== role) {
            res.status(403);
            throw new Error("Forbidden Access");
        }

        next();
    });
}
