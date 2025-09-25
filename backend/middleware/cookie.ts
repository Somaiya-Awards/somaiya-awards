import { Response } from "express";
import { AccessHeader, CsrfHeader, IstOffset, RefreshHeader } from "../constants";
import { JwtTimeout, randomJwt } from "./jwt";

export function setCookie(
    res: Response,
    cookieName: string,
    cookieValue: string,
    timeout: JwtTimeout,
    path: string | null= null,
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


    if(!path){
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
    setCookie(res, AccessHeader, cookie, "1h");
}

export function setRefreshCookie(res: Response, cookie: string) {
    setCookie(res, RefreshHeader, cookie, "1d", "/auth/refresh");
}

export function setCsrfCookie(res: Response) {
    setCookie(res, CsrfHeader, randomJwt("1d"), "1h", "", false);
}
