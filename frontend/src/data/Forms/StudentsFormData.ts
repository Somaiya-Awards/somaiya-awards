import { Institutes } from "../../../../backend/constants";
import {
    studentAwardList,
    StudentsFormDataField as v,
} from "../../zod/Forms/StudentsFormData";
import type { FormEntry } from "./types";

const StudentsFormData: FormEntry[] = [
    {
        title: "Somaiya Mail ",
        name: "email_id",
        type: "email",
        required: true,
        validator: v.email_id,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Student's Name",
        name: "student_name",
        type: "text",
        required: true,
        validator: v.student_name,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Class",
        name: "students_class",
        type: "text",
        required: true,
        validator: v.students_class,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Course",
        name: "course",
        type: "text",
        required: true,
        validator: v.course,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of Institution",
        name: "institution_name",
        type: "dropdown",
        required: true,
        dropdownHiddenItem: "Select your institute",
        dropOpt: "single",
        validator: v.institution_name,
        options: Institutes,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Please mark your nomination category",
        type: "radio",
        required: true,
        name: "nomination_category",
        validator: v.nomination_category,
        options: studentAwardList,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Recommendation Note (Max 600 words )",
        name: "recommendation_note",
        type: "textarea",
        validator: v.recommendation_note,
        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Upload Supporting Documents",
        type: "file",
        required: true,
        name: "supportings",
        validator: v.supportings,
        accept: ".pdf",
        page: 3,
        fieldsPerLine: 1,
    },
];

export default StudentsFormData;
