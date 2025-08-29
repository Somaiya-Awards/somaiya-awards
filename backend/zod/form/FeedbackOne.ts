import * as z from "zod";
import { email, validNumber, validString } from "..";

export const FeedbackOne = z.object({
    id: validNumber,
    email_id: email,
    student_batch_year: validString,
    student_class_and_division: validString,
    teacher_name: validString,
    teacher_designation: validString,
    teaching_subject: validString,
    q_01: validString,
    q_02: validString,
    q_03: validNumber,
    q_04: validNumber,
    q_05: validNumber,
    q_06: validString,
    q_07: validString,
    q_08: validNumber,
    q_09: validString,
    q_10: validString,
    q_11: validString,
    nominating_reasons: validString,
});
