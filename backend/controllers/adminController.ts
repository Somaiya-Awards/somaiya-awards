import { Request, Response } from "express";
import { FileRequest } from "../types/request";
import asyncHandler from "express-async-handler";
import { OutstandingInstitution } from "../models/tables/OutstandingInstitution";
import { Research } from "../models/tables/Research";
import { Sports } from "../models/tables/Sports";
import { Teaching } from "../models/tables/Teaching";
import { NonTeaching } from "../models/tables/NonTeaching";
import { Students } from "../models/tables/Students";
import { User } from "../models/tables/User";
import { FeedbackOne } from "../models/tables/FeedbackOne";
import { FeedbackTwo } from "../models/tables/FeedbackTwo";
import { FeedbackThree } from "../models/tables/FeedbackThree";
import { FeedbackFour } from "../models/tables/FeedbackFour";
import sequelize, { Op } from "sequelize";
import {
    countAll,
    TeachingJuryScore,
    lastDate,
    NonTeachingJuryScore,
    InstituteCount,
    groupCountType,
} from "../types/controllers/admin";
import { Results } from "../models/tables/Results";
import { v4 as uuidv4 } from "uuid";

/**Global Info */
const institutionArray = [
    "K J Somaiya College of Arts and Commerce",
    "S K Somaiya Vinay Mandir Junior College",
    "K J Somaiya College of Science and Commerce",
    "S K Somaiya College of  Arts, Science and Commerce",
    "K J Somaiya College of Engineering",
    "K J Somaiya Institute of Management",
    "K J Somaiya College of Education",
    "K J Somaiya Polytechnic",
    "Somaiya Vidyavihar University",
    "K J Somaiya Institute of Technology",
    "S K Somaiya Vinay Mandir (Primary Section)",
    "Department of Library and Information Science",
    "Maya Somaiya School of Music and Performing Arts",
    "S K Somaiya College",
    "K J Somaiya Institute of Dharma Studies",
    "Somaiya Sports Academy",
    "Somaiya Institute for Research and Consultancy",
    "Somaiya School of Design",
    "Research Innovation Incubation Design Labs",
    "Somaiya Vidyavihar",
    "The Somaiya School",
    "K J Somaiya English Medium School",
    "K.J.Somaiya Secondary School,Nareshwadi",
    "Shri Sharda English Medium School",
    "Somaiya Vidya Mandir - Laxmiwadi",
    "Somaiya Vidya Mandir - Sakarwadi",
    "Somaiya Shishu Niketan Primary School",
    "Somaiya Vinaymandir High School",
    "K J Somaiya Hospital and Research Centre",
    "K J Somaiya Medical College and Research Centre",
    "K J Somaiya College of Physiotherapy",
    "K J Somaiya College of Nursing",
    "K J Somaiya School of Nursing",
    "K J Somaiya Medical Trust",
    "K J Somaiya Private Industrial Training Institute",
    "SMT Sakarbai K Somaiya Junior College of Education",
    "School of civilization",
    "Faculty & Staff Development Centre",
];

type groupIndex = 0 | 1 | 2 | 3 | 4;

// zero indexing this
const grouping: { [keys: string]: groupIndex[] } = {
    "K J Somaiya College of Arts and Commerce": [2],
    "S K Somaiya Vinay Mandir Junior College": [1],
    "K J Somaiya College of Science and Commerce": [2],
    "S K Somaiya College of  Arts, Science and Commerce": [2],
    "K J Somaiya College of Engineering": [2],
    "K J Somaiya Institute of Management": [2],
    "K J Somaiya College of Education": [2],
    "K J Somaiya Polytechnic": [2],
    "Somaiya Vidyavihar University": [2],
    "K J Somaiya Institute of Technology": [2],
    "S K Somaiya Vinay Mandir (Primary Section)": [2],
    "Department of Library and Information Science": [2],
    "Maya Somaiya School of Music and Performing Arts": [2],
    "S K Somaiya College": [2],
    "K J Somaiya Institute of Dharma Studies": [2],
    "Somaiya Sports Academy": [2],
    "Somaiya Institute for Research and Consultancy": [2],
    "Somaiya School of Design": [2],
    "Research Innovation Incubation Design Labs": [2],
    "Somaiya Vidyavihar": [4],
    "The Somaiya School": [0],
    "K J Somaiya English Medium School": [0],
    "K.J.Somaiya Secondary School,Nareshwadi": [0],
    "Shri Sharda English Medium School": [0],
    "Somaiya Vidya Mandir - Laxmiwadi": [0],
    "Somaiya Vidya Mandir - Sakarwadi": [0],
    "Somaiya Shishu Niketan Primary School": [0],
    "Somaiya Vinaymandir High School": [1],
    "K J Somaiya Hospital and Research Centre": [3],
    "K J Somaiya Medical College and Research Centre": [3],
    "K J Somaiya College of Physiotherapy": [3],
    "K J Somaiya College of Nursing": [3],
    "K J Somaiya School of Nursing": [3],
    "K J Somaiya Medical Trust": [4],
    "K J Somaiya Private Industrial Training Institute": [2],
    "SMT Sakarbai K Somaiya Junior College of Education": [3],
    "School of civilization": [2],
    "Faculty & Staff Development Centre": [2],
};

// custom functions which will be used in Admin Controllers

