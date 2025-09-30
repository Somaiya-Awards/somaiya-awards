
export type Validators = "somaiya-mail-id" |  "email-id" | "year" | "contact-no" | "date" | "file"
export type ValidFiles = "pdf" | "jpg"

export function validator(props: {validateType: "file", fileType: ValidFiles} | { validateType: "somaiya-mail-id" |  "email-id" | "year" | "contact-no" | "date"}, value: string) {
    const validatePair: [boolean, string] = [false, "Invalid Input"];
    let regex;

    switch (props.validateType) {
        case "somaiya-mail-id":
            regex = /@somaiya\.edu$/;

            validatePair[0] = !regex.test(value);
            validatePair[1] = "Please enter valid somaiya mail ID";

            return validatePair;

        case "email-id":
            regex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;

            validatePair[0] = !regex.test(value);
            validatePair[1] = "Please enter valid mail ID";

            return validatePair;

        case "year":
            regex = /^(19|20)\d{2}$/; /** I know but why?? */

            validatePair[0] = !regex.test(value);
            validatePair[1] = "Year is Invalid";

            return validatePair;

        case "contact-no":
            regex = /^\d{10}$/;

            validatePair[0] = !regex.test(value);
            validatePair[1] = "Invalid contact Number";

            return validatePair;

        case "date":
            if (new Date(value || new Date()) >= new Date()) {
                validatePair[0] = true;
                validatePair[1] = "Invalid Date";
            } else {
                validatePair[0] = false;
                validatePair[1] = "Valid Date";
            }

            return validatePair;

        case "file":
            if (props.fileType == "jpg") {
                regex = /^\.jpg$/;
            } else {
                regex = /^\.pdf$/;
            }

            validatePair[0] = !regex.test(value);
            validatePair[1] = "Invalid File Type";
    }

    return validatePair;
}
