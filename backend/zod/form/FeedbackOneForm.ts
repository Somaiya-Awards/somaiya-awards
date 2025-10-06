import * as z from "zod";
import { email, validYear, validString, arrayChoice, textArea } from "..";
import { good, score } from "../../../frontend/src/zod/Forms/StudentTeachingFeedbackForm";

export const FeedbackOneForm = z.object({
    email_id: email,

    student_batch_year: validYear,

    student_class_and_division: validString,

    teacher_name: validString,

    teacher_designation: validString,

    teaching_subject: validString,

    q_01: arrayChoice(good),

    q_02: arrayChoice(good),

    q_03: arrayChoice(score),

    q_04: arrayChoice(score),

    q_05: arrayChoice(score),

    q_06: arrayChoice(good),

    q_07: arrayChoice(good),

    q_08: arrayChoice(score),

    q_09: arrayChoice(good),

    q_10: arrayChoice(["Yes", "No"]),

    q_11: arrayChoice(good),

    nominating_reasons: textArea({ maxLength: 300 }),
});
