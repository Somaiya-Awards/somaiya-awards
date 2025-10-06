import asyncHandler from "express-async-handler";
import { CSRF, CSRF_SIZE } from "../constants";
import { setCookie } from "./cookie";
import { Request, Response } from "express";

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
