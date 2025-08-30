import * as z from "zod";
import { email, validNumber, validString } from "..";

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
    approved: z.boolean().nullable(),
});
