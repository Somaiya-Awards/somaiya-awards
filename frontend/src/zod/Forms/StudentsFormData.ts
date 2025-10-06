import z from "zod";
import {
    arrayChoice,
    somaiyaMail,
    textArea,
    validFile,
    validString,
} from "../../../../backend/zod";

import { Institutes } from "../../../../backend/constants";

export const category = [
    "Somaiya Star -Girl",
    "Somaiya Star -Boy",
    "Somaiya Star Citizen",
    "Somaiya Green Star/ Green Force",
    "Somaiya Star Innovator",
] as const;

const StudentsFormDataValidator = z.object({
    email_id: somaiyaMail,

    student_name: validString,

    students_class: validString,

    course: validString,

    institution_name: arrayChoice(Institutes),

    nomination_category: arrayChoice(category),

    recommendation_note: textArea({ maxLength: 600 }),

    supportings: validFile({ type: "pdf" }),
});

export default StudentsFormDataValidator;
