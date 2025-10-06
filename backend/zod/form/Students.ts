import * as z from "zod";
import {
    arrayChoice,
    email,
    somaiyaMail,
    textArea,
    validBoolean,
    validString,
} from "..";
import { Institutes } from "../../constants";

import { category } from "../../../frontend/src/zod/Forms/StudentsFormData";
export const StudentsForm = z.object({
    email_id: somaiyaMail,

    student_name: validString,

    students_class: validString,

    course: validString,

    institution_name: arrayChoice(Institutes),

    nomination_category: arrayChoice(category),

    recommendation_note: textArea({ maxLength: 600 }),
    supportings: validString,
    approved: validBoolean.optional(),
});

export type StudentsType = z.infer<typeof StudentsForm>;
