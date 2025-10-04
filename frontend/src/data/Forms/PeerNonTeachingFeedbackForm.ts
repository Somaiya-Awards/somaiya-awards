import axios from "axios";
import type { FormEntry } from "./types";
import { arrayChoice, phoneNumber, somaiyaMail, textArea, validString } from "../../../../backend/zod";

const awards = [
    "Outstanding Employee Educational Institute",
    "Promising Employee Educational Institute (≤ 3 years of service)",
    "Outstanding Administrator Somaiya Trust/GVPM",
    "Outstanding Employee K. J. Somaiya Hospital & Research Centre",
] as const;

const agree = [
    "Strongly Agree",
    "Agree",
    "Sometimes",
    "Disagree",
    "Strongly Disagree",
] as const;

const PeerNonTeachingFeedbackForm: FormEntry[] = [
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
        name: "institution_name",
        type: "text",
        required: true,
        validator: validString,
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
        title: "Designation",
        name: "designation",
        type: "text",
        required: true,
        validator: validString,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Somaiya mail ID",
        name: "somaiya_mail_id",
        type: "email",
        required: true,
        validator: somaiyaMail,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Contact Number",
        name: "contact_no",
        type: "text",
        required: true,
        validator: phoneNumber,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of the Employee to be Evaluated",
        name: "nominee_name",
        type: "dropdown",
        dropOpt: "multiple",
        dropdownHiddenItem: "Select Name of the Nominee",
        required: true,
        validator: validString,
        options: [] as string[],
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Nomination category",
        name: "category",
        type: "radio",
        required: true,
        validator: arrayChoice(awards),
        options: awards,
        page: 1,
        fieldsPerLine: 1,
    },
    {
        title: "He/she has developed cooperative relationships with others by encouraging collaboration among the team",
        name: "q_01",
        type: "radio",
        required: true,
        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she takes inputs from other team members before making any critical decisions and shows genuine concern towards them",
        name: "q_02",
        type: "radio",
        required: true,

        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Please rate the performance and the quality of work delivered while working in a team ",
        name: "q_03",
        type: "radio",
        required: true,
        validator: arrayChoice(["Outstanding", "Excellent", "Good", "Average", "Poor"]),
        options: ["Outstanding", "Excellent", "Good", "Average", "Poor"] as const,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she handles criticism from others positively and work on improving them instead of arguing or justifying",
        name: "q_04",
        type: "radio",
        required: true,
        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she respects other's ideas and perspective and encourage them to express freely. Recognizes individual contribution in the group and works as a good team member",
        name: "q_05",
        type: "radio",
        required: true,

        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she serves as a role model for continuous improvement *",
        name: "q_06",
        type: "radio",
        required: true,
        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "He/she keeps himself/herself updated with the recent trends/changes in the environment and shares work-related knowledge and updates with others",
        name: "q_07",
        type: "radio",
        required: true,

        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Conflict resolution: He or she uses his/her knowledge and expertise to analyse problems and provide solutions",
        name: "q_08",
        type: "radio",
        required: true,

        validator: arrayChoice(agree),
        options: agree,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Give 3 reasons behind nominating the employee for the award",
        name: "nomination_reason",
        type: "textarea",
        required: true,
        validator: textArea({maxLength: 300}),
        page: 3,
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
        PeerNonTeachingFeedbackForm.find(
            (field) => field._name === "nominee_name"
        ).options = nominatedNames;
    } catch (error) {
        console.error("Error fetching nominated names:", error);
    }
}

// Call the function to fetch and update the options
fetchNominatedNames();

export default PeerNonTeachingFeedbackForm;
