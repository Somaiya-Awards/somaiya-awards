import axios from "axios";
import type { FormEntry } from "./types";

const FeedbackSportsCoach: FormEntry[] = [
    {
        title: "Name of the Rater",
        name: "rater_name",
        type: "text",
        required: true,

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Somaiya email id",
        name: "somaiya_mail_id",
        type: "text",
        required: true,
        validate: true,
        validateType: "somaiya-mail-id",

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
            "KJ Somaiya Institute of Technology, Ayurvihar",
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
        title: "Name of the Sports Incharge/ Coach",
        name: "nominee_name",
        type: "dropdown",
        dropOpt: "multiple",
        dropdownHiddenItem: "Select Name of the Nominee",
        required: true,

        options: [],
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Q1. The PE teacher is able to explain the training and competition demands of exceling at the top level.",
        name: "q_01",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q2. I am confident in the teacher's knowledge about training and competition preparation.",
        name: "q_02",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q3. I am confident in the teacher's knowledge about strategy and tactics during competition.",
        name: "q_03",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q4. I am confident in the teacher's knowledge about psychological preparation.",
        name: "q_04",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q5. The teacher is able to explain the reasons behind training and how it relates to competition and performance goals.",
        name: "q_05",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q6. The teacher creates a safe training environment.",
        name: "q_06",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q7. The teacher makes effective use of practice/training time. ",
        name: "q_07",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q8. The teacher makes good use of available facilities and equipment during practice/training. ",
        name: "q_08",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q9. There is logical sequence of activities in practice/training.",
        name: "q_09",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q10. The teacher ensures that our team meetings are effective.",
        name: "q_10",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q11.The teacher works together with me/ the team to set goals for the year related to training. ",
        name: "q_11",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q12.The teacher works together with me/ the team to set goals for the year related to the competition schedule.",
        name: "q_12",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q13. The teacher reviews progress toward goals regularly.",
        name: "q_13",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q14. The teacher has an ongoing dialogue with me/ the team about progress in training and in competition, delivered in respectful way.",
        name: "q_14",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q15. The teacher provides feedback on an ongoing basis",
        name: "q_15",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q16. The teacher makes sure that everything at a competition supports my (the team’s) ability to perform well, for example, nutrition needs, accommodation, transport to and from venues, training venues, and so on.",
        name: "q_16",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q17.The teacher is effective at analyzing my (the team's) performance and my (our) competitors during a competition and helping me (us) make adjustments to perform better. ",
        name: "q_17",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q18. The teacher behaves in an ethical manner, that is, zero tolerance for performance enhancement drugs, sexual harassment, verbal/ physical abuse, cheating.",
        name: "q_18",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q19. The teacher helps me believe that I can be a world-class competitor.",
        name: "q_19",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q20. The teacher understands the importance of finding a balance between sport performance and other aspects of my life.",
        name: "q_20",
        type: "radio",
        required: true,

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
];

async function fetchNominatedNames() {
    try {
        // Make an HTTP request to fetch the data from your backend
        // const response = await axios.get('http://localhost:5001/sports-admin/data/nominated-coach-names',{
        const response = await axios.get(
            "https://apisomaiyaawards.somaiya.edu/sports-admin/data/nominated-coach-names",
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
        const opt = FeedbackSportsCoach.find(
            (field) => field.name === "nominee_name"
        );

        if (opt) opt.options = nominatedNames;
    } catch (error) {
        console.error("Error fetching nominated names:", error);
    }
}

// Call the function to fetch and update the options
fetchNominatedNames();

export default FeedbackSportsCoach;
