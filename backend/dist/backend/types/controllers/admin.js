"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonTeachingScore = exports.TeachingScore = exports.Coach = exports.SportsBoy = exports.SportsGirl = exports.getFeedbackFiveData = exports.getFeedbackFourData = exports.getFeedbackThreeData = exports.getFeedbackTwoData = exports.getFeedbackOneData = exports.getTeachingData = exports.getSportsData = exports.getUserData = exports.getResultData = exports.getInstitutionData = exports.groupCount = exports.instituteCountArray = exports.instituteCount = exports.lastDayResponse = exports.countAllResponse = void 0;
const zod_1 = __importDefault(require("zod"));
const zod_2 = require("../../zod");
const OutstandingInstitution_1 = require("../../models/tables/OutstandingInstitution");
const Results_1 = require("../../models/tables/Results");
const User_1 = require("../../models/tables/User");
const Sports_1 = require("../../models/tables/Sports");
const Teaching_1 = require("../../models/tables/Teaching");
const FeedbackOne_1 = require("../../models/tables/FeedbackOne");
const FeedbackTwo_1 = require("../../models/tables/FeedbackTwo");
const FeedbackThree_1 = require("../../models/tables/FeedbackThree");
const FeedbackFour_1 = require("../../models/tables/FeedbackFour");
const FeedbackFive_1 = require("../../models/tables/FeedbackFive");
exports.countAllResponse = zod_1.default.object({
    institutionFormCount: zod_2.validNumber,
    researchFormCount: zod_2.validNumber,
    sportsFormCount: zod_2.validNumber,
    teachingFormCount: zod_2.validNumber,
    nonTeachingFormCount: zod_2.validNumber,
    feedbackOneFormCount: zod_2.validNumber,
    feedbackTwoFormCount: zod_2.validNumber,
    feedbackThreeFormCount: zod_2.validNumber,
    feedbackFourFormCount: zod_2.validNumber,
    studentsFormCount: zod_2.validNumber,
});
exports.lastDayResponse = zod_1.default.record(zod_2.validString, zod_2.validNumber);
exports.instituteCount = zod_1.default.record(zod_2.validString, zod_1.default.object({
    id: zod_2.validString,
    institution_form: zod_2.validNumber,
    research_form: zod_2.validNumber,
    sports_form: zod_2.validNumber,
    teaching_form: zod_2.validNumber,
    non_teaching_form: zod_2.validNumber,
    institution_name: zod_2.validString,
    students_form: zod_2.validNumber,
}));
exports.instituteCountArray = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.object({
        id: zod_2.validString,
        institution_form: zod_2.validNumber,
        research_form: zod_2.validNumber,
        sports_form: zod_2.validNumber,
        teaching_form: zod_2.validNumber,
        non_teaching_form: zod_2.validNumber,
        institution_name: zod_2.validString,
        students_form: zod_2.validNumber,
    })),
});
exports.groupCount = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.object({
        group: zod_1.default.enum(["A", "B", "C", "D", "E"]),
        formsFilled: zod_2.validNumber,
    })),
});
exports.getInstitutionData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(OutstandingInstitution_1.OutstandingInstitution)),
});
exports.getResultData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(Results_1.Results)),
});
exports.getUserData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(User_1.User)),
});
exports.getSportsData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(Sports_1.Sports)),
});
exports.getTeachingData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(Teaching_1.Teaching)),
});
exports.getFeedbackOneData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(FeedbackOne_1.FeedbackOne)),
});
exports.getFeedbackTwoData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(FeedbackTwo_1.FeedbackTwo)),
});
exports.getFeedbackThreeData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(FeedbackThree_1.FeedbackThree)),
});
exports.getFeedbackFourData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(FeedbackFour_1.FeedbackFour)),
});
exports.getFeedbackFiveData = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.instanceof(FeedbackFive_1.FeedbackFive)),
});
exports.SportsGirl = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.object({
        id: zod_2.validNumber,
        email_id: zod_2.validString,
        institution_name: zod_2.validString,
        nominee_ss_girl: zod_2.validString,
        nominee_ss_girl_sport: zod_2.validString,
        nominee_ss_girl_photo: zod_2.validString,
        nominee_ss_girl_supportings: zod_2.validString,
        isApprovedSportsGirl: zod_2.validBoolean,
        q_21: zod_2.validNumber,
        q_22: zod_2.validNumber,
        q_23: zod_2.validNumber,
        q_24: zod_2.validNumber,
        final_score: zod_2.validNumber,
    })),
});
exports.SportsBoy = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.object({
        id: zod_2.validNumber,
        email_id: zod_2.validString,
        institution_name: zod_2.validString,
        nominee_ss_boy: zod_2.validString,
        nominee_ss_boy_sport: zod_2.validString,
        nominee_ss_boy_photo: zod_2.validString,
        nominee_ss_boy_supportings: zod_2.validString,
        isApprovedSportsBoy: zod_2.validBoolean,
        q_25: zod_2.validNumber,
        q_26: zod_2.validNumber,
        q_27: zod_2.validNumber,
        q_28: zod_2.validNumber,
        final_score: zod_2.validNumber,
    })),
});
exports.Coach = zod_1.default.object({
    data: zod_1.default.array(zod_1.default.object({
        id: zod_2.validNumber,
        email_id: zod_2.validString,
        institution_name: zod_2.validString,
        nominee_inspiring_coach: zod_2.validString,
        nominee_coach_comments: zod_2.validString,
        nominee_coach_photo: zod_2.validString,
        nominee_coach_supportings: zod_2.validString,
        isApprovedCoach: zod_2.validBoolean,
        q_01: zod_2.validNumber,
        q_02: zod_2.validNumber,
        q_03: zod_2.validNumber,
        q_04: zod_2.validNumber,
        q_05: zod_2.validNumber,
        q_06: zod_2.validNumber,
        q_07: zod_2.validNumber,
        q_08: zod_2.validNumber,
        q_09: zod_2.validNumber,
        q_10: zod_2.validNumber,
        q_11: zod_2.validNumber,
        q_12: zod_2.validNumber,
        q_13: zod_2.validNumber,
        q_14: zod_2.validNumber,
        q_15: zod_2.validNumber,
        q_16: zod_2.validNumber,
        q_17: zod_2.validNumber,
        q_18: zod_2.validNumber,
        q_19: zod_2.validNumber,
        q_20: zod_2.validNumber,
        final_score: zod_2.validNumber,
    })),
});
exports.TeachingScore = zod_1.default.object({
    name: zod_2.validString,
    category: zod_2.validString,
    institute: zod_2.validString,
    scoreA: zod_2.validNumber,
    scoreB: zod_2.validNumber,
    scoreC: zod_2.validNumber,
    hoi_avg: zod_2.validNumber,
    ieac_avg: zod_2.validNumber,
    student_avg: zod_2.validNumber,
    peers_avg: zod_2.validNumber,
});
exports.NonTeachingScore = zod_1.default.object({
    name: zod_2.validString,
    category: zod_2.validString,
    institute: zod_2.validString,
    scoreA: zod_2.validNumber,
    scoreB: zod_2.validNumber,
    hoi_avg: zod_2.validNumber,
    ieac_avg: zod_2.validNumber,
    student_avg: zod_2.validNumber,
    peers_avg: zod_2.validNumber,
});