// @desc: extracts date from data
// @accepts Array
// const dataFormatter = (data) => {
//     const formattedData = [];
//
//     for (const record of data) {
//         const x = { date: record.createdAt };
//         formattedData.push(x);
//     }
//
//     return formattedData;
// };
//
// // @ desc get occurance of each date in formatted data
// // @accepts Array
// const getDateCounts = (array) => {
//     let currentDate = new Date();
//     let dateCounts = [];
//
//     for (let i = 14; i >= 0; i--) {
//         let date = new Date(
//             currentDate.getFullYear(),
//             currentDate.getMonth(),
//             currentDate.getDate() - i
//         )
//             .toISOString()
//             .split("T")[0];
//
//         // Set the initial count to 0
//         let dateCount = {
//             date: date,
//             formsFilled: 0,
//         };
//
//         dateCounts.unshift(dateCount);
//     }
//
//     // Add today's date if it's not already present
//     let today = new Date().toISOString().split("T")[0];
//     let foundToday = dateCounts.find((dateCount) => dateCount.date === today);
//     if (!foundToday) {
//         dateCounts.unshift({ date: today, formsFilled: 0 });
//     }
//
//     for (let j = 0; j < array.length; j++) {
//         let arrayDate = new Date(array[j].date).toISOString().split("T")[0];
//
//         // Check if the date is within the last 15 days
//         let foundDate = dateCounts.find(
//             (dateCount) => dateCount.date === arrayDate
//         );
//         if (foundDate) {
//             foundDate.formsFilled++;
//         }
//     }
//
//     return dateCounts;
// };

function textToScore(text: string) {
    let score = 0;

    switch (text) {
        case "Strongly Agree":
        case "Outstanding":
            score = 5;
            break;

        case "Agree":
        case "Excellent":
        case "Very Good":
            score = 4;
            break;

        case "Sometimes":
        case "Good":
            score = 3;
            break;

        case "Disagree":
        case "Average":
            score = 2;
            break;

        case "Poor":
        case "Strongly Disagree":
            score = 1;
            break;
    }

    return score;
}
/**
 * DASHBOARD SECTION
 *
 */
//@desc get counts of all forms
//@route GET admin/data/count/all
//@access Private

export const getCounts = asyncHandler(async (req: Request, res: Response) => {
    const conditions = {
        where: sequelize.where(
            sequelize.fn("YEAR", sequelize.col("createdAt")),
            new Date().getFullYear()
        ),
    };

    //@ts-ignore Just here for type safety
    let countData: countAll = {};

    /** WARN: Explicitly Fail if something errors out */

    // institution Count
    countData.institutionFormCount = await OutstandingInstitution.count();

    // research Count

    countData.researchFormCount = await Research.count(conditions);

    // sports Count

    countData.sportsFormCount = await Sports.count(conditions);

    // teaching Count

    countData.teachingFormCount = await Teaching.count(conditions);

    // non teaching Count

    countData.nonTeachingFormCount = await NonTeaching.count(conditions);

    // feedback1 count

    countData.feedbackOneFormCount = await FeedbackOne.count(conditions);

    // feedback2 count

    countData.feedbackTwoFormCount = await FeedbackTwo.count(conditions);

    // feedback3 count

    countData.feedbackThreeFormCount = await FeedbackThree.count(conditions);

    // feedback4 count

    countData.feedbackFourFormCount = await FeedbackFour.count(conditions);

    // students form count

    countData.studentsFormCount = await Students.count(conditions);

    res.status(200).json({
        message: "Request Successful",
        data: countData,
    });
});

/**
 * Returns the date, `days` days ago.
 * Eg: days = 15, returns the date 15 days ago
 */
function getLastDate(days: number) {
    let currentYear = new Date().getFullYear(),
        currentMonth = new Date().getMonth(),
        currentDate = new Date().getDay() - days;

    if (currentDate < 1) {
        currentMonth--; // year changes accordingly, but not date
    }

    return new Date(currentYear, currentMonth, currentDate);
}

function sequelLastDays(date: Date) {
    return {
        where: sequelize.where(
            sequelize.fn("DATE", sequelize.col("createdAt")),
            {
                [Op.gte]: date.toISOString().split("T")[0],
            }
        ),
        attributes: [
            [sequelize.fn("DATE", sequelize.col("createdAt")), "date"] as const,
            [
                sequelize.fn("COUNT", sequelize.col("id")),
                "formsFilled",
            ] as const,
        ],
        group: [sequelize.fn("DATE", sequelize.col("createdAt"))],
        raw: true,
    };
}
//@desc get last 15 days count total datewise
//@route GET admin/data/count/15
//@access private

/**
 * NOTE: raw: false, gives the class back. To access any new aggregation field use the dataValues field
 * */

// Ignore warnings. Raw: true -> gives json instead of class
export const getDaysCount = asyncHandler(
    async (req: Request, res: Response) => {
        //get institution data

        let conditions = sequelLastDays(getLastDate(15));

        //@ts-ignore
        const institutionData: lastDate[] =
            await OutstandingInstitution.findAll(conditions);

        //get research data

        //@ts-ignore
        const researchData: lastDate[] = await Research.findAll(conditions);

        //get sports data

        //@ts-ignore
        const sportsData: lastDate[] = await Sports.findAll(conditions);

        //get teaching data

        //@ts-ignore
        const teachingData: lastDate[] = await Teaching.findAll(conditions);

        //get Non Teaching Data

        //@ts-ignore
        const nonTeachingData: lastDate[] =
            await NonTeaching.findAll(conditions);

        // get feedback One Data

        //@ts-ignore
        const feedbackOneData: lastDate[] =
            await FeedbackOne.findAll(conditions);

        // get feedback two data

        //@ts-ignore
        const feedbackTwoData: lastDate[] =
            await FeedbackTwo.findAll(conditions);

        // get feedback three data

        //@ts-ignore
        const feedbackThreeData: lastDate[] =
            await FeedbackThree.findAll(conditions);

        // get feedback four data

        //@ts-ignore
        const feedbackFourData: lastDate[] =
            await FeedbackFour.findAll(conditions);

        // get students form data

        //@ts-ignore
        const studentsData: lastDate[] = await Students.findAll(conditions);

        //process th data to extract just dates

        let lists: lastDate[] = [
            ...institutionData,
            ...researchData,
            ...sportsData,
            ...teachingData,
            ...nonTeachingData,
            ...feedbackOneData,
            ...feedbackTwoData,
            ...feedbackThreeData,
            ...feedbackFourData,
            ...studentsData,
        ];

        let data: { [key: string]: number } = {};

        for (let list of lists) {
            if (!data.hasOwnProperty(list.date)) {
                data[list.date] = 0;
            }

            data[list.date] += list.formsFilled;
        }

        res.status(200).json({
            message: "Api works",
            data: data,
        });
    }
);

