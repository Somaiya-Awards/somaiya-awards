import { arrayChoice, validFile, validNumber, validString } from "../../../../backend/zod";
import institutes from "../Institutions/institutes";
import type { FormEntry } from "./types";

const ResearchForm: FormEntry[] = [
    {
        title: "Name of the Faculty",
        name: "faculty_name",
        type: "text",
        required: true,
        validator: validString,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Designation",
        name: "designation",
        type: "text",
        required: true,
        validator: validString,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Institution",
        name: "institution",
        type: "dropdown",
        dropdownHiddenItem: "Select your institute",
        dropOpt: "multiple",
        required: true,
        validator: arrayChoice(institutes),
        options: institutes,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Department",
        name: "department",
        type: "text",
        required: true,
        validator: validString,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Affiliation with our Organization (tenure in years)",
        name: "tenure",
        type: "text",
        required: true,
        validator: validString,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Original Articles",
        name: "org_articles_count",
        type: "number",
        required: true,
        validator: validNumber,
        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Review Papers",
        name: "review_papers_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Letters",
        name: "letters_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Case Studies",
        name: "case_studies_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Books",
        name: "books_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Chapters",
        name: "chapters_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in International Conferences",
        name: "presentations_international_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentation in National Conference",
        name: "presentation_national_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in International Seminars",
        name: "international_seminar_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in National Seminars",
        name: "national_seminar_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in International Workshops",
        name: "international_workshops_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in National Workshops",
        name: "national_workshops_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Minor Projected - Completed",
        name: "completed_minorp_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Minor Projected - Ongoing",
        name: "ongoing_minorp_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Major Projected - Completed",
        name: "completed_majorp_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Major Projected - Ongoing",
        name: "ongoing_majorp_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Research Consultancy Assignments- Completed",
        name: "completed_consultancy_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Research Consultancy Assignments - Ongoing",
        name: "ongoing_consultancy_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Total Amount of Revenue generated through Major, Minor research projects and Consultancy assignments (Rs.)",
        name: "revenue_from_projects",
        type: "number",
        required: true,
        validator: validNumber,

        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Number of Patents Granted",
        name: "granted_patents_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Patents Filed",
        name: "filed_patents_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Copyrights Granted",
        name: "granted_copyrights_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Copyrights Filed",
        name: "filed_copyrights_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Industrial Designs Granted",
        name: "granted_industrial_designs_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Industrial Designs Filed",
        name: "filed_industrial_designs_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: `Number of International Research awards won in last five years.`,
        name: "international_awards_won_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 6,
        fieldsPerLine: 2,
    },
    {
        title: `Number of National Research awards won in last five years`,
        name: "national_awards_won_count",
        type: "number",
        required: true,
        validator: validNumber,

        page: 6,
        fieldsPerLine: 2,
    },
    {
        title: "Upload the Research Accomplishment Document (Max size: 5mB)",
        name: "evidence_of_research",
        type: "file",
        required: true,
        validator: validFile({type: "pdf"}),
        accept: ".pdf",
        page: 7,
        fieldsPerLine: 2,
    },
    {
        title: "Major evidences for the data provided in this form as a single PDF file",
        name: "evidence_of_data_provided",
        type: "file",
        required: true,
        validator: validFile({type: "pdf"}),
        accept: ".pdf",
        page: 7,
        fieldsPerLine: 2,
    },
    {
        title: "I take complete responsibility that the information shared and the related documents uploaded are true and valid",
        name: "confirmation_of_trueData",
        type: "radio",
        required: true,
        validator: arrayChoice(["Agree"]),
        options: ["Agree"] as const,
        page: 7,
        fieldsPerLine: 1,
    },
];

export default ResearchForm;
