import asyncHandler from "express-async-handler";
import { CSRF, CSRF_SIZE, CsrfName } from "../constants";
import { setCookie } from "./cookie";
import { Response } from "express";

export function randomString(size: number = CSRF_SIZE) {
    let csrfString = "";

    for (let i = 0; i < size; i++) {
        csrfString += CSRF.charAt(Math.floor(Math.random() * CSRF.length));
    }

    return csrfString;
}

function maskSecret(secret: string) {
    if (secret.length !== CSRF_SIZE) return null;

    const mask = randomString();
    let cipher = "";

    for (let i = 0; i < CSRF_SIZE; i++) {
        cipher += CSRF.charAt(
            (CSRF.indexOf(mask.charAt(i)) + CSRF.indexOf(secret.charAt(i))) %
                CSRF.length
        );
    }

    return mask + cipher;
}

function unmaskSecret(token: string) {
    if (token.length !== 2 * CSRF_SIZE) return null;

    const mask = token.substring(0, CSRF_SIZE);
    const cipher = token.substring(CSRF_SIZE);

    let secret = "";
    for (let i = 0; i < CSRF_SIZE; i++) {
        secret += CSRF.charAt(
            (CSRF.indexOf(cipher.charAt(i)) -
                CSRF.indexOf(mask.charAt(i)) +
                CSRF.length) %
                CSRF.length
        );
    }

    return secret;
}

export function setCsrfCookie(res: Response) {
    const cookie = randomString();

    const csrfToken = maskSecret(cookie);

    setCookie(res, CsrfName, cookie, "1h");

    res.setHeader(CsrfName, csrfToken as string);
}

/**
 * CSRF Workflow:
 *   Header Token -> x-csrf (CSRF Token)
 * */
const csrfMiddleware = asyncHandler(async (req, res, next) => {
    const csrfTokenHeader = req.headers[CsrfName];
    const csrfTokenCookie = req.cookies[CsrfName];

    if (!req.cookies[CsrfName]) setCsrfCookie(res);

    if (req.method === "GET") {
        next();
        return;
    }

    if (!(csrfTokenCookie && csrfTokenHeader)) {
        res.status(400).json({
            message: "Malformed CSRF Request",
        });
        return;
    }

    if (Array.isArray(csrfTokenCookie) || Array.isArray(csrfTokenHeader)) {
        res.status(400).json({
            error: "Received Multiple CSRF Tokens",
        });
        return;
    }

    if (csrfTokenCookie !== unmaskSecret(csrfTokenHeader)) {
        res.status(400).json({
            error: "Incorrect CSRF Token",
        });
        return;
    }

    next();
});

export default csrfMiddleware;
