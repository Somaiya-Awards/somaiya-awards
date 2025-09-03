import * as z from "zod";
import { email, validBoolean, validNumber, validString } from "..";

export const StudentsForm = z.object({
    id: validNumber,
    email_id: email,
    student_name: validString,
    students_class: validString,
    course: validString,
    institution_name: validString,
    nomination_category: validString,
    recommendation_note: validString,
    supportings: validString,
    approved: validBoolean,
});

export type StudentsType = z.infer<typeof StudentsForm>;
