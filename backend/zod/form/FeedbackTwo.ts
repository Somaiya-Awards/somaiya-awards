import * as z from "zod";
import { email, institute, validNumber, validString } from "..";

export const FeedbackTwo = z.object({
    id: validNumber,
    rater_name: validString,
    institution_name: institute,
    department_name: validString,
    designation: validString,
    somaiya_mail_id: email,
    contact_number: validString,
    teacher_name: validString,
    nomination_category: validString,
    q_01: validString,
    q_02: validString,
    q_03: validString,
    q_04: validString,
    q_05: validString,
    q_06: validString,
    q_07: validString,
    q_08: validString,
    q_09: validString,
    nomination_reason: validString,
});
