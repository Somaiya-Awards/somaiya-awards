export type BaseFormEntry = {
    title: string;
    _name: string;
    requiredStatus: boolean;
    hasOptions: boolean;
    page: number;
    fieldsPerLine: number;
    validationType?: string;
    hasValidations?: boolean;
};

export type FormEntry =
    | (BaseFormEntry & { type: "radio"; options: string[] | number[] })
    | (BaseFormEntry & { type: "email" })
    | (BaseFormEntry & { type: "date" })
    | (BaseFormEntry &
          (
              | {
                    type: "dropdown";
                    dropOpt: "single";
                    options: string[];
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
    | (BaseFormEntry & { type: "file" })
    | (BaseFormEntry & { type: "number" })
    | (BaseFormEntry & { type: "text"; placeholder?: string });
