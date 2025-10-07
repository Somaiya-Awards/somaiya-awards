import z from "zod";
import {
    arrayChoice,
    email,
    textArea,
    validDate,
    validString,
} from "../../../../backend/zod";
import { agreeList } from "..";
import { SportsStarFormField } from "./SportsStarForm";

export const StudentNonTeachingFeedbackFormField = {
    email_id: email,

    student_batch_year: validDate,

    student_class_and_division: validString,

    employee_name: validString,

    employee_designation: validString,

    q_01: arrayChoice(agreeList),

    q_02: arrayChoice(agreeList),

    q_03: arrayChoice(agreeList),

    q_04: arrayChoice(agreeList),

    q_05: arrayChoice(agreeList),

    nomination_reason: textArea({ maxLength: 300 }),
};
const StudentNonTeachingFeedbackFormValidator = z.object(SportsStarFormField);

export default StudentNonTeachingFeedbackFormValidator;
