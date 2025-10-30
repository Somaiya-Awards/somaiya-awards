import * as z from "zod";
import { Role } from "../types/role";

import { Institutes } from "../constants";

export const email = z.email({ error: "Invalid email address" });

export const validNumber = z.coerce
    .number()
    .gte(0, "Number should be greater than 0");

export const role = z.enum(Role);

export const anyString = z
    .string({ error: "Value must be a string" })
    .trim()
    .nonempty({ error: "Value cannot be empty" });

export const validString = anyString
    .regex(
        /^[A-Za-z0-9\s.,!?'"@#$%&*()_+\-=:;\/\\|<>~`[\]{}]+$/,
        // .regex(/^[A-Za-z0-9\s.,\-=:;\/\\]+$/, {
        {
            error: "Value cannot contain special characters",
        }
    )
    .trim();

export const institute = z.enum(Institutes);

export const validBoolean = z.boolean();

export const numberList = z.array(z.number());

export const stringList = z.array(validString);

export const somaiyaMail = email.regex(/somaiya.edu$/, {
    error: "Invalid Somaiya email",
});

export const phoneNumber = validString.regex(/^\d{10}/, {
    error: "Invalid Phone Number",
});

export const validDate: z.ZodCoercedDate<Date> = z.coerce.date({
    error: "Invalid Date",
});

export const validYear = validString
    .regex(/^(19|20)\d{2}$/, { error: "Invalid Year" })
    .refine((year) => year <= new Date().getFullYear().toString(), {
        error: "Invalid Year",
    });

export function arrayChoice<T extends number | string>(
    option: readonly T[]
): z.ZodType<T, T> {
    return z.any().refine((num: T) => option.includes(num), {
        error: "Invalid Option selected",
    });
}

export function NurgleTallyMan(str: string): number {
    return str
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .filter((it) => it).length;
}

export function textArea({
    minLength,
    maxLength,
}: {
    minLength?: number;
    maxLength: number;
}) {
    return z
        .string()
        .transform((str) => str.trim())
        .refine(
            (str) => {
                let clean = NurgleTallyMan(str);
                return !(clean < minLength || clean > maxLength) && clean;
            },
            {
                error: `Min word limit: ${minLength || 1} and Max word limit: ${maxLength}`,
            }
        );
}

export function validFile({
    type,
    maxSizeInMb,
}: {
    type: "pdf" | "jpg";
    maxSizeInMb?: number;
}) {
    var ValidType: string[] = [];

    if (type === "pdf") {
        ValidType.push("application/pdf");
    } else {
        ValidType.push("image/jpeg");
    }

    return z
        .instanceof(File)
        .refine(
            (file) =>
                file.size < (maxSizeInMb || 5) * 1024 * 1024 &&
                ValidType.includes(file.type),
            {
                error: `File should be a ${type} file and of max size ${maxSizeInMb || 5} mB`,
            }
        );
}

export function lastDate(beforeYears: number) {
    return validDate.refine(
        (date) => {
            const now = new Date();
            const previousDate = new Date(
                now.getFullYear() - beforeYears,
                now.getMonth(),
                now.getDate()
            );

            return date <= previousDate;
        },
        { error: `Date should be at least ${beforeYears} years before today` }
    );
}
