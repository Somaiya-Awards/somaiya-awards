import z from "zod";
import {
    arrayChoice,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "../../../../backend/zod";
import { agreeList } from "..";

const PeerNonTeachingFeedbackList = [
    "Outstanding Employee Educational Institute",
    "Promising Employee Educational Institute (≤ 3 years of service)",
    "Outstanding Administrator Somaiya Trust/GVPM",
    "Outstanding Employee K. J. Somaiya Hospital & Research Centre",
] as const;

export const PeerNonTeachingFeedbackFormField = {
    rater_name: validString,

    institution_name: validString,

    department: validString,

    designation: validString,

    somaiya_mail_id: somaiyaMail,

    contact_no: phoneNumber,

    nominee_name: validString,

    category: arrayChoice(PeerNonTeachingFeedbackList),

    q_01: arrayChoice(agreeList),

    q_02: arrayChoice(agreeList),

    q_03: arrayChoice(["Outstanding", "Excellent", "Good", "Average", "Poor"]),

    q_04: arrayChoice(agreeList),

    q_05: arrayChoice(agreeList),

    q_06: arrayChoice(agreeList),

    q_07: arrayChoice(agreeList),

    q_08: arrayChoice(agreeList),

    nomination_reason: textArea({ maxLength: 300 }),
};
const PeerNonTeachingFeedbackFormValidator = z.object(
    PeerNonTeachingFeedbackFormField
);

export default PeerNonTeachingFeedbackFormValidator;
