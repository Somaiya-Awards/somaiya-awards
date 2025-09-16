import { StatusCode } from "../constants";
import { Request, Response, NextFunction } from "express";

function getErrorJson(
    err: Error,
    statusCode: StatusCode
): { title: string; message: string; stack?: string } {
    const debug = process.env.DEBUG === "1";
    console.log(process.env.DEBUG);

    const getTitle = (statusCode: StatusCode) => {
        switch (statusCode) {
            case StatusCode.BAD_REQUEST:
                return "400 : BAD REQUEST";

            case StatusCode.UNAUTHORIZED:
                return "401 : UNAUTHORIZED";

            case StatusCode.FORBIDDEN:
                return "403 : FORBIDDEN";

            case StatusCode.NOT_FOUND:
                return "404 : NOT FOUND";

            case StatusCode.METHOD_NOT_ALLOWED:
                return "405 : METHOD NOT ALLOWED";

            default:
                return "500 : Server Error";
        }
    };

    if (debug) {
        return {
            title: getTitle(statusCode),
            message: err.message,
            stack: err.stack,
        };
    } else {
        return {
            title: getTitle(statusCode),
            message: err.message,
        };
    }
}
export default function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const statusCode = res.statusCode ? res.statusCode : 500;

    let json = err.message;

    try {
        json = JSON.parse(json);
    } catch (e) {}

    err.message = json;

    res.json(getErrorJson(err, statusCode));
}