//@desc get institution wise all forms count
//@route GET admin/data/count/institution-wise
//@access Private
function sequelInstitute() {
    return {
        where: sequelize.where(
            sequelize.fn("YEAR", sequelize.col("createdAt")),
            {
                [Op.eq]: new Date().getFullYear(),
            }
        ),
        attributes: [
            "institution_name",
            [
                sequelize.fn("COUNT", sequelize.col("id")),
                "formsFilled",
            ] as const,
        ],
        group: ["institution_name"],
        raw: true,
    };
}

export const getInstitutionWiseCount = asyncHandler(
    async (req: Request, res: Response) => {
        let conditions = sequelInstitute();

        //@ts-ignore
        const institutionData: InstituteCount[] =
            await OutstandingInstitution.findAll(conditions);

        //get research data

        //@ts-ignore
        const researchData: InstituteCount[] =
            await Research.findAll(conditions);

        //get sports data

        //@ts-ignore
        const sportsData: InstituteCount[] = await Sports.findAll(conditions);

        //get teaching data

        //@ts-ignore
        const teachingData: InstituteCount[] =
            await Teaching.findAll(conditions);

        //get Non Teaching Data

        //@ts-ignore
        const nonTeachingData: InstituteCount[] =
            await NonTeaching.findAll(conditions);

        // get feedback One Data

        //@ts-ignore
        await FeedbackOne.findAll(conditions);

        //@ts-ignore
        const studentsData: InstituteCount[] =
            await Students.findAll(conditions);

        //process th data to extract just dates

        let countObject: {
            [key: string]: {
                id: string;
                institution_form: number;
                research_form: number;
                sports_form: number;
                teaching_form: number;
                non_teaching_form: number;
                institution_name: string;
                students_form: number;
            };
        } = {};

        for (let i of institutionArray) {
            countObject[i] = {
                id: uuidv4(),
                institution_form: 0,
                institution_name: i,
                research_form: 0,
                sports_form: 0,
                teaching_form: 0,
                non_teaching_form: 0,
                students_form: 0,
            };
        }

        for (const data of institutionData) {
            const institute = data.institution_name;

            if (!countObject.hasOwnProperty(institute)) continue;
            countObject[institute].institution_form += data.formsFilled;
        }

        // research form Counter

        for (const data of researchData) {
            const institute = data.institution_name;

            if (!countObject.hasOwnProperty(institute)) continue;
            countObject[institute].research_form += data.formsFilled;
        }
        // sports form Counter

        for (const data of sportsData) {
            const institute = data.institution_name;

            if (!countObject.hasOwnProperty(institute)) continue;
            countObject[institute].sports_form += data.formsFilled;
        }

        // teaching form Counter

        for (const data of teachingData) {
            const institute = data.institution_name;

            if (!countObject.hasOwnProperty(institute)) continue;
            countObject[institute].teaching_form += data.formsFilled;
        }

        // non teaching form Counter

        for (const data of nonTeachingData) {
            const institute = data.institution_name;

            if (!countObject.hasOwnProperty(institute)) continue;
            countObject[institute].non_teaching_form += data.formsFilled;
        }

        // students form counter

        for (const data of studentsData) {
            const institute = data.institution_name;

            if (!countObject.hasOwnProperty(institute)) continue;
            countObject[institute].students_form += data.formsFilled;
        }
        let array: {
            id: string;
            institution_name: string;
            institution_form: number;
            research_form: number;
            sports_form: number;
            teaching_form: number;
            non_teaching_form: number;
            students_form: number;
        }[] = [];

        Object.keys(countObject).forEach((key) => {
            array.push(countObject[key]);
        });

        res.status(200).json({
            message: "Request Successful",
            data: array,
        });
    }
);

function groupCountMethod(
    groupCount: groupCountType[],
    groupIndex: 0 | 1 | 2 | 3 | 4,
    count: number
) {
    groupCount[groupIndex].formsFilled += count;
}

// @desc : group Wise Count
// @ route GET admin/data/count/group
// @access Private

// TODO: complete the controller
export const getGroupWiseCount = asyncHandler(
    async (req: Request, res: Response) => {
        let conditions = sequelInstitute();

        //@ts-ignore
        const institutionData: InstituteCount[] =
            await OutstandingInstitution.findAll(conditions);

        //get research data

        //@ts-ignore
        const researchData: InstituteCount[] =
            await Research.findAll(conditions);

        //get sports data

        //@ts-ignore
        const sportsData: InstituteCount[] = await Sports.findAll(conditions);

        //get teaching data

        //@ts-ignore
        const teachingData: InstituteCount[] =
            await Teaching.findAll(conditions);

        //get Non Teaching Data

        //@ts-ignore
        const nonTeachingData: InstituteCount[] =
            await NonTeaching.findAll(conditions);

        // get feedback One Data

        //@ts-ignore
        await FeedbackOne.findAll(conditions);

        //@ts-ignore
        const studentsData: InstituteCount[] =
            await Students.findAll(conditions);

        // get feedback One Data

        //group count logic

        const groupCount: groupCountType[] = [
            {
                group: "A",
                formsFilled: 0,
            },
            {
                group: "B",
                formsFilled: 0,
            },
            {
                group: "C",
                formsFilled: 0,
            },
            {
                group: "D",
                formsFilled: 0,
            },
            {
                group: "E",
                formsFilled: 0,
            },
        ];

        // institute forms

        for (const response of institutionData) {
            const validGroups = grouping[response.institution_name];

            for (let group of validGroups) {
                groupCountMethod(groupCount, group, response.formsFilled);
            }
        }

        //sports

        for (const response of sportsData) {
            const validGroups = grouping[response.institution_name];

            for (let group of validGroups) {
                groupCountMethod(groupCount, group, response.formsFilled);
            }
        }

        //research

        for (const response of researchData) {
            const validGroups = grouping[response.institution_name];

            for (let group of validGroups) {
                groupCountMethod(groupCount, group, response.formsFilled);
            }
        }

        //teaching

        for (const response of teachingData) {
            const validGroups = grouping[response.institution_name];

            for (let group of validGroups) {
                groupCountMethod(groupCount, group, response.formsFilled);
            }
        }

        //non teaching

        for (const response of nonTeachingData) {
            const validGroups = grouping[response.institution_name];

            for (let group of validGroups) {
                groupCountMethod(groupCount, group, response.formsFilled);
            }
        }

        // students

        for (const response of studentsData) {
            const validGroups = grouping[response.institution_name];

            for (let group of validGroups) {
                groupCountMethod(groupCount, group, response.formsFilled);
            }
        }

        res.status(200).json({
            message: "Request Successful",
            data: groupCount,
        });
    }
);

