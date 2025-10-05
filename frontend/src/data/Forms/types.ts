import * as z from "zod";

export type BaseFormEntry = {
    fieldsPerLine: number;
    required: boolean;
    title: string;
    link?: string;
    name: string;
    page: number;
} & Validate;

export type Validate = {
    validator: z.ZodType<any,any>;
}

export type FormEntry =
    | (BaseFormEntry & { type: "radio"; options: readonly string[] | readonly number[] })
    | (BaseFormEntry &
          (
              | {
                    type: "dropdown";
                    dropOpt: "single";
                    dropdownHiddenItem: string;
                }
              | {
                    type: "dropdown";
                    dropOpt: "multiple";
                    options: readonly string[];
                    dropdownHiddenItem: string;
                }
          ))
    | (BaseFormEntry & { type: "textarea" })
    | (BaseFormEntry & { type: "password",placeholder?: string })
    | (BaseFormEntry & { type: "file"; accept: ".pdf" | ".jpg"})
    | (BaseFormEntry & { type: "number" })
    | (BaseFormEntry & { type: "text"; placeholder?: string })
    | (BaseFormEntry & { type: "email"; placeholder?: string })
    | (BaseFormEntry & { type: "date"; placeholder?: string });