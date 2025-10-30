import type { FormEntry } from "./types";
import Axios from "../../axios";
import { agreeList } from "../../zod";
import { StudentNonTeachingFeedbackFormField as v } from "../../zod/Forms/StudentNonTeachingFeedbackForm";

const StudentNonTeachingFeedbackForm: FormEntry[] = [
    {
        title: "Email",
        name: "email_id",
        type: "email",
        required: true,
        validator: v.email_id,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Batch Year",
        name: "student_batch_year",
        type: "text",
        required: true,
        validator: v.student_batch_year,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Class / Division",
        name: "student_class_and_division",
        type: "text",
        required: true,
        validator: v.student_class_and_division,
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
        validator: v.employee_name,
        options: [],
        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "Designation of Employee",
        name: "employee_designation",
        type: "text",
        required: true,
        validator: v.employee_designation,

        page: 2,
        fieldsPerLine: 2,
    },
    {
        title: "He/she is cooperative and helpful",
        type: "radio",
        required: true,
        name: "q_01",
        validator: v.q_01,
        options: agreeList,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she possesses excellent communication skills (in terms of information sharing)",
        type: "radio",
        required: true,
        name: "q_02",

        validator: v.q_02,
        options: agreeList,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/ she shows high level of Sincerity and Commitment towards the institution/ department",
        type: "radio",
        required: true,
        name: "q_03",

        validator: v.q_03,
        options: agreeList,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is punctual ",
        type: "radio",
        required: true,
        name: "q_04",

        validator: v.q_04,
        options: agreeList,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is easily accessible to students and teachers ",
        type: "radio",
        required: true,
        name: "q_05",

        validator: v.q_05,
        options: agreeList,
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Give 3 reasons for nominating the employee for the award (500 words max)",
        type: "textarea",
        required: true,
        name: "nomination_reason",
        validator: v.nomination_reason,
        page: 4,
        fieldsPerLine: 1,
    },
];

async function fetchNominatedNames() {
    try {
        // const response = await  Axios.get('http://localhost:5001/ieac/data/nominated-staff-names',{
        const response = await Axios.get("/ieac/data/nominated-staff-names", {
            headers: {
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
        console.error(error);
    }
}

// Call the function to fetch and update the options
fetchNominatedNames();

export default StudentNonTeachingFeedbackForm;
