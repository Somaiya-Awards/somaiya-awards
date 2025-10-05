import {
    validString,
    email,
    arrayChoice,
    somaiyaMail,
    phoneNumber,
    textArea,
    validFile,
    lastDate,
} from "../../../../backend/zod";

import { Institutes } from "../../../../backend/constants";
import z from "zod";

const awards = [
    "Excellence in Teaching (more than 3 years of service)",
    "Promising Teacher of the year (2 to 3 years of service)",
] as const;

const score = [1, 2, 3, 4, 5] as const;

const TeachingFormValidator = z.object({
    email_id: email,

    faculty_name: validString,

    awards_category: arrayChoice(awards),

    institute_name: arrayChoice(Institutes),

    department: validString,

    designation: validString,

    date_of_appointment: lastDate(3),

    somaiya_mail_id: somaiyaMail,

    contact_number: phoneNumber,

    q_01: arrayChoice(score),

    q_02: arrayChoice(score),

    q_03: arrayChoice(score),

    q_04: arrayChoice(score),

    q_05: arrayChoice(score),

    q_06: arrayChoice(score),

    q_07: arrayChoice(score),

    q_08: arrayChoice(score),

    q_09: arrayChoice(score),

    q_10: arrayChoice(score),

    q_11: arrayChoice(score),

    q_12: arrayChoice(score),

    q_13: arrayChoice(score),

    q_14: arrayChoice(score),

    q_15: arrayChoice(score),

    q_16: arrayChoice(score),

    q_17: arrayChoice(score),

    q_18: arrayChoice(score),

    q_19: arrayChoice(score),

    q_20: arrayChoice(score),

    q_21: textArea({ maxLength: 300 }),

    data_evidence: validFile({ type: "pdf" }),

    profile_photograph: validFile({ type: "jpg" }),
});

export default TeachingFormValidator;
