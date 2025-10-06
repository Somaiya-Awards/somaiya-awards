import z from "zod";
import {
    arrayChoice,
    email,
    institute,
    lastDate,
    phoneNumber,
    somaiyaMail,
    validFile,
    validString,
} from "../../../../backend/zod";

export const awardsList = [
    "Outstanding Employee - Institute (More than 3 years of Service)",
    "Promising Employee - Institute (2 to 3 years of Service)",
    "Outstanding Employee - Somaiya Trust",
    "Outstanding Employee - Somaiya Vidyavihar University",
    "Promising Employee - Somaiya Trust",
    "Promising Employee - Somaiya Vidyavihar University",
    "Outstanding Employee - K. J. Somaiya Hospital",
    "Promising Employee - K. J. Somaiya Hospital",
] as const;

export const options = ["1", "2", "3", "4", "5"] as const;

const NonTeachingValidator = z.object({
    email_id: email,
    staff_name: validString,
    award_category: arrayChoice(awardsList),
    institution_name: institute,
    department: validString,
    designation: validString,
    date_of_appointment: lastDate(3),
    somaiya_email_id: somaiyaMail,
    contact_number: phoneNumber,
    q_01: arrayChoice(options),
    q_02: arrayChoice(options),
    q_03: arrayChoice(options),
    q_04: arrayChoice(options),
    q_05: arrayChoice(options),
    q_06: arrayChoice(options),
    q_07: arrayChoice(options),
    q_08: arrayChoice(options),
    q_09: arrayChoice(options),
    q_10: arrayChoice(options),
    q_11: arrayChoice(options),
    q_12: arrayChoice(options),
    q_13: arrayChoice(options),
    q_14: arrayChoice(options),
    q_15: arrayChoice(options),
    q_16: arrayChoice(options),
    q_17: arrayChoice(options),
    q_18: arrayChoice(options),
    q_19: arrayChoice(options),
    q_20: arrayChoice(options),
    q_21: arrayChoice(options),
    q_22: arrayChoice(options),
    q_23: arrayChoice(options),
    q_24: arrayChoice(options),
    proof_docs: validFile({ type: "pdf" }),
    nominee_photograph: validFile({ type: "jpg" }),
});

export default NonTeachingValidator;
