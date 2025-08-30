import {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
} from "../constants";
import { Request, Response, NextFunction } from "express";

export default function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const statusCode = res.statusCode ? res.statusCode : 500;

    // TODO: Remove these stacks. No traceback in Prod

    switch (statusCode) {
        case BAD_REQUEST:
            res.json({
                title: "400 : BAD REQUEST",
                message: err.message,
                stack: err.stack,
            });

            break;

        case UNAUTHORIZED:
            res.json({
                title: "401 : UNAUTHORIZED",
                message: err.message,
                stack: err.stack,
            });

            break;

        case FORBIDDEN:
            res.json({
                title: "403 : FORBIDDEN",
                message: err.message,
                stack: err.stack,
            });

            break;

        case NOT_FOUND:
            res.json({
                title: "404 : NOT FOUND",
                message: err.message,
                stack: err.stack,
            });

            break;

        case METHOD_NOT_ALLOWED:
            res.json({
                title: "405 : METHOD NOT ALLOWED",
                message: err.message,
                stack: err.stack,
            });

            break;
        default:
            res.json({
                title: "500 : Server Error",
                message: err.message,
                stack: err.stack,
            });
    }
}
