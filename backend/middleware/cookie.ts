import { CookieOptions, Response } from "express";
import { AccessCookie, RefreshCookie } from "../constants";
import { JwtTimeout } from "./jwt";

function setCookieOption(
    timeout: JwtTimeout,
    path: string | null = null,
    httpOnly: boolean = true
): CookieOptions {
    let expire = Date.now();

    switch (timeout) {
        case "1h":
            expire += 1000 * 60 * 60;
            break;
        case "1d":
            expire += 1000 * 60 * 60 * 24;
            break;
        default:
            throw new Error("Invalid expiration time");
    }
    if (!path) {
        return {
            expires: new Date(expire),
            httpOnly,
            sameSite: "none",
        };
    } else {
        return {
            expires: new Date(expire),
            httpOnly,
            sameSite: "none",
            path,
        };
    }
}

export function setCookie(
    res: Response,
    cookieName: string,
    cookieValue: string,
    timeout: JwtTimeout,
    path: string | null = null,
    httpOnly: boolean = false
) {
    res.cookie(
        cookieName,
        cookieValue,
        setCookieOption(timeout, path, httpOnly)
    );
}

export function setAccessCookie(res: Response, cookie: string) {
    res.setHeader(AccessCookie, cookie);
}

export function setRefreshCookie(res: Response, cookie: string) {
    res.setHeader(RefreshCookie, cookie);
}

export function removeAccessCookie(res: Response) {
    res.setHeader(RefreshCookie, null);
}

export function removeRefreshCookie(res: Response) {
    res.setHeader(RefreshCookie, null);
}
