import type { FormEntry } from "./types";

const ResearchForm: FormEntry[] = [
    {
        title: "Name of the Faculty",
        name: "faculty_name",
        type: "text",
        required: true,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Designation",
        name: "designation",
        type: "text",
        required: true,

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

        options: [
            "The Somaiya School",
            "S. K. Somaiya Prathmik Shala",
            "S K Somaiya Vinay Mandir High School",
            "Somaiya Vidyamandir- Sakarwadi",
            "Shri Sharda English Medium School Kopargaon",
            "Somaiya Vidya Mandir- Laxmiwadi",
            "Somaiya Shishu Niketan Primary School- Sameerwadi",
            "Somaiya Vinaymandir High School- Sameerwadi",
            "KJ Somaiya English Medium School Sameerwadi",
            "Nareshwadi Learning Centre- Dahanu",
            "SK Somaiya Vinay Mandir High School, Mumbai",
            "KJ Somaiya Junior College of Arts, Commerce and Science",
            "SK Somaiya Vinay Mandir Junior College, Mumbai",
            "KJ Somaiya Private Industrial Training Institute",
            "Smt. Sakarben Somaiya Junior College of Education (DEd)",
            "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar",
            "KJ Somaiya College of Engineering",
            "KJ Somaiya Institute of Management",
            "KJ Somaiya Polytechnic College",
            "KJ Somaiya College of Arts and Commerce",
            "KJ Somaiya College of Science and Commerce",
            "K.J Somaiya College of Comprehensive College of Education , Training and Research",
            "KJ Somaiya Bhartiya Sanskriti Peetham",
            "KJ Somaiya Centre for Buddhish Studies",
            "KJ Somaiya Centre for Studies in Jainism",
            "KJ Somaiya Medical College and Research Centre",
            "KJ Somaiya College of Physiotherapy",
            "KJ Somaiya School and College of Nursing",
            "Somaiya Sports Academy",
            "SK Somaiya College (SVU)",
            "SK Somaiya College of Arts, Science and Commerce (MU)",
            "School of civilization",
            "Faculty & Staff Development Centre",
            "K J Somaiya junior college of science and commerce",
            "K J Somaiya junior college of arts and commerce",
        ],
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Department",
        name: "department",
        type: "text",
        required: true,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Affiliation with our Organization (tenure in years)",
        name: "tenure",
        type: "text",
        required: true,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Original Articles",
        name: "org_articles_count",
        type: "number",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Review Papers",
        name: "review_papers_count",
        type: "number",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Letters",
        name: "letters_count",
        type: "number",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Case Studies",
        name: "case_studies_count",
        type: "number",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Books",
        name: "books_count",
        type: "number",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Chapters",
        name: "chapters_count",
        type: "number",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in International Conferences",
        name: "presentations_international_count",
        type: "number",
        required: true,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentation in National Conference",
        name: "presentation_national_count",
        type: "number",
        required: true,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in International Seminars",
        name: "international_seminar_count",
        type: "number",
        required: true,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in National Seminars",
        name: "national_seminar_count",
        type: "number",
        required: true,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in International Workshops",
        name: "international_workshops_count",
        type: "number",
        required: true,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of presentations in National Workshops",
        name: "national_workshops_count",
        type: "number",
        required: true,

        page: 3,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Minor Projected - Completed",
        name: "completed_minorp_count",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Minor Projected - Ongoing",
        name: "ongoing_minorp_count",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Major Projected - Completed",
        name: "completed_majorp_count",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Major Projected - Ongoing",
        name: "ongoing_majorp_count",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Research Consultancy Assignments- Completed",
        name: "completed_consultancy_count",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Research Consultancy Assignments - Ongoing",
        name: "ongoing_consultancy_count",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 2,
    },
    {
        title: "Total Amount of Revenue generated through Major, Minor research projects and Consultancy assignments (Rs.)",
        name: "revenue_from_projects",
        type: "number",
        required: true,

        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Number of Patents Granted",
        name: "granted_patents_count",
        type: "number",
        required: true,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Patents Filed",
        name: "filed_patents_count",
        type: "number",
        required: true,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Copyrights Granted",
        name: "granted_copyrights_count",
        type: "number",
        required: true,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Copyrights Filed",
        name: "filed_copyrights_count",
        type: "number",
        required: true,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Industrial Designs Granted",
        name: "granted_industrial_designs_count",
        type: "number",
        required: true,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: "Number of Industrial Designs Filed",
        name: "filed_industrial_designs_count",
        type: "number",
        required: true,

        page: 5,
        fieldsPerLine: 2,
    },
    {
        title: `Number of International Research awards won in last five years.`,
        name: "international_awards_won_count",
        type: "number",
        required: true,

        page: 6,
        fieldsPerLine: 2,
    },
    {
        title: `Number of National Research awards won in last five years`,
        name: "national_awards_won_count",
        type: "number",
        required: true,

        page: 6,
        fieldsPerLine: 2,
    },
    {
        title: "Upload the Research Accomplishment Document",
        name: "evidence_of_research",
        type: "file",
        required: true,
        validate: true,
        validateType: "file",
        fileType: "pdf",
        page: 7,
        fieldsPerLine: 2,
    },
    {
        title: "Major evidences for the data provided in this form as a single PDF file",
        name: "evidence_of_data_provided",
        type: "file",
        required: true,
        validate: true,
        validateType: "file",
        fileType: "pdf",
        page: 7,
        fieldsPerLine: 2,
    },
    {
        title: "I take complete responsibility that the information shared and the related documents uploaded are true and valid",
        name: "confirmation_of_trueData",
        type: "radio",
        required: true,

        options: ["Agree"],
        page: 7,
        fieldsPerLine: 1,
    },
];

export default ResearchForm;
