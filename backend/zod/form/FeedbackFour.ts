import * as z from "zod";
import { email, institute, role, validNumber, validString } from "..";

export const FeedbackFourForm = z.object({
    id: validNumber,
    rater_name: validString,
    institution_name: institute,
    department: validString,
    designation: validString,
    somaiya_mail_id: validString,
    contact_no: validString,
    nominee_name: validString,
    category: validString,
    q_01: validString,
    q_02: validString,
    q_03: validString,
    q_04: validString,
    q_05: validString,
    q_06: validString,
    q_07: validString,
    q_08: validString,
    nomination_reason: validString,
});