/**
 * RESPONSES SECTION
 */

//@desc get records of institution form of current Year
//@route admin/data/forms/outstanding-institution
//@access Private

export const getInstitutionData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await OutstandingInstitution.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of ieac approved research form of current Year
//@route admin/data/forms/research
//@access Private

export const getResearchData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await Research.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { approved: true },
                ],
            },
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of sports admin approved Sports Girl form of current Year
//@route admin/data/forms/sports-girl
//@access Private

export const getSportsGirlData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const rawData = await Sports.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { isApprovedSportsGirl: true },
                ],
            },
        });

        const data = [];

        for (const response of rawData) {
            const object = {
                id: response.id,
                email_id: response.email_id,
                institution_name: response.institution_name,
                nominee_ss_girl: response.nominee_ss_girl,
                nominee_ss_girl_sport: response.nominee_ss_girl_sport,
                nominee_ss_girl_photo: response.nominee_ss_girl_photo,
                nominee_ss_girl_supportings:
                    response.nominee_ss_girl_supportings,
                isApprovedSportsGirl: response.isApprovedSportsGirl,
                q_21: response.q_21,
                q_22: response.q_22,
                q_23: response.q_23,
                q_24: response.q_24,
                final_score:
                    response.q_21 * 0.4 +
                    response.q_23 * 0.3 +
                    response.q_23 * 0.2 +
                    response.q_24 * 0.1,
            };

            data.push(object);
        }

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of sports admin approved Sports Boy form of current Year
//@route admin/data/forms/sports-boy
//@access Private

export const getSportsBoyData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const rawData = await Sports.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { isApprovedSportsBoy: true },
                ],
            },
        });

        const data = [];

        for (const response of rawData) {
            const object = {
                id: response.id,
                email_id: response.email_id,
                institution_name: response.institution_name,
                nominee_ss_boy: response.nominee_ss_boy,
                nominee_ss_boy_sport: response.nominee_ss_boy_sport,
                nominee_ss_boy_photo: response.nominee_ss_boy_photo,
                nominee_ss_boy_supportings: response.nominee_ss_boy_supportings,
                isApprovedSportsBoy: response.isApprovedSportsBoy,
                q_25: response.q_25,
                q_26: response.q_26,
                q_27: response.q_27,
                q_28: response.q_28,
                final_score:
                    response.q_25 * 0.4 +
                    response.q_26 * 0.3 +
                    response.q_27 * 0.2 +
                    response.q_28 * 0.1,
            };

            data.push(object);
        }

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of sports admin approved Sports Coach form of current Year
//@route admin/data/forms/sports-coach
//@access Private

export const getSportsCoachData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const rawData = await Sports.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { isApprovedCoach: true },
                ],
            },
        });

        const data = [];

        for (const response of rawData) {
            const object = {
                id: response.id,
                email_id: response.email_id,
                institution_name: response.institution_name,
                nominee_inspiring_coach: response.nominee_inspiring_coach,
                nominee_coach_comments: response.nominee_coach_comments,
                nominee_coach_photo: response.nominee_coach_photo,
                nominee_coach_supportings: response.nominee_coach_supportings,
                isApprovedCoach: response.isApprovedCoach,
                q_01: response.q_01,
                q_02: response.q_02,
                q_03: response.q_03,
                q_04: response.q_04,
                q_05: response.q_05,
                q_06: response.q_06,
                q_07: response.q_07,
                q_08: response.q_08,
                q_09: response.q_09,
                q_10: response.q_10,
                q_11: response.q_11,
                q_12: response.q_12,
                q_13: response.q_13,
                q_14: response.q_14,
                q_15: response.q_15,
                q_16: response.q_16,
                q_17: response.q_17,
                q_18: response.q_18,
                q_19: response.q_19,
                q_20: response.q_20,
                final_score:
                    response.q_01 +
                    response.q_02 +
                    response.q_03 +
                    response.q_04 +
                    response.q_05 +
                    response.q_06 +
                    response.q_07 +
                    response.q_08 +
                    response.q_09 +
                    response.q_10 +
                    response.q_11 +
                    response.q_12 +
                    response.q_13 +
                    response.q_14 +
                    response.q_15 +
                    response.q_16 +
                    response.q_17 +
                    response.q_18 +
                    response.q_19 +
                    response.q_20,
            };

            data.push(object);
        }

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of students admin approved form of current Year
//@route admin/data/forms/students
//@access Private

export const getStudentsData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await Students.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { approved: true },
                ],
            },
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records ieac approved teaching form of current Year
//@route admin/data/forms/teaching
//@access Private

export const getTeachingData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await Teaching.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { ieacApproved: true },
                ],
            },
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of ieac approved non teaching form of current Year
//@route admin/data/forms/non-teaching
//@access Private

export const getNonTeachingData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await NonTeaching.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { ieacApproved: true },
                ],
            },
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of feedback-01 form of current Year
//@route admin/data/forms/feedback-01
//@access Private

export const getFeedback01Data = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await FeedbackOne.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records feedback-02 form of current Year
//@route admin/data/forms/feedback-02
//@access Private

export const getFeedback02Data = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await FeedbackTwo.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of feedback-03 form of current Year
//@route admin/data/forms/feedback-03
//@access Private

export const getFeedback03Data = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await FeedbackThree.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get records of feedback04 of current Year
//@route admin/data/forms/feedback-04
//@access Private

