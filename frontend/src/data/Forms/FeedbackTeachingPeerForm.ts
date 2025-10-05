import type { FormEntry } from "./types";
import {
    arrayChoice,
    phoneNumber,
    somaiyaMail,
    textArea,
    validString,
} from "../../../../backend/zod";
import Axios from "../../axios";

const stringOption = ["Promising Teacher", "Excellence in Teaching"] as const;

const agreeList = [
    "Strongly Agree",
    "Agree",
    "Sometimes",
    "Disagree",
    "Strongly Disagree",
] as const;

const feedList = [
    "Outstanding",
    "Excellent",
    "Good",
    "Average",
    "Poor",
] as const;

const FeedbackTeachingPeerForm: FormEntry[] = [
    {
        title: "Name of the Rater",
        name: "rater_name",
        type: "text",
        required: true,
        validator: validString,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of the Institute:",
        name: "institute_name",
        type: "text",
        required: true,
        validator: validString,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Department:",
        name: "department_name",
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
        title: "Somaiya email id",
        name: "somaiya_mail_id",
        type: "text",
        required: true,
        validator: somaiyaMail,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Contact Number",
        name: "contact_number",
        type: "text",
        required: true,
        validator: phoneNumber,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of the teacher to be evaluated",
        name: "teacher_name",
        type: "dropdown",
        dropOpt: "multiple",
        dropdownHiddenItem: "Select Name of the Nominee",
        required: true,
        validator: validString,
        options: [],
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Nomination category",
        name: "nomination_category",
        type: "radio",
        required: true,
        validator: arrayChoice(stringOption),
        options: stringOption,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "He/she collaborate with other faculties to contribute towards the field of research and development",
        name: "q_01",
        type: "radio",
        required: true,
        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she actively participate and gets involved in various school/college committees for the betterment of students and the institution",
        name: "q_02",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Rate the employee on his/her honesty, credibility and integrity while dealing with students and other faculties",
        name: "q_03",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she accepts suggestions or criticism from co-workers and students gracefully",
        name: "q_04",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she has developed a good rapport with students as well as with other faculties by treating them respectfully and encouraging their active participation",
        name: "q_05",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she addresses to student's queries in a constructive manner and is available outside the classroom as well",
        name: "q_06",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she demonstrates problem solving attitude and offers constructive suggestions for improvementy",
        name: "q_07",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Rate him/her on the effectiveness of his/her teaching methodology",
        name: "q_08",
        type: "radio",
        required: true,
        validator: arrayChoice(feedList),
        options: feedList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she is dynamic and adapts well to changes in the subject curriculum or any other directives from the university",
        name: "q_09",
        type: "radio",
        required: true,

        validator: arrayChoice(agreeList),
        options: agreeList,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Give 3 reasons behind nominating the teacher for the award (Max word limit: 600)",
        name: "nomination_reason",
        type: "textarea",
        required: true,
        validator: textArea({ maxLength: 600 }),
        page: 3,
        fieldsPerLine: 1,
    },
];

async function fetchNominatedNames() {
    try {
        // Make an HTTP request to fetch the data from your backend
        const response = await Axios.get("/ieac/data/nominated-faculty-names");

        // Assuming the backend returns an array of nominated names
        const nominatedNames = response.data.data;

        // Update the options for "nominee_name"
        FeedbackTeachingPeerForm.find(
            (field) => field._name === "teacher_name"
        ).options = nominatedNames;
    } catch (error) {
        console.error("Error fetching nominated names:", error);
    }
}

// Call the function to fetch and update the options
fetchNominatedNames();

export default FeedbackTeachingPeerForm;
