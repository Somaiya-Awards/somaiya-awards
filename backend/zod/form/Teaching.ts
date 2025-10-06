import * as z from "zod";
import {
    arrayChoice,
    email,
    lastDate,
    phoneNumber,
    somaiyaMail,
    textArea,
    validBoolean,
    validNumber,
    validString,
} from "..";
import { awards } from "../../../frontend/src/zod/Forms/TeachingForm";
import { Institutes } from "../../constants";
export const TeachingForm = z.object({
    email_id: email,

    faculty_name: validString,

    awards_category: arrayChoice(awards),

    institution_name: arrayChoice(Institutes),

    department: validString,

    designation: validString,

    date_of_appointment: lastDate(3),

    somaiya_mail_id: somaiyaMail,

    contact_number: phoneNumber,

    q_01: validNumber,

    q_02: validNumber,

    q_03: validNumber,

    q_04: validNumber,

    q_05: validNumber,

    q_06: validNumber,

    q_07: validNumber,

    q_08: validNumber,

    q_09: validNumber,

    q_10: validNumber,

    q_11: validNumber,

    q_12: validNumber,

    q_13: validNumber,

    q_14: validNumber,

    q_15: validNumber,

    q_16: validNumber,

    q_17: validNumber,

    q_18: validNumber,

    q_19: validNumber,

    q_20: validNumber,

    q_21: textArea({ maxLength: 300 }),

    profile_photograph: validString,
    ieacApproved: validBoolean.optional(),
    ieacApprovedFile: validString.optional().nullable(),
    ieac_scoreA: validNumber.optional().nullable(),
    ieac_scoreB: validNumber.optional().nullable(),
    ieac_scoreC: validNumber.optional().nullable(),
    hr_approved: validBoolean.optional(),
});

export type TeachingType = z.infer<typeof TeachingForm>;
