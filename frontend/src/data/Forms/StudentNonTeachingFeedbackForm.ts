import axios from "axios";
import type { FormEntry } from "./types";

const StudentNonTeachingFeedbackForm: FormEntry[] = [
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
        title: "Batch Year",
        name: "student_batch_year",
        type: "text",
        required: true,
        validate: true,
        validateType: "year",

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Class / Division",
        name: "student_class_and_division",
        type: "text",
        required: true,

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

        options: [],
        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Designation of Employee",
        name: "employee_designation",
        type: "text",
        required: true,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "He/she is cooperative and helpful",
        type: "radio",
        required: true,
        name: "q_01",

        options: [
            "Strongly Agree",
            "Agree",
            "Sometimes",
            "Disagree",
            "Strongly Disagree",
        ],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she possesses excellent communication skills (in terms of information sharing)",
        type: "radio",
        required: true,
        name: "q_02",

        options: [
            "Strongly Agree",
            "Agree",
            "Sometimes",
            "Disagree",
            "Strongly Disagree",
        ],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/ she shows high level of Sincerity and Commitment towards the institution/ department",
        type: "radio",
        required: true,
        name: "q_03",

        options: [
            "Strongly Agree",
            "Agree",
            "Sometimes",
            "Disagree",
            "Strongly Disagree",
        ],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is punctual ",
        type: "radio",
        required: true,
        name: "q_04",

        options: [
            "Strongly Agree",
            "Agree",
            "Sometimes",
            "Disagree",
            "Strongly Disagree",
        ],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is easily accessible to students and teachers ",
        type: "radio",
        required: true,
        name: "q_05",

        options: [
            "Strongly Agree",
            "Agree",
            "Sometimes",
            "Disagree",
            "Strongly Disagree",
        ],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Give 3 reasons for nominating the employee for the award:",
        type: "textarea",
        required: true,
        name: "nomination_reason",

        page: 4,
        fieldsPerLine: 1,
    },
];

async function fetchNominatedNames() {
    try {
        // const response = await axios.get('http://localhost:5001/ieac/data/nominated-staff-names',{
        const response = await axios.get(
            "https://apisomaiyaawards.somaiya.edu/ieac/data/nominated-staff-names",
            {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                    "x-user-id": localStorage.getItem("user_id"),
                    "x-institute-name": localStorage.getItem("institution"),
                },
            }
        );

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
