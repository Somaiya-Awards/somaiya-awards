"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getNonTeachingJurySummaryData = exports.getTeachingJurySummaryData = exports.getFormPreviewData = exports.getUsersData = exports.getResultsData = exports.resultsDataHandler = exports.getNonTeachingScoreCardData = exports.getTeachingScoreCardData = exports.getFeedback04Data = exports.getFeedback03Data = exports.getFeedback02Data = exports.getFeedback01Data = exports.getNonTeachingData = exports.getTeachingData = exports.getStudentsData = exports.getSportsCoachData = exports.getSportsBoyData = exports.getSportsGirlData = exports.getResearchData = exports.getInstitutionData = exports.getGroupWiseCount = exports.getInstitutionWiseCount = exports.getDaysCount = exports.getCounts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const uuid_1 = require("uuid");
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
const constants_1 = require("../constants");
function textToScore(text) {
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
exports.getCounts = (0, express_async_handler_1.default)(async (req, res) => {
    const conditions = {
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), new Date().getFullYear()),
    };
    let countData = {
        /** WARN: Explicitly Fail if something errors out */
        // institution Count
        institutionFormCount: await models_1.OutstandingInstitution.count(conditions),
        // research Count
        researchFormCount: await models_1.Research.count(conditions),
        // sports Count
        sportsFormCount: await models_1.Sports.count(conditions),
        // teaching Count
        teachingFormCount: await models_1.Teaching.count(conditions),
        // non teaching Count
        nonTeachingFormCount: await models_1.NonTeaching.count(conditions),
        // feedback1 count
        feedbackOneFormCount: await models_1.FeedbackOne.count(conditions),
        // feedback2 count
        feedbackTwoFormCount: await models_1.FeedbackTwo.count(conditions),
        // feedback3 count
        feedbackThreeFormCount: await models_1.FeedbackThree.count(conditions),
        // feedback4 count
        feedbackFourFormCount: await models_1.FeedbackFour.count(conditions),
        // students form count
        studentsFormCount: await models_1.Students.count(conditions),
    };
    res.status(200).json({ data: countData });
});
/**
 * Returns the date, `days` days ago.
 * Eg: days = 15, returns the date 15 days ago
 */
