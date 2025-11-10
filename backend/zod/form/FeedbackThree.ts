import * as z from "zod";
import {
    arrayChoice,
    email,
    serverTextArea,
    validString,
    validYear,
} from "../../zod";
import { agreeList } from "../../constants";

export const FeedbackThreeForm = z.object({
    email_id: email,
    student_batch_year: validYear,
    student_class_and_division: validString,
    employee_name: validString,
    employee_designation: validString,
    q_01: arrayChoice(agreeList),
    q_02: arrayChoice(agreeList),
    q_03: arrayChoice(agreeList),
    q_04: arrayChoice(agreeList),
    q_05: arrayChoice(agreeList),
    nomination_reason: serverTextArea({ maxLength: 300 }),
});

export type FeedbackThreeType = z.infer<typeof FeedbackThreeForm>;
