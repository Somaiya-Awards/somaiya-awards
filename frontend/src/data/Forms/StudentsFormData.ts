import { arrayChoice, somaiyaMail, textArea, validFile, validString } from "../../../../backend/zod";
import institutes from "../Institutions/institutes";
import type { FormEntry } from "./types";

const category = [
    "Somaiya Star -Girl",
    "Somaiya Star -Boy",
    "Somaiya Star Citizen",
    "Somaiya Green Star/ Green Force",
    "Somaiya Star Innovator",
] as const;

const StudentsFormData: FormEntry[] = [
    {
        title: "Somaiya Mail ",
        name: "email_id",
        type: "email",
        required: true,
        validator: somaiyaMail,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Student's Name",
        name: "student_name",
        type: "text",
        required: true,
        validator: validString,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Class",
        name: "students_class",
        type: "text",
        required: true,
        validator: validString,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Course",
        name: "course",
        type: "text",
        required: true,
        validator: validString,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of Institution",
        name: "institution_name",
        type: "dropdown",
        required: true,
        dropdownHiddenItem: "Select your institute",
        dropOpt: "multiple",
        validator: arrayChoice(institutes),
        options: institutes,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Please mark your nomination category",
        type: "radio",
        required: true,
        name: "nomination_category",
        validator: arrayChoice(category),
        options: category,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Recommendation Note (Max 600 words )",
        name: "recommendation_note",
        type: "textarea",
        validator: textArea({maxLength: 600}),
        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Upload Supporting Documents",
        type: "file",
        required: true,
        name: "supportings",
        validator: validFile({type: "pdf"}),
        accept: ".pdf",
        page: 3,
        fieldsPerLine: 1,
    },
];

export default StudentsFormData;