export const getFeedback04Data = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const data = await FeedbackFour.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

/**
 * Score Card Data API methods
 */

//@desc get necessary Data for Teaching Scorecard
//@route GET admin/data/teaching/scorecard/:id
//@acess Private
export const getTeachingScoreCardData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();
        const studentsValidFeedbacks = [];
        const peersValidFeedbacks = [];

        let hoiScore = 0;
        // const applicationID = req.headers.applicationid;
        const applicationID = req.headers["x-application-id"];

        const applicationData = await Teaching.findOne({
            where: { id: applicationID },
        });

        if (!applicationData) {
            res.status(404).json({ error: "Application Not Found" });
            return;
        }
        const facultyName = applicationData.faculty_name;
        const studentFeedbackData = await FeedbackOne.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),

                    sequelize.where(
                        sequelize.fn(
                            "TRIM",
                            sequelize.fn("LOWER", sequelize.col("teacher_name"))
                        ),
                        facultyName
                    ),
                ],
            },
        });

        const peerFeedbackData = await FeedbackTwo.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),

                    sequelize.where(
                        sequelize.fn(
                            "TRIM",
                            sequelize.fn("LOWER", sequelize.col("teacher_name"))
                        ),
                        facultyName
                    ),
                ],
            },
        });

        // calculate hoi score avg

        hoiScore =
            applicationData.q_01 +
            applicationData.q_02 +
            applicationData.q_03 +
            applicationData.q_04 +
            applicationData.q_05 +
            applicationData.q_06 +
            applicationData.q_07 +
            applicationData.q_08 +
            applicationData.q_09 +
            applicationData.q_10 +
            applicationData.q_11 +
            applicationData.q_12 +
            applicationData.q_13 +
            applicationData.q_14 +
            applicationData.q_15 +
            applicationData.q_16 +
            applicationData.q_17 +
            applicationData.q_18 +
            applicationData.q_19 +
            applicationData.q_20;

        const hoiAverageScore = Number((hoiScore / 20).toFixed(2));

        // calculate ieac score avg

        const ieacAverageScore = Number(
            (
                (Number(applicationData.ieac_scoreA) +
                    Number(applicationData.ieac_scoreB) +
                    Number(applicationData.ieac_scoreC)) /
                3
            ).toFixed(2)
        );

        // filter feedback  current faculty

        for (const feedback of studentFeedbackData) {
            studentsValidFeedbacks.push(feedback);
        }

        for (const feedback of peerFeedbackData) {
            peersValidFeedbacks.push(feedback);
        }

        // calculate feedback sum for each

        let studentFeedbackScoreSum = 0;
        let peersFeedbackScoreSum = 0;

        for (const feedback of studentsValidFeedbacks) {
            studentFeedbackScoreSum +=
                textToScore(feedback.q_01) +
                textToScore(feedback.q_02) +
                feedback.q_03 +
                feedback.q_04 +
                feedback.q_05 +
                textToScore(feedback.q_06) +
                textToScore(feedback.q_07) +
                feedback.q_08 +
                textToScore(feedback.q_09) +
                textToScore(feedback.q_11);
        }

        for (const feedback of peersValidFeedbacks) {
            peersFeedbackScoreSum +=
                textToScore(feedback.q_01) +
                textToScore(feedback.q_02) +
                textToScore(feedback.q_03) +
                textToScore(feedback.q_04) +
                textToScore(feedback.q_05) +
                textToScore(feedback.q_06) +
                textToScore(feedback.q_07) +
                textToScore(feedback.q_08) +
                textToScore(feedback.q_09);
        }

        // calculate average

        const studentsFeedbackAverageScore = Number(
            (
                studentFeedbackScoreSum /
                (10 * studentsValidFeedbacks.length)
            ).toFixed(2)
        );
        const peersFeedbackAverageScore = Number(
            (peersFeedbackScoreSum / (peersValidFeedbacks.length * 9)).toFixed(
                2
            )
        );

        // other required Data

        const categoryOfAward = applicationData.awards_category;
        const institute = applicationData.institution_name;
        const scoreA = Number(applicationData.ieac_scoreA);
        const scoreB = Number(applicationData.ieac_scoreB);
        const scoreC = Number(applicationData.ieac_scoreC);

        res.status(200).json({
            message: "Request Successful",
            name: facultyName,
            category: categoryOfAward,
            institute: institute,
            scoreA: scoreA,
            scoreB: scoreB,
            scoreC: scoreC,
            hoi_avg: hoiAverageScore,
            ieac_avg: ieacAverageScore,
            student_avg: studentsFeedbackAverageScore,
            peers_avg: peersFeedbackAverageScore,
        });
    }
);

//@desc get scorecard Data for non teaching entries
//@route GET admin/data/teaching/scorecard/:id
//@access Private

