import type { FormEntry } from "./types";

const NonTeachingForm: FormEntry[] = [
    {
        title: "Email",
        name: "email_id",
        type: "email",
        required: true,
        validate: true,
        validateType: "email-id",

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of the Staff",
        name: "staff_name",
        type: "text",
        required: true,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Categories: Please Tick One as per Eligibility",
        name: "award_category",
        type: "radio",
        required: true,

        options: [
            "Employee of the Year (More than 3 years of service)",
            "Promising Employee Educational Institute (1 to 3 years of service)",
            "Promising Employee Somaiya Trust/GVPM (1 to 3 years of service)",
            "Outstanding Employee Somaiya Trust/GVPM",
            "Outstanding Employee K. J. Somaiya Hospital & Research Centre",
        ],
        page: 1,
        fieldsPerLine: 1,
    },
    {
        title: "Name of institute",
        name: "institute_name",
        type: "dropdown",
        dropdownHiddenItem: "Select your institute",
        required: true,
        dropOpt: "single",

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
        title: "Present Position",
        name: "designation",
        type: "text",
        required: true,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Date of appointment",
        name: "appointment_date",
        type: "date",
        required: true,

        validate: true,
        validateType: "date",
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Somaiya Email Id",
        name: "somaiya_email_id",
        type: "email",
        required: true,
        validate: true,
        validateType: "somaiya-mail-id",

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Phone Number",
        name: "phone_number",
        type: "text",
        required: true,
        validate: true,
        validateType: "contact-no",

        page: 1,
        fieldsPerLine: 2,
    },

    {
        title: "Q1. Accepts responsibilities and performs duties above and beyond what is normally expected",
        name: "q_01",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q2. Is flexible, responds and adapts well to internal & external changes.",
        name: "q_02",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q3. Determines broad knowledge and competence in a work related topics",
        name: "q_03",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q4. Uses knowledge and expertise to solve problems quickly",
        name: "q_04",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q5. Handles a large workload effectively and in a timely manner",
        name: "q_05",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },

    {
        title: "Q6. Brings in best practices from other Departments/ Institutes/ Universities for improvement of his/ her independent work.",
        name: "q_06",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q7. Has shows outstanding performance which has brought attention and distinction to the Department/ University",
        name: "q_07",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },

    {
        title: "Q8. Is a good team player and encourages teamwork",
        name: "q_08",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q9. Manages crises well as well as helps others to get through their crisis",
        name: "q_09",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q10. Interacts with others in a positive, enthusiastic and cheerful manner",
        name: "q_10",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q11. Assists others with both personal and professional challenges that impact work",
        name: "q_11",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q12. Commands respect of co-workers, supervisor, students and clients alike",
        name: "q_12",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 4,
        fieldsPerLine: 1,
    },

    {
        title: "Q13. Suggests and/or develops new work methods which increases productivity and saves time and money",
        name: "q_13",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 5,
        fieldsPerLine: 1,
    },
    {
        title: "Q14. Recognizes work of others to increase effectiveness and identifies / addresses work problems. If any.",
        name: "q_14",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 5,
        fieldsPerLine: 1,
    },

    {
        title: "Q15. Takes the initiative to improve individual skills and knowledge.",
        name: "q_15",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q16. Recognizes others special events and/or accomplishments, either publicly or privately.",
        name: "q_16",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q17. Helps new employees to settle & adapt to the work environment.",
        name: "q_17",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q18. Acts as a mentor to others by providing advice, guidance, feedback and encouragement.",
        name: "q_18",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q19. Shares knowledge and skills with others.",
        name: "q_19",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 6,
        fieldsPerLine: 1,
    },

    {
        title: "Q20. Regularity & Punctuality at work",
        name: "q_20",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Q21. Participation in social and community welfare activities",
        name: "q_21",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Q22. Professional Up-gradation",
        name: "q_22",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Q23. Promptness in work clearance",
        name: "q_23",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Q24. Accuracy & Dependability",
        name: "q_24",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Evidance / Proof ",
        name: "proof_docs",
        type: "file",
        required: true,
        validate: true,
        validateType: "file",
        fileType: "pdf",
        page: 8,
        fieldsPerLine: 1,
    },
    {
        title: "Kindly attach the profile photograph of the nominated applicant.",
        name: "nominee_photograph",
        type: "file",
        required: true,
        validate: true,
        validateType: "file",
        fileType: "jpg",
        page: 8,
        fieldsPerLine: 1,
    },
];

export default NonTeachingForm;
