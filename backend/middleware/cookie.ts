import { Response } from "express";
import { AccessCookie, IstOffset, RefreshCookie } from "../constants";
import { JwtTimeout } from "./jwt";

export function setCookie(
    res: Response,
    cookieName: string,
    cookieValue: string,
    timeout: JwtTimeout,
    path: string | null = null,
    httpOnly: boolean = true
) {
    let expire = Date.now();

    switch (timeout) {
        case "1h":
            expire += IstOffset + 1000 * 60 * 60;
            break;
        case "1d":
            expire += IstOffset + 1000 * 60 * 60 * 24;
            break;
        default:
            throw new Error("Invalid expiration time");
    }

    if (!path) {
        res.cookie(cookieName, cookieValue, {
            expires: new Date(expire),
            httpOnly,
            sameSite: "none",
        });
    } else {
        res.cookie(cookieName, cookieValue, {
            expires: new Date(expire),
            httpOnly,
            sameSite: "none",
            path,
        });
    }
}

export function setAccessCookie(res: Response, cookie: string) {
    setCookie(res, AccessCookie, cookie, "1h");
}

export function setRefreshCookie(res: Response, cookie: string) {
    setCookie(res, RefreshCookie, cookie, "1d", "/auth/refresh");
}
