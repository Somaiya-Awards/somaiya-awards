import * as z from "zod";
import {
    arrayChoice,
    email,
    institute,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "..";
import {
    agreeList,
    feedList,
    stringOption,
} from "../../../frontend/src/zod/Forms/FeedbackTeachingPeerForm";

export const FeedbackTwoForm = z.object({
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

export type FeedbackTwoType = z.infer<typeof FeedbackTwoForm>;