export const getNonTeachingScoreCardData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const studentValidFeedbacks = [];
        const peerValidFeedbacks = [];

        const applicationID = req.headers["x-application-id"];

        const applicationData = await NonTeaching.findOne({
            where: { id: applicationID },
        });

        if (!applicationData) {
            res.status(404).json({ error: "Application Not Found" });
            return;
        }
        const theGuy = applicationData.staff_name;

        const studentFeedbacks = await FeedbackThree.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),

                    sequelize.where(
                        sequelize.fn(
                            "TRIM",
                            sequelize.fn("LOWER", sequelize.col("teacher_name"))
                        ),
                        theGuy
                    ),
                ],
            },
        });

        const peersFeedback = await FeedbackFour.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),

                    sequelize.where(
                        sequelize.fn(
                            "TRIM",
                            sequelize.fn("LOWER", sequelize.col("teacher_name"))
                        ),
                        theGuy
                    ),
                ],
            },
        });

        // find feedbacks of requested staff

        for (const feedback of studentFeedbacks) {
            studentValidFeedbacks.push(feedback);
        }

        for (const feedback of peersFeedback) {
            peerValidFeedbacks.push(feedback);
        }

        // calculate hoi_avg

        const hoi_avg = Number(
            (
                (applicationData.q_01 +
                    applicationData.q_02 +
                    applicationData.q_03 +
                    applicationData.q_04 +
                    applicationData.q_05 +
                    applicationData.q_06 +
                    applicationData.q_07 +
                    applicationData.q_08 +
                    applicationData.q_09 +
                    applicationData.q_10 +
                    applicationData.q_11 +
                    applicationData.q_12 +
                    applicationData.q_13 +
                    applicationData.q_14 +
                    applicationData.q_15 +
                    applicationData.q_16 +
                    applicationData.q_17 +
                    applicationData.q_18 +
                    applicationData.q_19 +
                    applicationData.q_20 +
                    applicationData.q_21 +
                    applicationData.q_22 +
                    applicationData.q_23 +
                    applicationData.q_24) /
                24
            ).toFixed(2)
        );

        // calculate ieac_avg

        const ieac_avg = Number(
            (
                (Number(applicationData.ieac_scoreA) +
                    Number(applicationData.ieac_scoreB)) /
                2
            ).toFixed(2)
        );

        // calculate student avg

        let studentsfeedbackSum = 0;

        for (const feedback of studentValidFeedbacks) {
            studentsfeedbackSum =
                studentsfeedbackSum +
                textToScore(feedback.q_01) +
                textToScore(feedback.q_02) +
                textToScore(feedback.q_03) +
                textToScore(feedback.q_04) +
                textToScore(feedback.q_05);
        }

        const student_avg = Number(
            (studentsfeedbackSum / (5 * studentValidFeedbacks.length)).toFixed(
                2
            )
        );

        // calculate peers avg

        let peerFeedbackSum = 0;

        for (const feedback of peerValidFeedbacks) {
            peerFeedbackSum =
                peerFeedbackSum +
                textToScore(feedback.q_01) +
                textToScore(feedback.q_02) +
                textToScore(feedback.q_03) +
                textToScore(feedback.q_04) +
                textToScore(feedback.q_05) +
                textToScore(feedback.q_06) +
                textToScore(feedback.q_07) +
                textToScore(feedback.q_08);
        }

        const peers_avg = Number(
            (peerFeedbackSum / (8 * peerValidFeedbacks.length)).toFixed(2)
        );

        // get necessary data

        const name = applicationData.staff_name;
        const category = applicationData.award_category;
        const institute = applicationData.institution_name;
        const scoreA = applicationData.ieac_scoreA;
        const scoreB = applicationData.ieac_scoreB;

        res.status(200).json({
            message: "Request Successful",
            name: name,
            category: category,
            institute: institute,
            scoreA: scoreA,
            scoreB: scoreB,
            hoi_avg: hoi_avg,
            ieac_avg: ieac_avg,
            student_avg: student_avg,
            peers_avg: peers_avg,
        });
    }
);

//@desc POST results file
//@route POST admin/data/announce-results
//@access Private

export const resultsDataHandler = asyncHandler(
    async (req: Request, res: Response) => {
        await Results.create({
            result: (req as FileRequest).file.path,
        });

        res.status(200).json({
            message: "Request Successful",
        });
    }
);

//@desc POST results file
//@route POST admin/data/announce-results
//@access Private

export const getResultsData = asyncHandler(
    async (req: Request, res: Response) => {
        const currentYear = new Date().getFullYear();

        const result = await Results.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        res.status(200).json({
            message: "Request Successful",
            data: result,
        });
    }
);

//@desc GET results file
//@route GET admin/data/users
//@access Private

export const getUsersData = asyncHandler(
    async (req: Request, res: Response) => {
        const result = await User.findAll({
            attributes: {
                exclude: ["password"], // why was this not excluded??
            },
        });

        res.status(200).json({
            users: result,
        });
    }
);

//@desc GET Form Preview Data
//@route GET admin/data/preview/formType
//@access Private
export const getFormPreviewData = asyncHandler(
    async (req: Request, res: Response) => {
        const formType = req.params.formtype;
        const applicationID = req.headers["x-application-id"];

        let application;

        switch (formType) {
            case "outstanding-institution":
                application = await OutstandingInstitution.findOne({
                    where: { id: applicationID },
                });
                break;

            case "research":
                application = await Research.findOne({
                    where: { id: applicationID },
                });
                break;

            case "sports-boy":
                application = await Sports.findOne({
                    where: { id: applicationID },
                    attributes: {
                        include: [
                            "id",
                            "email_id",
                            "institution_name",
                            "nominee_ss_boy",
                            "nominee_ss_boy_sport",
                            "nominee_ss_boy_supportings",
                            "q_25",
                            "q_26",
                            "q_27",
                            "q_28",
                        ],
                    },
                });
                break;

            case "sports-girl":
                application = await Sports.findOne({
                    where: { id: applicationID },
                    attributes: {
                        include: [
                            "id",
                            "email_id",
                            "institution_name",
                            "nominee_ss_girl",
                            "nominee_ss_girl_sport",
                            "nominee_ss_girl_photo",
                            "nominee_ss_girl_supportings",
                            "q_21",
                            "q_22",
                            "q_23",
                            "q_24",
                        ],
                    },
                });

                break;

            case "sports-coach":
                application = await Sports.findOne({
                    where: { id: applicationID },
                    attributes: {
                        include: [
                            "id",
                            "email_id",
                            "institution_name",
                            "nominee_inspiring_coach",
                            "nominee_coach_comments",
                            "nominee_coach_photo",
                            "nominee_coach_supportings",
                            "q_01",
                            "q_02",
                            "q_03",
                            "q_04",
                            "q_05",
                            "q_06",
                            "q_07",
                            "q_08",
                            "q_09",
                            "q_10",
                            "q_11",
                            "q_12",
                            "q_13",
                            "q_14",
                            "q_15",
                            "q_16",
                            "q_17",
                            "q_18",
                            "q_19",
                            "q_20",
                        ],
                    },
                });

                break;

            case "students":
                application = await Students.findOne({
                    where: { id: applicationID },
                });
                break;

            case "teaching":
                application = await Teaching.findOne({
                    where: { id: applicationID },
                });
                break;

            case "non-teaching":
                application = await NonTeaching.findOne({
                    where: { id: applicationID },
                });
                break;

            default:
                break;
        }

        res.status(200).json({
            data: application,
        });
    }
);

