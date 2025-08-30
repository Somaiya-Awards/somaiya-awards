import { Request, Response } from "express";
import z from "zod";
import { FileRequest } from "../types/request";

/** Checks schema against validator and throws an error if invalid schema and also set res to status 400 */
export function checkObject(
    data: { [key: string]: any },
    validator: z.ZodObject,
    res: Response
) {
    let response = validator.safeParse(data);

    if (!response.success) {
        res.status(400);
        throw new Error(
            response.error.issues.map((value) => value.message).join("\n")
        );
    }

    return response;
}

export function checkFiles(req: Request, res: Response) {
    const files = (req as FileRequest).files;

    if (Array.isArray(files)) {
        res.status(400);
        throw new Error("Invalid File Response");
    }

    if (!files) {
        res.status(400);
        throw new Error("Invalid File Response");
    }

    return files;
}
