import z from "zod";
import {
    arrayChoice,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "../../../../backend/zod";
import { agreeList, ratingList } from "..";

export const feedTeacherCategory = [
    "Promising Teacher",
    "Excellence in Teaching",
] as const;

export const FeedbackTeachingPeerField = {
    rater_name: validString,
    institution_name: validString,
    department_name: validString,
    designation: validString,
    somaiya_mail_id: somaiyaMail,
    contact_number: phoneNumber,
    teacher_name: validString,
    nomination_category: arrayChoice(feedTeacherCategory),
    q_01: arrayChoice(agreeList),
    q_02: arrayChoice(agreeList),
    q_03: arrayChoice(agreeList),
    q_04: arrayChoice(agreeList),
    q_05: arrayChoice(agreeList),
    q_06: arrayChoice(agreeList),
    q_07: arrayChoice(agreeList),
    q_08: arrayChoice(ratingList),
    q_09: arrayChoice(agreeList),
    nomination_reason: textArea({ maxLength: 600 }),
};

const FeedbackTeachingPeerValidator = z.object(FeedbackTeachingPeerField);

export default FeedbackTeachingPeerValidator;
