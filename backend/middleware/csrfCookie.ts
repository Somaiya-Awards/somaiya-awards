import asyncHandler from "express-async-handler";
import {
    CsrfHeader,
} from "../constants";
import { setCsrfCookie } from "./cookie";

/**
 * CSRF Workflow:
 *   Header Token -> x-csrf (CSRF Token)
 * */
const csrfMiddleware = asyncHandler(async (req, res, next) => {
    const csrfTokenHeader = req.headers[CsrfHeader];
    const csrfTokenCookie = req.cookies[CsrfHeader];

    setCsrfCookie(res);

    if (!(csrfTokenCookie && csrfTokenHeader)) {
        res.status(400).json({
            message: "Malformed Csrf Request",
        });
        return;
    }

    if (
        Array.isArray(csrfTokenCookie) ||
        Array.isArray(csrfTokenHeader)
    ) {
        res.status(400).json({
            error: "Received Multiple Csrf Tokens",
        });
        return;
    }
    if (!csrfTokenHeader.startsWith("Bearer ")) {
        res.status(412).json({
            error: "Csrf Token Missing",
        });
        return;
    }

    if (csrfTokenCookie !== csrfTokenHeader.substring(7)) {
        res.status(412).json({
            error: "Incorrect Csrf Token",
        });
        return;
    }

    next();
});

export default csrfMiddleware;