function getLastDate(days) {
    let currentYear = new Date().getFullYear(), currentMonth = new Date().getMonth(), currentDate = new Date().getDay() - days;
    if (currentDate < 1) {
        currentMonth--; // year changes accordingly, but not date
    }
    return new Date(currentYear, currentMonth, currentDate);
}
function sequelLastDays(date) {
    return {
        where: models_1.sequelize.where(models_1.sequelize.fn("DATE", models_1.sequelize.col("createdAt")), {
            [sequelize_1.Op.gte]: date.toISOString().split("T")[0],
        }),
        attributes: [
            [models_1.sequelize.fn("DATE", models_1.sequelize.col("createdAt")), "date"],
            [
                models_1.sequelize.fn("COUNT", models_1.sequelize.col("id")),
                "formsFilled",
            ],
        ],
        group: [models_1.sequelize.fn("DATE", models_1.sequelize.col("createdAt"))],
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
exports.getDaysCount = (0, express_async_handler_1.default)(async (req, res) => {
    //get institution data
    let conditions = sequelLastDays(getLastDate(15));
    //@ts-ignore
    const institutionData = await models_1.OutstandingInstitution.findAll(conditions);
    //get research data
    //@ts-ignore
    const researchData = await models_1.Research.findAll(conditions);
    //get sports data
    //@ts-ignore
    const sportsData = await models_1.Sports.findAll(conditions);
    //get teaching data
    //@ts-ignore
    const teachingData = await models_1.Teaching.findAll(conditions);
    //get Non Teaching Data
    //@ts-ignore
    const nonTeachingData = await models_1.NonTeaching.findAll(conditions);
    // get feedback One Data
    //@ts-ignore
    const feedbackOneData = await models_1.FeedbackOne.findAll(conditions);
    // get feedback two data
    //@ts-ignore
    const feedbackTwoData = await models_1.FeedbackTwo.findAll(conditions);
    // get feedback three data
    //@ts-ignore
    const feedbackThreeData = await models_1.FeedbackThree.findAll(conditions);
    // get feedback four data
    //@ts-ignore
    const feedbackFourData = await models_1.FeedbackFour.findAll(conditions);
    // get students form data
    //@ts-ignore
    const studentsData = await models_1.Students.findAll(conditions);
    //process th data to extract just dates
    let lists = [
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
    let data = {};
    for (let list of lists) {
        if (!data.hasOwnProperty(list.date)) {
            data[list.date] = 0;
        }
        data[list.date] += list.formsFilled;
    }
    res.status(200).json({ data: data });
});
//@desc get institution wise all forms count
//@route GET admin/data/count/institution-wise
//@access Private
function sequelInstitute() {
    return {
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), {
            [sequelize_1.Op.eq]: new Date().getFullYear(),
        }),
        attributes: [
            "institution_name",
            [
                models_1.sequelize.fn("COUNT", models_1.sequelize.col("id")),
                "formsFilled",
            ],
        ],
        group: ["institution_name"],
        raw: true,
    };
}
exports.getInstitutionWiseCount = (0, express_async_handler_1.default)(async (req, res) => {
    let conditions = sequelInstitute();
    //@ts-ignore
    const institutionData = await models_1.OutstandingInstitution.findAll(conditions);
    //get research data
    //@ts-ignore
    const researchData = await models_1.Research.findAll(conditions);
    //get sports data
    //@ts-ignore
    const sportsData = await models_1.Sports.findAll(conditions);
    //get teaching data
    //@ts-ignore
    const teachingData = await models_1.Teaching.findAll(conditions);
    //get Non Teaching Data
    //@ts-ignore
    const nonTeachingData = await models_1.NonTeaching.findAll(conditions);
    // get feedback One Data
    //@ts-ignore
    const studentsData = await models_1.Students.findAll(conditions);
    //process th data to extract just dates
    //@ts-expect-error {}
    let countObject = {};
    for (let i of constants_1.Institutes) {
        countObject[i] = {
            id: (0, uuid_1.v4)(),
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
        if (!countObject.hasOwnProperty(institute))
            continue;
        countObject[institute].institution_form += data.formsFilled;
    }
    // research form Counter
    for (const data of researchData) {
        const institute = data.institution_name;
        if (!countObject.hasOwnProperty(institute))
            continue;
        countObject[institute].research_form += data.formsFilled;
    }
    // sports form Counter
    for (const data of sportsData) {
        const institute = data.institution_name;
        if (!countObject.hasOwnProperty(institute))
            continue;
        countObject[institute].sports_form += data.formsFilled;
    }
    // teaching form Counter
    for (const data of teachingData) {
        const institute = data.institution_name;
        if (!countObject.hasOwnProperty(institute))
            continue;
        countObject[institute].teaching_form += data.formsFilled;
    }
    // non teaching form Counter
    for (const data of nonTeachingData) {
        const institute = data.institution_name;
        if (!countObject.hasOwnProperty(institute))
            continue;
        countObject[institute].non_teaching_form += data.formsFilled;
    }
    // students form counter
    for (const data of studentsData) {
        const institute = data.institution_name;
        if (!countObject.hasOwnProperty(institute))
            continue;
        countObject[institute].students_form += data.formsFilled;
    }
    let array = { data: [] };
    Object.keys(countObject).forEach((key) => {
        array.data.push(countObject[key]);
    });
    res.status(200).json(array);
});
function groupCountMethod(groupCount, groupIndex, count) {
    groupCount[groupIndex].formsFilled += count;
}
// @desc : group Wise Count
// @ route GET admin/data/count/group
// @access Private
// TODO: complete the controller
exports.getGroupWiseCount = (0, express_async_handler_1.default)(async (req, res) => {
    let conditions = sequelInstitute();
    //@ts-ignore
    const institutionData = await models_1.OutstandingInstitution.findAll(conditions);
    //get research data
    //@ts-ignore
    const researchData = await models_1.Research.findAll(conditions);
    //get sports data
    //@ts-ignore
    const sportsData = await models_1.Sports.findAll(conditions);
    //get teaching data
    //@ts-ignore
    const teachingData = await models_1.Teaching.findAll(conditions);
    //get Non Teaching Data
    //@ts-ignore
    const nonTeachingData = await models_1.NonTeaching.findAll(conditions);
    // get feedback One Data
    //@ts-ignore
    const studentsData = await models_1.Students.findAll(conditions);
    // get feedback One Data
    //group count logic
    const groupCount = {
        data: [
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
        ],
    };
    // institute forms
    for (const response of institutionData) {
        const validGroups = constants_1.Groups[response.institution_name];
        for (let group of validGroups) {
            groupCountMethod(groupCount.data, group, response.formsFilled);
        }
    }
    //sports
    for (const response of sportsData) {
        const validGroups = constants_1.Groups[response.institution_name];
        for (let group of validGroups) {
            groupCountMethod(groupCount.data, group, response.formsFilled);
        }
    }
    //research
    for (const response of researchData) {
        const validGroups = constants_1.Groups[response.institution_name];
        for (let group of validGroups) {
            groupCountMethod(groupCount.data, group, response.formsFilled);
        }
    }
    //teaching
    for (const response of teachingData) {
        const validGroups = constants_1.Groups[response.institution_name];
        for (let group of validGroups) {
            groupCountMethod(groupCount.data, group, response.formsFilled);
        }
    }
    //non teaching
    for (const response of nonTeachingData) {
        const validGroups = constants_1.Groups[response.institution_name];
        for (let group of validGroups) {
            groupCountMethod(groupCount.data, group, response.formsFilled);
        }
    }
    // students
    for (const response of studentsData) {
        const validGroups = constants_1.Groups[response.institution_name];
        for (let group of validGroups) {
            groupCountMethod(groupCount.data, group, response.formsFilled);
        }
    }
    res.status(200).json(groupCount);
});
/**
 * RESPONSES SECTION
 */
//@desc get records of institution form of current Year
//@route admin/data/forms/outstanding-institution
//@access Private
exports.getInstitutionData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.OutstandingInstitution.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    let instituteData = {
        data: data,
    };
    res.status(200).json(instituteData);
});
//@desc get records of ieac approved research form of current Year
//@route admin/data/forms/research
//@access Private
exports.getResearchData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Research.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { approved: true },
            ],
        },
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records of sports admin approved Sports Girl form of current Year
//@route admin/data/forms/sports-girl
//@access Private
exports.getSportsGirlData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const rawData = await models_1.Sports.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { isApprovedSportsGirl: true },
            ],
        },
    });
    const data = {
        data: [],
    };
    for (const response of rawData) {
        const object = {
            id: response.id,
            email_id: response.email_id,
            institution_name: response.institution_name,
            nominee_ss_girl: response.nominee_ss_girl,
            nominee_ss_girl_sport: response.nominee_ss_girl_sport,
            nominee_ss_girl_photo: response.nominee_ss_girl_photo,
            nominee_ss_girl_supportings: response.nominee_ss_girl_supportings,
            isApprovedSportsGirl: response.isApprovedSportsGirl,
            q_21: response.q_21,
            q_22: response.q_22,
            q_23: response.q_23,
            q_24: response.q_24,
            final_score: response.q_21 * 0.4 +
                response.q_23 * 0.3 +
                response.q_23 * 0.2 +
                response.q_24 * 0.1,
        };
        data.data.push(object);
    }
    res.status(200).json(data);
});
//@desc get records of sports admin approved Sports Boy form of current Year
//@route admin/data/forms/sports-boy
//@access Private
exports.getSportsBoyData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const rawData = await models_1.Sports.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { isApprovedSportsBoy: true },
            ],
        },
    });
    const data = { data: [] };
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
            final_score: response.q_25 * 0.4 +
                response.q_26 * 0.3 +
                response.q_27 * 0.2 +
                response.q_28 * 0.1,
        };
        data.data.push(object);
    }
    res.status(200).json(data);
});
//@desc get records of sports admin approved Sports Coach form of current Year
//@route admin/data/forms/sports-coach
//@access Private
exports.getSportsCoachData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const rawData = await models_1.Sports.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { isApprovedCoach: true },
            ],
        },
    });
    const data = { data: [] };
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
            final_score: response.q_01 +
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
        data.data.push(object);
    }
    res.status(200).json(data);
});
//@desc get records of students admin approved form of current Year
//@route admin/data/forms/students
//@access Private
exports.getStudentsData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Students.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { approved: true },
            ],
        },
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records ieac approved teaching form of current Year
//@route admin/data/forms/teaching
//@access Private
exports.getTeachingData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Teaching.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { ieacApproved: true },
            ],
        },
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records of ieac approved non teaching form of current Year
//@route admin/data/forms/non-teaching
//@access Private
exports.getNonTeachingData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.NonTeaching.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                { ieacApproved: true },
            ],
        },
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records of feedback-01 form of current Year
//@route admin/data/forms/feedback-01
//@access Private
exports.getFeedback01Data = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.FeedbackOne.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records feedback-02 form of current Year
//@route admin/data/forms/feedback-02
//@access Private
exports.getFeedback02Data = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.FeedbackTwo.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records of feedback-03 form of current Year
//@route admin/data/forms/feedback-03
//@access Private
exports.getFeedback03Data = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.FeedbackThree.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get records of feedback04 of current Year
//@route admin/data/forms/feedback-04
//@access Private
exports.getFeedback04Data = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.FeedbackFour.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    res.status(200).json({
        data: data,
    });
});
/**
 * Score Card Data API methods
 */
