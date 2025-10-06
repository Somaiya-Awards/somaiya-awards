import z from "zod";
import {
    arrayChoice,
    email,
    textArea,
    validDate,
    validString,
} from "../../../../backend/zod";

export const agree = [
    "Strongly Agree",
    "Agree",
    "Sometimes",
    "Disagree",
    "Strongly Disagree",
] as const;

const StudentNonTeachingFeedbackFormValidator = z.object({
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

export default StudentNonTeachingFeedbackFormValidator;
