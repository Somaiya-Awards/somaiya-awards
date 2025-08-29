import * as z from "zod";
import { email, validNumber, validString } from "..";

export const FeedbackThree = z.object({
    id: validNumber,
    email_id: email,
    student_batch_year: validString,
    student_class_and_division: validString,
    employee_name: validString,
    employee_designation: validString,
    q_01: validString,
    q_02: validString,
    q_03: validString,
    q_04: validString,
    q_05: validString,
    nomination_reason: validString,
});
