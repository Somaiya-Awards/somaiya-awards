import * as z from "zod";
import { Role } from "../types/role";
import institutes from "../../frontend/src/data/Institutions/institutes";

export const email = z.email({ error: "Invalid email address" });
export const validNumber = z.number().gte(0, "Number should be greater than 0");
export const role = z.enum(Role);
export const validString = z.string({ error: "Value must not be empty" });
export const institute = z.enum(institutes);
export const validBoolean = z.boolean();
export const numberList = z.array(z.number())
export const stringList = z.array(validString)
export const somaiyaMail = email.regex(/somaiya.edu$/, { error: "Invalid Somaiya email" })
export const phoneNumber = validString.regex(/^\d{10}/, { error: "Invalid Phone Number" })
export const validDate = validString.refine((date) => (!Number.isNaN(new Date(date).valueOf())), { error: "Invalid Date" })
export const validYear = validString.regex(/^(19|20)\d{2}$/,{error: "Invalid Year"}).refine((year) => (year <= new Date().getFullYear().toString()), {error: "Invalid Year"})

export function arrayChoice<T extends number | string>(option: readonly T[]): z.ZodType<T,T> {
    return z.any().refine((num: T) => option.includes(num), { error: "Invalid Option selected" });
}

export function Choice(option: readonly number[]) {
    return validNumber.refine((num) => option.includes(num), { error: "Invalid Option selected" });
}

export function textArea({minLength, maxLength }: { minLength?: number, maxLength: number }) {
    return validString.regex(RegExp(`^\\w{${minLength || 1},${maxLength}}$`), {error: `Min word limit: ${minLength || 1} and Max word limit: ${maxLength}`})
}

export function validFile({ type, maxSizeInMb }: { type: "pdf" | "jpg", maxSizeInMb?: number }) {
    var ValidType: string[] = [];

    if (type === "pdf") {
        ValidType.push("application/pdf")
    } else {
        ValidType.push("image/jpeg");
    }

    return z.instanceof(File).refine((file) => (
        file.size < ((maxSizeInMb || 5) * 1024 * 1024) && (ValidType.includes(file.type))
    ), { error: `File should be a ${type} file and of max size ${maxSizeInMb} mB` });
}