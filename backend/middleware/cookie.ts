import { CookieOptions, Response } from "express";
import { AccessCookie, RefreshCookie } from "../constants";
import { JwtTimeout } from "./jwt";
import { randomString } from "./csrfMiddleware";

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
        case "0s":
            maxAge = 0;
            break;
        default:
            throw new Error("Invalid expiration time");
    }

    let config: CookieOptions = {
        maxAge,
        httpOnly,
        secure: prod,
        sameSite: prod ? "none" : "lax",
    };

    if (path) {
        config.path = path;
    }

    return config;
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
    setCookie(res, AccessCookie, cookie, "1h", null, true);
}

export function setRefreshCookie(res: Response, cookie: string) {
    setCookie(res, RefreshCookie, cookie, "1d", "/auth/refresh", true);
}

export function removeAccessCookie(res: Response) {
    setCookie(res, AccessCookie, "", "0s", null, true);
}

export function removeRefreshCookie(res: Response) {
    setCookie(res, RefreshCookie, "", "0s", "/auth/refresh", true);
}

export function setLoginCookie(res: Response) {
    setCookie(res, "x-login", randomString(128), "1h", null, false);
}

export function removeLoginCookie(res: Response) {
    setCookie(res, "x-login", "", "0s", null, false);
}
