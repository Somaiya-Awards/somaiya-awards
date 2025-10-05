import type { FormEntry } from "./types";
import {
    arrayChoice,
    email,
    textArea,
    validDate,
    validString,
} from "../../../../backend/zod";
import Axios from "../../axios";

const agree = [
    "Strongly Agree",
    "Agree",
    "Sometimes",
    "Disagree",
    "Strongly Disagree",
] as const;

const StudentNonTeachingFeedbackForm: FormEntry[] = [
    {
        title: "Email",
        name: "email_id",
        type: "email",
        required: true,
        validator: email,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Batch Year",
        name: "student_batch_year",
        type: "text",
        required: true,
        validator: validDate,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Class / Division",
        name: "student_class_and_division",
        type: "text",
        required: true,
        validator: validString,
        page: 1,
        fieldsPerLine: 1,
    },
    {
        title: "Name of the Employee",
        name: "employee_name",
        dropOpt: "multiple",
        type: "dropdown",
        dropdownHiddenItem: "Select Name of the Nominee",
        required: true,
        validator: validString,
        options: [],
        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Designation of Employee",
        name: "employee_designation",
        type: "text",
        required: true,
        validator: validString,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "He/she is cooperative and helpful",
        type: "radio",
        required: true,
        name: "q_01",
        validator: arrayChoice(agree),
        options: agree,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she possesses excellent communication skills (in terms of information sharing)",
        type: "radio",
        required: true,
        name: "q_02",

        validator: arrayChoice(agree),
        options: agree,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/ she shows high level of Sincerity and Commitment towards the institution/ department",
        type: "radio",
        required: true,
        name: "q_03",

        validator: arrayChoice(agree),
        options: agree,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is punctual ",
        type: "radio",
        required: true,
        name: "q_04",

        validator: arrayChoice(agree),
        options: agree,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is easily accessible to students and teachers ",
        type: "radio",
        required: true,
        name: "q_05",

        validator: arrayChoice(agree),
        options: agree,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Give 3 reasons for nominating the employee for the award (500 words max)",
        type: "textarea",
        required: true,
        name: "nomination_reason",
        validator: textArea({ maxLength: 300 }),
        page: 4,
        fieldsPerLine: 1,
    },
];

async function fetchNominatedNames() {
    try {
        // const response = await  Axios.get('http://localhost:5001/ieac/data/nominated-staff-names',{
        const response = await Axios.get("/ieac/data/nominated-staff-names", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
                "x-user-id": localStorage.getItem("user_id"),
                "x-institute-name": localStorage.getItem("institution"),
            },
        });

        // Assuming the backend returns an array of nominated names
        const nominatedNames = response.data.data;

        // Update the options for "nominee_name"
        StudentNonTeachingFeedbackForm.find(
            (field) => field._name === "employee_name"
        ).options = nominatedNames;
    } catch (error) {
        console.error("Error fetching nominated names:", error);
    }
}

// Call the function to fetch and update the options
fetchNominatedNames();

export default StudentNonTeachingFeedbackForm;
