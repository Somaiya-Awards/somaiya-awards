import * as z from "zod";
import { email, validDate, validString, arrayChoice, textArea } from "..";
import { agree } from "../../../frontend/src/zod/Forms/StudentNonTeachingFeedbackForm";

export const FeedbackThreeForm = z.object({
    email_id: email,

    student_batch_year: validDate,

    student_class_and_division: validString,

    employee_name: validString,

    employee_designation: validString,

    q_01: arrayChoice(agree),

    q_02: arrayChoice(agree),

    q_03: arrayChoice(agree),

    q_04: arrayChoice(agree),

    q_05: arrayChoice(agree),

    nomination_reason: textArea({ maxLength: 300 }),
});
