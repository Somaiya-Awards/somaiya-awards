import * as z from "zod";
import {
    arrayChoice,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "..";
import { agreeList, ratingList } from "../../../frontend/src/zod/";
import { feedTeacherCategory } from "../../../frontend/src/zod/Forms/FeedbackTeachingPeerForm";

export const FeedbackFourForm = z.object({
    rater_name: validString,
    institute_name: validString,
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
});

export type FeedbackFourType = z.infer<typeof FeedbackFourForm>;