//@desc GET jury summary data
//@route GET admin/data/jury-summary/teaching
//@access Private
export const getTeachingJurySummaryData = asyncHandler(
    async (req: Request, res: Response) => {
        let promisingApprovedData = [];
        let excellenceApprovedData = [];
        let promisingNotApprovedData = [];
        let excellenceNotApprovedData = [];

        const currentYear = new Date().getFullYear();

        // applications
        const applications = await Teaching.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        // feedbacks

        const StudentsFeedbacks = await FeedbackOne.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        const PeersFeedbacks = await FeedbackTwo.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        // calculate scores and add data in respective arrays

        for (let entry of applications) {
            //@ts-ignore
            const faculty: TeachingJuryScore = {};
            faculty.id = entry.id;
            faculty.faculty_name = entry.faculty_name;
            faculty.institution_name = entry.institution_name;
            faculty.designation = entry.designation;

            faculty.applicationScore =
                (entry.q_01 +
                    entry.q_02 +
                    entry.q_03 +
                    entry.q_04 +
                    entry.q_05 +
                    entry.q_06 +
                    entry.q_07 +
                    entry.q_08 +
                    entry.q_09 +
                    entry.q_10 +
                    entry.q_11 +
                    entry.q_12 +
                    entry.q_13 +
                    entry.q_14 +
                    entry.q_15 +
                    entry.q_16 +
                    entry.q_17 +
                    entry.q_18 +
                    entry.q_19 +
                    entry.q_20) /
                20;

            const ieacAverageScore = Number(
                (
                    (Number(entry.ieac_scoreA) +
                        Number(entry.ieac_scoreB) +
                        Number(entry.ieac_scoreC)) /
                    3
                ).toFixed(2)
            );

            faculty.applicationScore =
                (faculty.applicationScore + ieacAverageScore / 2) / 2;
            faculty.applicationScore = 0.4 * faculty.applicationScore;

            faculty.groups = grouping[entry.institution_name];
            faculty.ieacApprovedFile = entry.ieacApprovedFile;
            faculty.feedbackScore = 0;

            // calculate feedbackScore

            // segregate feedbacks

            let validStudentsFeedbacks = [];
            let validPeersFeedbacks = [];

            for (let feedback of StudentsFeedbacks) {
                validStudentsFeedbacks.push(feedback);
            }

            for (let feedback of PeersFeedbacks) {
                validPeersFeedbacks.push(feedback);
            }

            // calucate avg of students feedback

            let studentFeedbackScoreSum = 0;
            let peersFeedbackScoreSum = 0;

            for (const feedback of StudentsFeedbacks) {
                studentFeedbackScoreSum +=
                    textToScore(feedback.q_01) +
                    textToScore(feedback.q_02) +
                    feedback.q_03 +
                    feedback.q_04 +
                    feedback.q_05 +
                    textToScore(feedback.q_06) +
                    textToScore(feedback.q_07) +
                    feedback.q_08 +
                    textToScore(feedback.q_09) +
                    textToScore(feedback.q_11);
            }

            for (const feedback of validPeersFeedbacks) {
                peersFeedbackScoreSum +=
                    textToScore(feedback.q_01) +
                    textToScore(feedback.q_02) +
                    textToScore(feedback.q_03) +
                    textToScore(feedback.q_04) +
                    textToScore(feedback.q_05) +
                    textToScore(feedback.q_06) +
                    textToScore(feedback.q_07) +
                    textToScore(feedback.q_08) +
                    textToScore(feedback.q_09);
            }

            const studentsFeedbackAverageScore = Number(
                (
                    studentFeedbackScoreSum /
                    (10 * validStudentsFeedbacks.length)
                ).toFixed(2)
            );
            const peersFeedbackAverageScore = Number(
                (
                    peersFeedbackScoreSum /
                    (validPeersFeedbacks.length * 9)
                ).toFixed(2)
            );

            faculty.feedbackScore = Number(
                (
                    (0.6 *
                        (studentsFeedbackAverageScore +
                            peersFeedbackAverageScore)) /
                    2
                ).toFixed(2)
            );
            faculty.totalScore =
                faculty.applicationScore + faculty.feedbackScore;

            if (
                entry.awards_category ===
                "Excellence in Teaching (more than 3 years of service)"
            ) {
                if (entry.ieacApproved) {
                    excellenceApprovedData.push(faculty);
                } else {
                    excellenceNotApprovedData.push(faculty);
                }
            } else if (
                entry.awards_category ===
                "Promising Teacher of the year (1 to 3 years of service)"
            ) {
                if (entry.ieacApproved) {
                    promisingApprovedData.push(faculty);
                } else {
                    promisingNotApprovedData.push(faculty);
                }
            }
        }

        res.status(200).json({
            promising_approved: promisingApprovedData,
            excellence_approved: excellenceApprovedData,
            promising_notApproved: promisingNotApprovedData,
            excellence_notApproved: excellenceNotApprovedData,
        });
    }
);

