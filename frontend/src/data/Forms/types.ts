import type { ValidFiles } from "../../components/utils/validator";

export type BaseFormEntry = {
    fieldsPerLine: number;
    required: boolean;
    title: string;
    link?: string;
    name: string;
    page: number;
} & Validate;

export type Validate = {
    validate: true;
    validateType: "somaiya-mail-id" |  "email-id" | "year" | "contact-no" | "date";
} | {
    validate: true;
    validateType: "file";
    fileType: ValidFiles;
}
| {
    validate?: false;
    validateType?: string;
}

export type FormEntry =
    | (BaseFormEntry & { type: "radio"; options: string[] | number[] })
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
                    options: string[];
                    dropdownHiddenItem: string;
                }
          ))
    | (BaseFormEntry & { type: "textarea" })
    | (BaseFormEntry & { type: "file"; fileType: ValidFiles;})
    | (BaseFormEntry & { type: "number" })
    | (BaseFormEntry & { type: "text"; placeholder?: string })
    | (BaseFormEntry & { type: "email"; placeholder?: string })
    | (BaseFormEntry & { type: "date"; placeholder?: string });