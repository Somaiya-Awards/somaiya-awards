import z from "zod";
import {
    arrayChoice,
    email,
    textArea,
    validFile,
    validString,
} from "../../../../backend/zod";
import { Institutes } from "../../../../backend/constants";

export const option = ["1", "2", "3", "4", "5"] as const;

const SportsStarFormValidator = z.object({
    email_id: email,

    institution_name: arrayChoice(Institutes),

    nominee_inspiring_coach: validString,

    nominee_coach_comments: textArea({ maxLength: 500 }),

    nominee_coach_photo: validFile({ type: "jpg" }),

    nominee_coach_supportings: validFile({ type: "pdf" }),

    q_01: arrayChoice(option),

    q_02: arrayChoice(option),

    q_03: arrayChoice(option),

    q_04: arrayChoice(option),

    q_05: arrayChoice(option),

    q_06: arrayChoice(option),

    q_07: arrayChoice(option),

    q_08: arrayChoice(option),

    q_09: arrayChoice(option),

    q_10: arrayChoice(option),

    q_11: arrayChoice(option),

    q_12: arrayChoice(option),

    q_13: arrayChoice(option),

    q_14: arrayChoice(option),

    q_15: arrayChoice(option),

    q_16: arrayChoice(option),

    q_17: arrayChoice(option),

    q_18: arrayChoice(option),

    q_19: arrayChoice(option),

    q_20: arrayChoice(option),

    nominee_ss_girl: validString,

    nominee_ss_girl_sport: validString,

    nominee_ss_girl_photo: validFile({ type: "jpg" }),

    nominee_ss_girl_supportings: validFile({ type: "pdf" }),

    q_21: arrayChoice(option),

    q_22: arrayChoice(option),

    q_23: arrayChoice(option),

    q_24: arrayChoice(option),

    nominee_ss_boy: validString,

    nominee_ss_boy_sport: validString,

    nominee_ss_boy_photo: validFile({ type: "jpg" }),

    nominee_ss_boy_supportings: validFile({ type: "pdf" }),

    q_25: arrayChoice(option),

    q_26: arrayChoice(option),

    q_27: arrayChoice(option),

    q_28: arrayChoice(option),
});

export default SportsStarFormValidator;
