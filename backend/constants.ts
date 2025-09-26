export enum StatusCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
}
export const AccessCookie = "x-access";
export const CsrfName = "x-csrf";
export const RefreshCookie = "x-refresh";
export const IstOffset = (5 * 60 + 30) * 60000;
export const CSRF =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export const CSRF_SIZE = 32;
