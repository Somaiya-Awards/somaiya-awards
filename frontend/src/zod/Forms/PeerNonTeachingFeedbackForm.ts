import z from "zod";
import {
    arrayChoice,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "../../../../backend/zod";

const awards = [
    "Outstanding Employee Educational Institute",
    "Promising Employee Educational Institute (≤ 3 years of service)",
    "Outstanding Administrator Somaiya Trust/GVPM",
    "Outstanding Employee K. J. Somaiya Hospital & Research Centre",
] as const;

const agree = [
    "Strongly Agree",
    "Agree",
    "Sometimes",
    "Disagree",
    "Strongly Disagree",
] as const;

const PeerNonTeachingFeedbackFormValidator = z.object({
    rater_name: validString,

    institution_name: validString,

    department: validString,

    designation: validString,

    somaiya_mail_id: somaiyaMail,

    contact_no: phoneNumber,

    nominee_name: validString,

    category: arrayChoice(awards),

    q_01: arrayChoice(agree),

    q_02: arrayChoice(agree),

    q_03: arrayChoice(["Outstanding", "Excellent", "Good", "Average", "Poor"]),

    q_04: arrayChoice(agree),

    q_05: arrayChoice(agree),

    q_06: arrayChoice(agree),

    q_07: arrayChoice(agree),

    q_08: arrayChoice(agree),

    nomination_reason: textArea({ maxLength: 300 }),
});

export default PeerNonTeachingFeedbackFormValidator;
