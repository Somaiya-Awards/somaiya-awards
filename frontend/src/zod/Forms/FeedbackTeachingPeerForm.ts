import z from "zod";
import {
    arrayChoice,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "../../../../backend/zod";

export const stringOption = [
    "Promising Teacher",
    "Excellence in Teaching",
] as const;

export const agreeList = [
    "Strongly Agree",
    "Agree",
    "Sometimes",
    "Disagree",
    "Strongly Disagree",
] as const;

export const feedList = [
    "Outstanding",
    "Excellent",
    "Good",
    "Average",
    "Poor",
] as const;

const FeedbackTeachingPeerValidator = z.object({
    rater_name: validString,
    institution_name: validString,
    department_name: validString,
    designation: validString,
    somaiya_mail_id: somaiyaMail,
    contact_number: phoneNumber,
    teacher_name: validString,
    nomination_category: arrayChoice(stringOption),
    q_01: arrayChoice(agreeList),
    q_02: arrayChoice(agreeList),
    q_03: arrayChoice(agreeList),
    q_04: arrayChoice(agreeList),
    q_05: arrayChoice(agreeList),
    q_06: arrayChoice(agreeList),
    q_07: arrayChoice(agreeList),
    q_08: arrayChoice(feedList),
    q_09: arrayChoice(agreeList),
    nomination_reason: textArea({ maxLength: 600 }),
});

export default FeedbackTeachingPeerValidator;
