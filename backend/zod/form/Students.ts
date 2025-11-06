import * as z from "zod";
import {
    arrayChoice,
    somaiyaMail,
    serverTextArea,
    validBoolean,
    validString,
} from "..";
import { Institutes } from "../../constants";
import { studentAwardList } from "../../../frontend/src/zod/Forms/StudentsFormData";

export const StudentsForm = z.object({
    email_id: somaiyaMail,
    student_name: validString,
    students_class: validString,
    course: validString,
    institution_name: arrayChoice(Institutes),
    nomination_category: arrayChoice(studentAwardList),
    recommendation_note: serverTextArea({ maxLength: 600 }),
    supportings: validString,

    approved: validBoolean.optional().nullable(),
});

export type StudentsType = z.infer<typeof StudentsForm>;
