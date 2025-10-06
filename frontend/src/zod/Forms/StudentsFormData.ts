import z from "zod";
import {
    arrayChoice,
    somaiyaMail,
    textArea,
    validFile,
    validString,
} from "../../../../backend/zod";

import { Institutes } from "../../../../backend/constants";
import { SportsStarFormField } from "./SportsStarForm";

export const studentAwardList = [
    "Somaiya Star -Girl",
    "Somaiya Star -Boy",
    "Somaiya Star Citizen",
    "Somaiya Green Star/ Green Force",
    "Somaiya Star Innovator",
] as const;

export const StudentsFormDataField = {
    email_id: somaiyaMail,
    student_name: validString,
    students_class: validString,
    course: validString,
    institution_name: arrayChoice(Institutes),
    nomination_category: arrayChoice(studentAwardList),
    recommendation_note: textArea({ maxLength: 600 }),
    supportings: validFile({ type: "pdf" }),
};
const StudentsFormDataValidator = z.object(SportsStarFormField);

export default StudentsFormDataValidator;
