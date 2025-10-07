import { CookieOptions, Response } from "express";
import { AccessCookie, RefreshCookie } from "../constants";
import { JwtTimeout } from "./jwt";

function setCookieOption(
    timeout: JwtTimeout | "0s",
    path: string | null = null,
    httpOnly: boolean = true
): CookieOptions {
    let maxAge = 0;
    let prod = process.env.PROD === "1";

    switch (timeout) {
        case "1h":
            maxAge += 1000 * 60 * 60;
            break;
        case "1d":
            maxAge += 1000 * 60 * 60 * 24;
            break;
        default:
            throw new Error("Invalid expiration time");
    }

    let config: CookieOptions = {
        maxAge,
        httpOnly,
        secure: prod,
        sameSite: prod ? "none" : "lax"
    }

    if (path) {
        config.path = path
    }

    return config
}

export function setCookie(
    res: Response,
    cookieName: string,
    cookieValue: string,
    timeout: JwtTimeout | "0s",
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
    setCookie(res, AccessCookie, cookie, "1h")
}

export function setRefreshCookie(res: Response, cookie: string) {
    setCookie(res, RefreshCookie, cookie, "1d", "/auth/refresh");
}

export function removeAccessCookie(res: Response) {
    res.clearCookie(AccessCookie, setCookieOption("1h"))
}

export function removeRefreshCookie(res: Response) {
    res.clearCookie(RefreshCookie, setCookieOption("1d", "/auth/refresh"))
}
