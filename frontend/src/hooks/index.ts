/**
 * Work in progress, might complete it and add react query or just trpc this
 */

import z from "zod";
import Axios from "@/axios";

export type Data = {
    [key: string]: string;
};

/** Data and it's validator */
export type Config = {
    data: Data;
    validator: z.ZodObject;
    response: z.ZodObject;
};

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export function getAxiosMethod(method: RequestMethod) {
    switch (method) {
        case "GET":
            return Axios.get;
        case "PUT":
            return Axios.put;
        case "POST":
            return Axios.post;
        case "DELETE":
            return Axios.delete;
        default:
            throw new Error("Invalid Request Method");
    }
}