//@desc get necessary Data for Teaching Scorecard
//@route GET admin/data/teaching/scorecard/:id
//@acess Private
exports.getTeachingScoreCardData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const studentsValidFeedbacks = [];
    const peersValidFeedbacks = [];
    let hoiScore = 0;
    // const applicationID = req.headers.applicationid;
    const applicationID = req.headers["x-application-id"];
    const applicationData = await models_1.Teaching.findOne({
        where: { id: applicationID },
    });
    if (!applicationData) {
        res.status(404).json({ error: "Application Not Found" });
        return;
    }
    const facultyName = applicationData.faculty_name;
    const studentFeedbackData = await models_1.FeedbackOne.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), facultyName),
            ],
        },
    });
    const peerFeedbackData = await models_1.FeedbackTwo.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), facultyName),
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
    const ieacAverageScore = Number(((Number(applicationData.ieac_scoreA) +
        Number(applicationData.ieac_scoreB) +
        Number(applicationData.ieac_scoreC)) /
        3).toFixed(2));
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
    const studentsFeedbackAverageScore = Number((studentFeedbackScoreSum /
        (10 * studentsValidFeedbacks.length)).toFixed(2));
    const peersFeedbackAverageScore = Number((peersFeedbackScoreSum / (peersValidFeedbacks.length * 9)).toFixed(2));
    // other required Data
    const categoryOfAward = applicationData.awards_category;
    const institute = applicationData.institution_name;
    const scoreA = Number(applicationData.ieac_scoreA);
    const scoreB = Number(applicationData.ieac_scoreB);
    const scoreC = Number(applicationData.ieac_scoreC);
    res.status(200).json({
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
});
//@desc get scorecard Data for non teaching entries
//@route GET admin/data/teaching/scorecard/:id
//@access Private
exports.getNonTeachingScoreCardData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const studentValidFeedbacks = [];
    const peerValidFeedbacks = [];
    const applicationID = req.headers["x-application-id"];
    const applicationData = await models_1.NonTeaching.findOne({
        where: { id: applicationID },
    });
    if (!applicationData) {
        res.status(404).json({ error: "Application Not Found" });
        return;
    }
    const theGuy = applicationData.staff_name;
    const studentFeedbacks = await models_1.FeedbackThree.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), theGuy),
            ],
        },
    });
    const peersFeedback = await models_1.FeedbackFour.findAll({
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), theGuy),
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
    const hoi_avg = Number(((applicationData.q_01 +
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
        24).toFixed(2));
    // calculate ieac_avg
    const ieac_avg = Number(((Number(applicationData.ieac_scoreA) +
        Number(applicationData.ieac_scoreB)) /
        2).toFixed(2));
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
    const student_avg = Number((studentsfeedbackSum / (5 * studentValidFeedbacks.length)).toFixed(2));
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
    const peers_avg = Number((peerFeedbackSum / (8 * peerValidFeedbacks.length)).toFixed(2));
    // get necessary data
    const name = applicationData.staff_name;
    const category = applicationData.award_category;
    const institute = applicationData.institution_name;
    const scoreA = applicationData.ieac_scoreA;
    const scoreB = applicationData.ieac_scoreB;
    res.status(200).json({
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
});
//@desc POST results file
//@route POST admin/data/announce-results
//@access Private
exports.resultsDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    await models_1.Results.create({
        result: req.file.path,
    });
    res.status(200).json({});
});
//@desc POST results file
//@route POST admin/data/announce-results
//@access Private
exports.getResultsData = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const result = await models_1.Results.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    res.status(200).json({
        data: result,
    });
});
//@desc GET results file
//@route GET admin/data/users
//@access Private
exports.getUsersData = (0, express_async_handler_1.default)(async (req, res) => {
    const result = await models_1.User.findAll({
        attributes: {
            exclude: ["password"], // why was this not excluded??
        },
    });
    res.status(200).json({
        data: result,
    });
});
//@desc GET Form Preview Data
//@route GET admin/data/preview/formType
//@access Private
exports.getFormPreviewData = (0, express_async_handler_1.default)(async (req, res) => {
    const formType = req.params.formtype;
    const applicationID = req.headers["x-application-id"];
    let application = null;
    switch (formType) {
        case "outstanding-institution":
            application = await models_1.OutstandingInstitution.findOne({
                where: { id: applicationID },
            });
            break;
        case "research":
            application = await models_1.Research.findOne({
                where: { id: applicationID },
            });
            break;
        case "sports-boy":
            application = await models_1.Sports.findOne({
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
            application = await models_1.Sports.findOne({
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
            application = await models_1.Sports.findOne({
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
            application = await models_1.Students.findOne({
                where: { id: applicationID },
            });
            break;
        case "teaching":
            application = await models_1.Teaching.findOne({
                where: { id: applicationID },
            });
            break;
        case "non-teaching":
            application = await models_1.NonTeaching.findOne({
                where: { id: applicationID },
            });
            break;
        default:
            break;
    }
    res.status(200).json({
        data: application,
    });
});
//@desc GET jury summary data
//@route GET admin/data/jury-summary/teaching
//@access Private
exports.getTeachingJurySummaryData = (0, express_async_handler_1.default)(async (req, res) => {
    let promisingApprovedData = [];
    let excellenceApprovedData = [];
    let promisingNotApprovedData = [];
    let excellenceNotApprovedData = [];
    const currentYear = new Date().getFullYear();
    // applications
    const applications = await models_1.Teaching.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    // feedbacks
    const StudentsFeedbacks = await models_1.FeedbackOne.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    const PeersFeedbacks = await models_1.FeedbackTwo.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    // calculate scores and add data in respective arrays
    for (let entry of applications) {
        //@ts-ignore
        const faculty = {};
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
        const ieacAverageScore = Number(((Number(entry.ieac_scoreA) +
            Number(entry.ieac_scoreB) +
            Number(entry.ieac_scoreC)) /
            3).toFixed(2));
        faculty.applicationScore =
            (faculty.applicationScore + ieacAverageScore / 2) / 2;
        faculty.applicationScore = 0.4 * faculty.applicationScore;
        faculty.groups = constants_1.Groups[entry.institution_name];
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
        const studentsFeedbackAverageScore = Number((studentFeedbackScoreSum /
            (10 * validStudentsFeedbacks.length)).toFixed(2));
        const peersFeedbackAverageScore = Number((peersFeedbackScoreSum /
            (validPeersFeedbacks.length * 9)).toFixed(2));
        faculty.feedbackScore = Number(((0.6 *
            (studentsFeedbackAverageScore +
                peersFeedbackAverageScore)) /
            2).toFixed(2));
        faculty.totalScore =
            faculty.applicationScore + faculty.feedbackScore;
        if (entry.awards_category ===
            "Excellence in Teaching (more than 3 years of service)") {
            if (entry.ieacApproved) {
                excellenceApprovedData.push(faculty);
            }
            else {
                excellenceNotApprovedData.push(faculty);
            }
        }
        else if (entry.awards_category ===
            "Promising Teacher of the year (2 to 3 years of service)") {
            if (entry.ieacApproved) {
                promisingApprovedData.push(faculty);
            }
            else {
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
});
//@desc GET jury summary data
//@route GET admin/data/jury-summary/non-teaching
//@access Private
exports.getNonTeachingJurySummaryData = (0, express_async_handler_1.default)(async (req, res) => {
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
    const applications = await models_1.NonTeaching.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    const studentsFeedbacks = await models_1.FeedbackThree.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    const peersFeedbacks = await models_1.FeedbackFour.findAll({
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
    });
    // calculate scores and add entry in respective category
    for (let entry of applications) {
        //@ts-ignore
        let employee = {};
        employee.id = entry.id;
        employee.staff_name = entry.staff_name;
        employee.institution_name = entry.institution_name;
        employee.designation = entry.designation;
        employee.groups = constants_1.Groups[entry.institution_name];
        employee.ieacApprovedFile = entry.ieacApprovedFile;
        employee.applicationScore = Number(((entry.q_01 +
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
            24).toFixed(2));
        const ieac_avg = Number(((Number(entry.ieac_scoreA) + Number(entry.ieac_scoreB)) /
            2).toFixed(2));
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
            if (entry.staff_name.trim().toLowerCase() ===
                feedback.employee_name.trim().toLowerCase()) {
                studentsValidFeedbacks.push(feedback);
            }
        }
        for (const feedback of peersFeedbacks) {
            if (entry.staff_name.trim().toLowerCase() ===
                feedback.nominee_name.trim().toLowerCase()) {
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
        const student_avg = Number((studentsfeedbackSum /
            (5 * studentsValidFeedbacks.length)).toFixed(2));
        const peers_avg = Number((peerFeedbackSum / (8 * peersValidFeedbacks.length)).toFixed(2));
        employee.feedbackScore = Number((0.6 * ((student_avg + peers_avg) / 2)).toFixed(2));
        employee.totalScore =
            employee.applicationScore + employee.feedbackScore;
        if (entry.award_category ===
            "Employee of the Year (More than 3 years of service)") {
            if (entry.ieacApproved) {
                array01.push(employee);
            }
            else {
                array001.push(employee);
            }
        }
        else if (entry.award_category ===
            "Promising Employee Educational Institute (1 to 3 years of service)") {
            if (entry.ieacApproved) {
                array02.push(employee);
            }
            else {
                array002.push(employee);
            }
        }
        else if (entry.award_category ===
            "Promising Employee Somaiya Trust/GVPM (1 to 3 years of service)") {
            if (entry.ieacApproved) {
                array03.push(employee);
            }
            else {
                array003.push(employee);
            }
        }
        else if (entry.award_category ===
            "Outstanding Employee Somaiya Trust/GVPM") {
            if (entry.ieacApproved) {
                array04.push(employee);
            }
            else {
                array004.push(employee);
            }
        }
        else if (entry.award_category ===
            "Outstanding Employee K. J. Somaiya Hospital & Research Centre") {
            if (entry.ieacApproved) {
                array05.push(employee);
            }
            else {
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
});
//@desc Delete user
//@route Delete admin/data/delete-user
//@access Private
exports.deleteUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        res.status(400).json({ error: "Missing userId in the request body" });
        return;
    }
    await models_1.User.destroy({
        where: { id: userId },
    });
    res.status(200).json({});
});