//@desc GET jury summary data
//@route GET admin/data/jury-summary/non-teaching
//@access Private
export const getNonTeachingJurySummaryData = asyncHandler(
    async (req: Request, res: Response) => {
        // data

        let array01 = []; //Employee of the Year (More than 3 years of service) : approved
        let array001 = []; //Employee of the Year (More than 3 years of service) : not approved
        let array02 = []; //Promising Employee Educational Institute (1 to 3 years of service) : approved
        let array002 = []; //Promising Employee Educational Institute (1 to 3 years of service) : not approved
        let array03 = []; //Promising Employee Somaiya Trust/GVPM (1 to 3 years of service) : approved
        let array003 = []; //Promising Employee Somaiya Trust/GVPM (1 to 3 years of service): not approved
        let array04 = []; //Outstanding Employee Somaiya Trust/GVPM : approved
        let array004 = []; //Outstanding Employee Somaiya Trust/GVPM : not approved
        let array05 = []; //Outstanding Employee K. J. Somaiya Hospital & Research Centre : approved
        let array005 = []; //Outstanding Employee K. J. Somaiya Hospital & Research Centre : not approved

        const currentYear = new Date().getFullYear();

        // fetch data

        const applications = await NonTeaching.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        const studentsFeedbacks = await FeedbackThree.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        const peersFeedbacks = await FeedbackFour.findAll({
            where: sequelize.where(
                sequelize.fn("YEAR", sequelize.col("createdAt")),
                currentYear
            ),
        });

        // calculate scores and add entry in respective category

        for (let entry of applications) {
            //@ts-ignore
            let employee: NonTeachingJuryScore = {};
            employee.id = entry.id;
            employee.staff_name = entry.staff_name;
            employee.institution_name = entry.institution_name;
            employee.designation = entry.designation;
            employee.groups = grouping[entry.institution_name];
            employee.ieacApprovedFile = entry.ieacApprovedFile;
            employee.applicationScore = Number(
                (
                    (entry.q_01 +
                        entry.q_02 +
                        entry.q_03 +
                        entry.q_04 +
                        entry.q_05 +
                        entry.q_06 +
                        entry.q_07 +
                        entry.q_08 +
                        entry.q_09 +
                        entry.q_10 +
                        entry.q_11 +
                        entry.q_12 +
                        entry.q_13 +
                        entry.q_14 +
                        entry.q_15 +
                        entry.q_16 +
                        entry.q_17 +
                        entry.q_18 +
                        entry.q_19 +
                        entry.q_20 +
                        entry.q_21 +
                        entry.q_22 +
                        entry.q_23 +
                        entry.q_24) /
                    24
                ).toFixed(2)
            );

            const ieac_avg = Number(
                (
                    (Number(entry.ieac_scoreA) + Number(entry.ieac_scoreB)) /
                    2
                ).toFixed(2)
            );

            employee.applicationScore =
                (employee.applicationScore + ieac_avg / 2) / 2;
            employee.applicationScore = 0.4 * employee.applicationScore;

            employee.feedbackScore = 0;
            employee.totalScore = 0;
            employee.ieacApprovedFile = entry.ieacApprovedFile;

            // calculate feedback score

            // segregate feedbacks
            let studentsValidFeedbacks = [];
            let peersValidFeedbacks = [];

            for (const feedback of studentsFeedbacks) {
                if (
                    entry.staff_name.trim().toLowerCase() ===
                    feedback.employee_name.trim().toLowerCase()
                ) {
                    studentsValidFeedbacks.push(feedback);
                }
            }

            for (const feedback of peersFeedbacks) {
                if (
                    entry.staff_name.trim().toLowerCase() ===
                    feedback.nominee_name.trim().toLowerCase()
                ) {
                    peersValidFeedbacks.push(feedback);
                }
            }

            // calculate avg
            let studentsfeedbackSum = 0;

            for (const feedback of studentsValidFeedbacks) {
                studentsfeedbackSum =
                    studentsfeedbackSum +
                    textToScore(feedback.q_01) +
                    textToScore(feedback.q_02) +
                    textToScore(feedback.q_03) +
                    textToScore(feedback.q_04) +
                    textToScore(feedback.q_05);
            }

            let peerFeedbackSum = 0;

            for (const feedback of peersValidFeedbacks) {
                peerFeedbackSum =
                    peerFeedbackSum +
                    textToScore(feedback.q_01) +
                    textToScore(feedback.q_02) +
                    textToScore(feedback.q_03) +
                    textToScore(feedback.q_04) +
                    textToScore(feedback.q_05) +
                    textToScore(feedback.q_06) +
                    textToScore(feedback.q_07) +
                    textToScore(feedback.q_08);
            }

            const student_avg = Number(
                (
                    studentsfeedbackSum /
                    (5 * studentsValidFeedbacks.length)
                ).toFixed(2)
            );
            const peers_avg = Number(
                (peerFeedbackSum / (8 * peersValidFeedbacks.length)).toFixed(2)
            );

            employee.feedbackScore = Number(
                (0.6 * ((student_avg + peers_avg) / 2)).toFixed(2)
            );
            employee.totalScore =
                employee.applicationScore + employee.feedbackScore;

            if (
                entry.award_category ===
                "Employee of the Year (More than 3 years of service)"
            ) {
                if (entry.ieacApproved) {
                    array01.push(employee);
                } else {
                    array001.push(employee);
                }
            } else if (
                entry.award_category ===
                "Promising Employee Educational Institute (1 to 3 years of service)"
            ) {
                if (entry.ieacApproved) {
                    array02.push(employee);
                } else {
                    array002.push(employee);
                }
            } else if (
                entry.award_category ===
                "Promising Employee Somaiya Trust/GVPM (1 to 3 years of service)"
            ) {
                if (entry.ieacApproved) {
                    array03.push(employee);
                } else {
                    array003.push(employee);
                }
            } else if (
                entry.award_category ===
                "Outstanding Employee Somaiya Trust/GVPM"
            ) {
                if (entry.ieacApproved) {
                    array04.push(employee);
                } else {
                    array004.push(employee);
                }
            } else if (
                entry.award_category ===
                "Outstanding Employee K. J. Somaiya Hospital & Research Centre"
            ) {
                if (entry.ieacApproved) {
                    array05.push(employee);
                } else {
                    array005.push(employee);
                }
            }
        }

        res.status(200).json({
            array01: array01,
            array001: array001,
            array02: array02,
            array002: array002,
            array03: array03,
            array003: array003,
            array04: array04,
            array004: array004,
            array05: array05,
            array005: array005,
        });
    }
);

//@desc Delete user
//@route Delete admin/data/delete-user
//@access Private
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ error: "Missing userId in the request body" });
        return;
    }

    await User.destroy({
        where: { id: userId },
    });

    res.status(200).json({
        message: "User deleted successfully",
    });
});
