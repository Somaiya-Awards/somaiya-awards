"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getNonTeachingJurySummaryData = exports.getTeachingJurySummaryData = exports.getFormPreviewData = exports.getUsersData = exports.getResultsData = exports.resultsDataHandler = exports.getNonTeachingScoreCardData = exports.getTeachingScoreCardData = exports.getFeedback04Data = exports.getFeedback03Data = exports.getFeedback02Data = exports.getFeedback01Data = exports.getNonTeachingData = exports.getTeachingData = exports.getStudentsData = exports.getSportsCoachData = exports.getSportsBoyData = exports.getSportsGirlData = exports.getResearchData = exports.getInstitutionData = exports.getGroupWiseCount = exports.getInstitutionWiseCount = exports.getDaysCount = exports.getCounts = void 0;
var express_async_handler_1 = require("express-async-handler");
var uuid_1 = require("uuid");
var models_1 = require("../models");
var sequelize_1 = require("sequelize");
var constants_1 = require("../constants");
function textToScore(text) {
    var score = 0;
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
exports.getCounts = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conditions, countData;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                conditions = {
                    where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), new Date().getFullYear()),
                };
                _a = {};
                return [4 /*yield*/, models_1.OutstandingInstitution.count(conditions)];
            case 1:
                /** WARN: Explicitly Fail if something errors out */
                // institution Count
                _a.institutionFormCount = _b.sent();
                return [4 /*yield*/, models_1.Research.count(conditions)];
            case 2:
                // research Count
                _a.researchFormCount = _b.sent();
                return [4 /*yield*/, models_1.Sports.count(conditions)];
            case 3:
                // sports Count
                _a.sportsFormCount = _b.sent();
                return [4 /*yield*/, models_1.Teaching.count(conditions)];
            case 4:
                // teaching Count
                _a.teachingFormCount = _b.sent();
                return [4 /*yield*/, models_1.NonTeaching.count(conditions)];
            case 5:
                // non teaching Count
                _a.nonTeachingFormCount = _b.sent();
                return [4 /*yield*/, models_1.FeedbackOne.count(conditions)];
            case 6:
                // feedback1 count
                _a.feedbackOneFormCount = _b.sent();
                return [4 /*yield*/, models_1.FeedbackTwo.count(conditions)];
            case 7:
                // feedback2 count
                _a.feedbackTwoFormCount = _b.sent();
                return [4 /*yield*/, models_1.FeedbackThree.count(conditions)];
            case 8:
                // feedback3 count
                _a.feedbackThreeFormCount = _b.sent();
                return [4 /*yield*/, models_1.FeedbackFour.count(conditions)];
            case 9:
                // feedback4 count
                _a.feedbackFourFormCount = _b.sent();
                return [4 /*yield*/, models_1.Students.count(conditions)];
            case 10:
                countData = (
                // students form count
                _a.studentsFormCount = _b.sent(),
                    _a);
                res.status(200).json({ data: countData });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Returns the date, `days` days ago.
 * Eg: days = 15, returns the date 15 days ago
 */
function getLastDate(days) {
    var currentYear = new Date().getFullYear(), currentMonth = new Date().getMonth(), currentDate = new Date().getDay() - days;
    if (currentDate < 1) {
        currentMonth--; // year changes accordingly, but not date
    }
    return new Date(currentYear, currentMonth, currentDate);
}
function sequelLastDays(date) {
    var _a;
    return {
        where: models_1.sequelize.where(models_1.sequelize.fn("DATE", models_1.sequelize.col("createdAt")), (_a = {},
            _a[sequelize_1.Op.gte] = date.toISOString().split("T")[0],
            _a)),
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
exports.getDaysCount = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conditions, institutionData, researchData, sportsData, teachingData, nonTeachingData, feedbackOneData, feedbackTwoData, feedbackThreeData, feedbackFourData, studentsData, lists, data, _i, lists_1, list;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                conditions = sequelLastDays(getLastDate(15));
                return [4 /*yield*/, models_1.OutstandingInstitution.findAll(conditions)];
            case 1:
                institutionData = _a.sent();
                return [4 /*yield*/, models_1.Research.findAll(conditions)];
            case 2:
                researchData = _a.sent();
                return [4 /*yield*/, models_1.Sports.findAll(conditions)];
            case 3:
                sportsData = _a.sent();
                return [4 /*yield*/, models_1.Teaching.findAll(conditions)];
            case 4:
                teachingData = _a.sent();
                return [4 /*yield*/, models_1.NonTeaching.findAll(conditions)];
            case 5:
                nonTeachingData = _a.sent();
                return [4 /*yield*/, models_1.FeedbackOne.findAll(conditions)];
            case 6:
                feedbackOneData = _a.sent();
                return [4 /*yield*/, models_1.FeedbackTwo.findAll(conditions)];
            case 7:
                feedbackTwoData = _a.sent();
                return [4 /*yield*/, models_1.FeedbackThree.findAll(conditions)];
            case 8:
                feedbackThreeData = _a.sent();
                return [4 /*yield*/, models_1.FeedbackFour.findAll(conditions)];
            case 9:
                feedbackFourData = _a.sent();
                return [4 /*yield*/, models_1.Students.findAll(conditions)];
            case 10:
                studentsData = _a.sent();
                lists = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], institutionData, true), researchData, true), sportsData, true), teachingData, true), nonTeachingData, true), feedbackOneData, true), feedbackTwoData, true), feedbackThreeData, true), feedbackFourData, true), studentsData, true);
                data = {};
                for (_i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
                    list = lists_1[_i];
                    if (!data.hasOwnProperty(list.date)) {
                        data[list.date] = 0;
                    }
                    data[list.date] += list.formsFilled;
                }
                res.status(200).json({ data: data });
                return [2 /*return*/];
        }
    });
}); });
//@desc get institution wise all forms count
//@route GET admin/data/count/institution-wise
//@access Private
function sequelInstitute() {
    var _a;
    return {
        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), (_a = {},
            _a[sequelize_1.Op.eq] = new Date().getFullYear(),
            _a)),
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
exports.getInstitutionWiseCount = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conditions, institutionData, researchData, sportsData, teachingData, nonTeachingData, studentsData, countObject, _i, Institutes_1, i, _a, institutionData_1, data, institute, _b, researchData_1, data, institute, _c, sportsData_1, data, institute, _d, teachingData_1, data, institute, _e, nonTeachingData_1, data, institute, _f, studentsData_1, data, institute, array;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                conditions = sequelInstitute();
                return [4 /*yield*/, models_1.OutstandingInstitution.findAll(conditions)];
            case 1:
                institutionData = _g.sent();
                return [4 /*yield*/, models_1.Research.findAll(conditions)];
            case 2:
                researchData = _g.sent();
                return [4 /*yield*/, models_1.Sports.findAll(conditions)];
            case 3:
                sportsData = _g.sent();
                return [4 /*yield*/, models_1.Teaching.findAll(conditions)];
            case 4:
                teachingData = _g.sent();
                return [4 /*yield*/, models_1.NonTeaching.findAll(conditions)];
            case 5:
                nonTeachingData = _g.sent();
                return [4 /*yield*/, models_1.Students.findAll(conditions)];
            case 6:
                studentsData = _g.sent();
                countObject = {};
                for (_i = 0, Institutes_1 = constants_1.Institutes; _i < Institutes_1.length; _i++) {
                    i = Institutes_1[_i];
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
                for (_a = 0, institutionData_1 = institutionData; _a < institutionData_1.length; _a++) {
                    data = institutionData_1[_a];
                    institute = data.institution_name;
                    if (!countObject.hasOwnProperty(institute))
                        continue;
                    countObject[institute].institution_form += data.formsFilled;
                }
                // research form Counter
                for (_b = 0, researchData_1 = researchData; _b < researchData_1.length; _b++) {
                    data = researchData_1[_b];
                    institute = data.institution_name;
                    if (!countObject.hasOwnProperty(institute))
                        continue;
                    countObject[institute].research_form += data.formsFilled;
                }
                // sports form Counter
                for (_c = 0, sportsData_1 = sportsData; _c < sportsData_1.length; _c++) {
                    data = sportsData_1[_c];
                    institute = data.institution_name;
                    if (!countObject.hasOwnProperty(institute))
                        continue;
                    countObject[institute].sports_form += data.formsFilled;
                }
                // teaching form Counter
                for (_d = 0, teachingData_1 = teachingData; _d < teachingData_1.length; _d++) {
                    data = teachingData_1[_d];
                    institute = data.institution_name;
                    if (!countObject.hasOwnProperty(institute))
                        continue;
                    countObject[institute].teaching_form += data.formsFilled;
                }
                // non teaching form Counter
                for (_e = 0, nonTeachingData_1 = nonTeachingData; _e < nonTeachingData_1.length; _e++) {
                    data = nonTeachingData_1[_e];
                    institute = data.institution_name;
                    if (!countObject.hasOwnProperty(institute))
                        continue;
                    countObject[institute].non_teaching_form += data.formsFilled;
                }
                // students form counter
                for (_f = 0, studentsData_1 = studentsData; _f < studentsData_1.length; _f++) {
                    data = studentsData_1[_f];
                    institute = data.institution_name;
                    if (!countObject.hasOwnProperty(institute))
                        continue;
                    countObject[institute].students_form += data.formsFilled;
                }
                array = { data: [] };
                Object.keys(countObject).forEach(function (key) {
                    array.data.push(countObject[key]);
                });
                res.status(200).json(array);
                return [2 /*return*/];
        }
    });
}); });
function groupCountMethod(groupCount, groupIndex, count) {
    groupCount[groupIndex].formsFilled += count;
}
// @desc : group Wise Count
// @ route GET admin/data/count/group
// @access Private
// TODO: complete the controller
exports.getGroupWiseCount = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var conditions, institutionData, researchData, sportsData, teachingData, nonTeachingData, studentsData, groupCount, _i, institutionData_2, response, validGroups, _a, validGroups_1, group, _b, sportsData_2, response, validGroups, _c, validGroups_2, group, _d, researchData_2, response, validGroups, _e, validGroups_3, group, _f, teachingData_2, response, validGroups, _g, validGroups_4, group, _h, nonTeachingData_2, response, validGroups, _j, validGroups_5, group, _k, studentsData_2, response, validGroups, _l, validGroups_6, group;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                conditions = sequelInstitute();
                return [4 /*yield*/, models_1.OutstandingInstitution.findAll(conditions)];
            case 1:
                institutionData = _m.sent();
                return [4 /*yield*/, models_1.Research.findAll(conditions)];
            case 2:
                researchData = _m.sent();
                return [4 /*yield*/, models_1.Sports.findAll(conditions)];
            case 3:
                sportsData = _m.sent();
                return [4 /*yield*/, models_1.Teaching.findAll(conditions)];
            case 4:
                teachingData = _m.sent();
                return [4 /*yield*/, models_1.NonTeaching.findAll(conditions)];
            case 5:
                nonTeachingData = _m.sent();
                return [4 /*yield*/, models_1.Students.findAll(conditions)];
            case 6:
                studentsData = _m.sent();
                groupCount = {
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
                for (_i = 0, institutionData_2 = institutionData; _i < institutionData_2.length; _i++) {
                    response = institutionData_2[_i];
                    validGroups = constants_1.Groups[response.institution_name];
                    for (_a = 0, validGroups_1 = validGroups; _a < validGroups_1.length; _a++) {
                        group = validGroups_1[_a];
                        groupCountMethod(groupCount.data, group, response.formsFilled);
                    }
                }
                //sports
                for (_b = 0, sportsData_2 = sportsData; _b < sportsData_2.length; _b++) {
                    response = sportsData_2[_b];
                    validGroups = constants_1.Groups[response.institution_name];
                    for (_c = 0, validGroups_2 = validGroups; _c < validGroups_2.length; _c++) {
                        group = validGroups_2[_c];
                        groupCountMethod(groupCount.data, group, response.formsFilled);
                    }
                }
                //research
                for (_d = 0, researchData_2 = researchData; _d < researchData_2.length; _d++) {
                    response = researchData_2[_d];
                    validGroups = constants_1.Groups[response.institution_name];
                    for (_e = 0, validGroups_3 = validGroups; _e < validGroups_3.length; _e++) {
                        group = validGroups_3[_e];
                        groupCountMethod(groupCount.data, group, response.formsFilled);
                    }
                }
                //teaching
                for (_f = 0, teachingData_2 = teachingData; _f < teachingData_2.length; _f++) {
                    response = teachingData_2[_f];
                    validGroups = constants_1.Groups[response.institution_name];
                    for (_g = 0, validGroups_4 = validGroups; _g < validGroups_4.length; _g++) {
                        group = validGroups_4[_g];
                        groupCountMethod(groupCount.data, group, response.formsFilled);
                    }
                }
                //non teaching
                for (_h = 0, nonTeachingData_2 = nonTeachingData; _h < nonTeachingData_2.length; _h++) {
                    response = nonTeachingData_2[_h];
                    validGroups = constants_1.Groups[response.institution_name];
                    for (_j = 0, validGroups_5 = validGroups; _j < validGroups_5.length; _j++) {
                        group = validGroups_5[_j];
                        groupCountMethod(groupCount.data, group, response.formsFilled);
                    }
                }
                // students
                for (_k = 0, studentsData_2 = studentsData; _k < studentsData_2.length; _k++) {
                    response = studentsData_2[_k];
                    validGroups = constants_1.Groups[response.institution_name];
                    for (_l = 0, validGroups_6 = validGroups; _l < validGroups_6.length; _l++) {
                        group = validGroups_6[_l];
                        groupCountMethod(groupCount.data, group, response.formsFilled);
                    }
                }
                res.status(200).json(groupCount);
                return [2 /*return*/];
        }
    });
}); });
/**
 * RESPONSES SECTION
 */
//@desc get records of institution form of current Year
//@route admin/data/forms/outstanding-institution
//@access Private
exports.getInstitutionData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data, instituteData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.OutstandingInstitution.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                data = _a.sent();
                instituteData = {
                    data: data,
                };
                res.status(200).json(instituteData);
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of ieac approved research form of current Year
//@route admin/data/forms/research
//@access Private
exports.getResearchData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Research.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { approved: true },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of sports admin approved Sports Girl form of current Year
//@route admin/data/forms/sports-girl
//@access Private
exports.getSportsGirlData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, rawData, data, _i, rawData_1, response, object;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { isApprovedSportsGirl: true },
                            ],
                            _a),
                    })];
            case 1:
                rawData = _b.sent();
                data = {
                    data: [],
                };
                for (_i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {
                    response = rawData_1[_i];
                    object = {
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
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of sports admin approved Sports Boy form of current Year
//@route admin/data/forms/sports-boy
//@access Private
exports.getSportsBoyData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, rawData, data, _i, rawData_2, response, object;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { isApprovedSportsBoy: true },
                            ],
                            _a),
                    })];
            case 1:
                rawData = _b.sent();
                data = { data: [] };
                for (_i = 0, rawData_2 = rawData; _i < rawData_2.length; _i++) {
                    response = rawData_2[_i];
                    object = {
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
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of sports admin approved Sports Coach form of current Year
//@route admin/data/forms/sports-coach
//@access Private
exports.getSportsCoachData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, rawData, data, _i, rawData_3, response, object;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { isApprovedCoach: true },
                            ],
                            _a),
                    })];
            case 1:
                rawData = _b.sent();
                data = { data: [] };
                for (_i = 0, rawData_3 = rawData; _i < rawData_3.length; _i++) {
                    response = rawData_3[_i];
                    object = {
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
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of students admin approved form of current Year
//@route admin/data/forms/students
//@access Private
exports.getStudentsData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Students.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { approved: true },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records ieac approved teaching form of current Year
//@route admin/data/forms/teaching
//@access Private
exports.getTeachingData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Teaching.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { ieacApproved: true },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of ieac approved non teaching form of current Year
//@route admin/data/forms/non-teaching
//@access Private
exports.getNonTeachingData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.NonTeaching.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                { ieacApproved: true },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of feedback-01 form of current Year
//@route admin/data/forms/feedback-01
//@access Private
exports.getFeedback01Data = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.FeedbackOne.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records feedback-02 form of current Year
//@route admin/data/forms/feedback-02
//@access Private
exports.getFeedback02Data = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.FeedbackTwo.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of feedback-03 form of current Year
//@route admin/data/forms/feedback-03
//@access Private
exports.getFeedback03Data = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.FeedbackThree.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get records of feedback04 of current Year
//@route admin/data/forms/feedback-04
//@access Private
exports.getFeedback04Data = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.FeedbackFour.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Score Card Data API methods
 */
//@desc get necessary Data for Teaching Scorecard
//@route GET admin/data/teaching/scorecard/:id
//@acess Private
exports.getTeachingScoreCardData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, studentsValidFeedbacks, peersValidFeedbacks, hoiScore, applicationID, applicationData, facultyName, studentFeedbackData, peerFeedbackData, hoiAverageScore, ieacAverageScore, _i, studentFeedbackData_1, feedback, _a, peerFeedbackData_1, feedback, studentFeedbackScoreSum, peersFeedbackScoreSum, _b, studentsValidFeedbacks_1, feedback, _c, peersValidFeedbacks_1, feedback, studentsFeedbackAverageScore, peersFeedbackAverageScore, categoryOfAward, institute, scoreA, scoreB, scoreC;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                currentYear = new Date().getFullYear();
                studentsValidFeedbacks = [];
                peersValidFeedbacks = [];
                hoiScore = 0;
                applicationID = req.headers["x-application-id"];
                return [4 /*yield*/, models_1.Teaching.findOne({
                        where: { id: applicationID },
                    })];
            case 1:
                applicationData = _f.sent();
                if (!applicationData) {
                    res.status(404).json({ error: "Application Not Found" });
                    return [2 /*return*/];
                }
                facultyName = applicationData.faculty_name;
                return [4 /*yield*/, models_1.FeedbackOne.findAll({
                        where: (_d = {},
                            _d[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), facultyName),
                            ],
                            _d),
                    })];
            case 2:
                studentFeedbackData = _f.sent();
                return [4 /*yield*/, models_1.FeedbackTwo.findAll({
                        where: (_e = {},
                            _e[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), facultyName),
                            ],
                            _e),
                    })];
            case 3:
                peerFeedbackData = _f.sent();
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
                hoiAverageScore = Number((hoiScore / 20).toFixed(2));
                ieacAverageScore = Number(((Number(applicationData.ieac_scoreA) +
                    Number(applicationData.ieac_scoreB) +
                    Number(applicationData.ieac_scoreC)) /
                    3).toFixed(2));
                // filter feedback  current faculty
                for (_i = 0, studentFeedbackData_1 = studentFeedbackData; _i < studentFeedbackData_1.length; _i++) {
                    feedback = studentFeedbackData_1[_i];
                    studentsValidFeedbacks.push(feedback);
                }
                for (_a = 0, peerFeedbackData_1 = peerFeedbackData; _a < peerFeedbackData_1.length; _a++) {
                    feedback = peerFeedbackData_1[_a];
                    peersValidFeedbacks.push(feedback);
                }
                studentFeedbackScoreSum = 0;
                peersFeedbackScoreSum = 0;
                for (_b = 0, studentsValidFeedbacks_1 = studentsValidFeedbacks; _b < studentsValidFeedbacks_1.length; _b++) {
                    feedback = studentsValidFeedbacks_1[_b];
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
                for (_c = 0, peersValidFeedbacks_1 = peersValidFeedbacks; _c < peersValidFeedbacks_1.length; _c++) {
                    feedback = peersValidFeedbacks_1[_c];
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
                studentsFeedbackAverageScore = Number((studentFeedbackScoreSum /
                    (10 * studentsValidFeedbacks.length)).toFixed(2));
                peersFeedbackAverageScore = Number((peersFeedbackScoreSum / (peersValidFeedbacks.length * 9)).toFixed(2));
                categoryOfAward = applicationData.awards_category;
                institute = applicationData.institution_name;
                scoreA = Number(applicationData.ieac_scoreA);
                scoreB = Number(applicationData.ieac_scoreB);
                scoreC = Number(applicationData.ieac_scoreC);
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
                return [2 /*return*/];
        }
    });
}); });
//@desc get scorecard Data for non teaching entries
//@route GET admin/data/teaching/scorecard/:id
//@access Private
exports.getNonTeachingScoreCardData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, studentValidFeedbacks, peerValidFeedbacks, applicationID, applicationData, theGuy, studentFeedbacks, peersFeedback, _i, studentFeedbacks_1, feedback, _a, peersFeedback_1, feedback, hoi_avg, ieac_avg, studentsfeedbackSum, _b, studentValidFeedbacks_1, feedback, student_avg, peerFeedbackSum, _c, peerValidFeedbacks_1, feedback, peers_avg, name, category, institute, scoreA, scoreB;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                currentYear = new Date().getFullYear();
                studentValidFeedbacks = [];
                peerValidFeedbacks = [];
                applicationID = req.headers["x-application-id"];
                return [4 /*yield*/, models_1.NonTeaching.findOne({
                        where: { id: applicationID },
                    })];
            case 1:
                applicationData = _f.sent();
                if (!applicationData) {
                    res.status(404).json({ error: "Application Not Found" });
                    return [2 /*return*/];
                }
                theGuy = applicationData.staff_name;
                return [4 /*yield*/, models_1.FeedbackThree.findAll({
                        where: (_d = {},
                            _d[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), theGuy),
                            ],
                            _d),
                    })];
            case 2:
                studentFeedbacks = _f.sent();
                return [4 /*yield*/, models_1.FeedbackFour.findAll({
                        where: (_e = {},
                            _e[sequelize_1.Op.and] = [
                                models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                                models_1.sequelize.where(models_1.sequelize.fn("TRIM", models_1.sequelize.fn("LOWER", models_1.sequelize.col("teacher_name"))), theGuy),
                            ],
                            _e),
                    })];
            case 3:
                peersFeedback = _f.sent();
                // find feedbacks of requested staff
                for (_i = 0, studentFeedbacks_1 = studentFeedbacks; _i < studentFeedbacks_1.length; _i++) {
                    feedback = studentFeedbacks_1[_i];
                    studentValidFeedbacks.push(feedback);
                }
                for (_a = 0, peersFeedback_1 = peersFeedback; _a < peersFeedback_1.length; _a++) {
                    feedback = peersFeedback_1[_a];
                    peerValidFeedbacks.push(feedback);
                }
                hoi_avg = Number(((applicationData.q_01 +
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
                ieac_avg = Number(((Number(applicationData.ieac_scoreA) +
                    Number(applicationData.ieac_scoreB)) /
                    2).toFixed(2));
                studentsfeedbackSum = 0;
                for (_b = 0, studentValidFeedbacks_1 = studentValidFeedbacks; _b < studentValidFeedbacks_1.length; _b++) {
                    feedback = studentValidFeedbacks_1[_b];
                    studentsfeedbackSum =
                        studentsfeedbackSum +
                            textToScore(feedback.q_01) +
                            textToScore(feedback.q_02) +
                            textToScore(feedback.q_03) +
                            textToScore(feedback.q_04) +
                            textToScore(feedback.q_05);
                }
                student_avg = Number((studentsfeedbackSum / (5 * studentValidFeedbacks.length)).toFixed(2));
                peerFeedbackSum = 0;
                for (_c = 0, peerValidFeedbacks_1 = peerValidFeedbacks; _c < peerValidFeedbacks_1.length; _c++) {
                    feedback = peerValidFeedbacks_1[_c];
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
                peers_avg = Number((peerFeedbackSum / (8 * peerValidFeedbacks.length)).toFixed(2));
                name = applicationData.staff_name;
                category = applicationData.award_category;
                institute = applicationData.institution_name;
                scoreA = applicationData.ieac_scoreA;
                scoreB = applicationData.ieac_scoreB;
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
                return [2 /*return*/];
        }
    });
}); });
//@desc POST results file
//@route POST admin/data/announce-results
//@access Private
exports.resultsDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.Results.create({
                    result: req.file.path,
                })];
            case 1:
                _a.sent();
                res.status(200).json({});
                return [2 /*return*/];
        }
    });
}); });
//@desc POST results file
//@route POST admin/data/announce-results
//@access Private
exports.getResultsData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Results.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    data: result,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc GET results file
//@route GET admin/data/users
//@access Private
exports.getUsersData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.User.findAll({
                    attributes: {
                        exclude: ["password"], // why was this not excluded??
                    },
                })];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    data: result,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc GET Form Preview Data
//@route GET admin/data/preview/formType
//@access Private
exports.getFormPreviewData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formType, applicationID, application, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                formType = req.params.formtype;
                applicationID = req.headers["x-application-id"];
                application = null;
                _a = formType;
                switch (_a) {
                    case "outstanding-institution": return [3 /*break*/, 1];
                    case "research": return [3 /*break*/, 3];
                    case "sports-boy": return [3 /*break*/, 5];
                    case "sports-girl": return [3 /*break*/, 7];
                    case "sports-coach": return [3 /*break*/, 9];
                    case "students": return [3 /*break*/, 11];
                    case "teaching": return [3 /*break*/, 13];
                    case "non-teaching": return [3 /*break*/, 15];
                }
                return [3 /*break*/, 17];
            case 1: return [4 /*yield*/, models_1.OutstandingInstitution.findOne({
                    where: { id: applicationID },
                })];
            case 2:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 3: return [4 /*yield*/, models_1.Research.findOne({
                    where: { id: applicationID },
                })];
            case 4:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 5: return [4 /*yield*/, models_1.Sports.findOne({
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
                })];
            case 6:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 7: return [4 /*yield*/, models_1.Sports.findOne({
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
                })];
            case 8:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 9: return [4 /*yield*/, models_1.Sports.findOne({
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
                })];
            case 10:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 11: return [4 /*yield*/, models_1.Students.findOne({
                    where: { id: applicationID },
                })];
            case 12:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 13: return [4 /*yield*/, models_1.Teaching.findOne({
                    where: { id: applicationID },
                })];
            case 14:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 15: return [4 /*yield*/, models_1.NonTeaching.findOne({
                    where: { id: applicationID },
                })];
            case 16:
                application = _b.sent();
                return [3 /*break*/, 18];
            case 17: return [3 /*break*/, 18];
            case 18:
                res.status(200).json({
                    data: application,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc GET jury summary data
//@route GET admin/data/jury-summary/teaching
//@access Private
exports.getTeachingJurySummaryData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var promisingApprovedData, excellenceApprovedData, promisingNotApprovedData, excellenceNotApprovedData, currentYear, applications, StudentsFeedbacks, PeersFeedbacks, _i, applications_1, entry, faculty, ieacAverageScore, validStudentsFeedbacks, validPeersFeedbacks, _a, StudentsFeedbacks_1, feedback, _b, PeersFeedbacks_1, feedback, studentFeedbackScoreSum, peersFeedbackScoreSum, _c, StudentsFeedbacks_2, feedback, _d, validPeersFeedbacks_1, feedback, studentsFeedbackAverageScore, peersFeedbackAverageScore;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                promisingApprovedData = [];
                excellenceApprovedData = [];
                promisingNotApprovedData = [];
                excellenceNotApprovedData = [];
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Teaching.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                applications = _e.sent();
                return [4 /*yield*/, models_1.FeedbackOne.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 2:
                StudentsFeedbacks = _e.sent();
                return [4 /*yield*/, models_1.FeedbackTwo.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 3:
                PeersFeedbacks = _e.sent();
                // calculate scores and add data in respective arrays
                for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                    entry = applications_1[_i];
                    faculty = {};
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
                    ieacAverageScore = Number(((Number(entry.ieac_scoreA) +
                        Number(entry.ieac_scoreB) +
                        Number(entry.ieac_scoreC)) /
                        3).toFixed(2));
                    faculty.applicationScore =
                        (faculty.applicationScore + ieacAverageScore / 2) / 2;
                    faculty.applicationScore = 0.4 * faculty.applicationScore;
                    faculty.groups = constants_1.Groups[entry.institution_name];
                    faculty.ieacApprovedFile = entry.ieacApprovedFile;
                    faculty.feedbackScore = 0;
                    validStudentsFeedbacks = [];
                    validPeersFeedbacks = [];
                    for (_a = 0, StudentsFeedbacks_1 = StudentsFeedbacks; _a < StudentsFeedbacks_1.length; _a++) {
                        feedback = StudentsFeedbacks_1[_a];
                        validStudentsFeedbacks.push(feedback);
                    }
                    for (_b = 0, PeersFeedbacks_1 = PeersFeedbacks; _b < PeersFeedbacks_1.length; _b++) {
                        feedback = PeersFeedbacks_1[_b];
                        validPeersFeedbacks.push(feedback);
                    }
                    studentFeedbackScoreSum = 0;
                    peersFeedbackScoreSum = 0;
                    for (_c = 0, StudentsFeedbacks_2 = StudentsFeedbacks; _c < StudentsFeedbacks_2.length; _c++) {
                        feedback = StudentsFeedbacks_2[_c];
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
                    for (_d = 0, validPeersFeedbacks_1 = validPeersFeedbacks; _d < validPeersFeedbacks_1.length; _d++) {
                        feedback = validPeersFeedbacks_1[_d];
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
                    studentsFeedbackAverageScore = Number((studentFeedbackScoreSum /
                        (10 * validStudentsFeedbacks.length)).toFixed(2));
                    peersFeedbackAverageScore = Number((peersFeedbackScoreSum /
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
                return [2 /*return*/];
        }
    });
}); });
//@desc GET jury summary data
//@route GET admin/data/jury-summary/non-teaching
//@access Private
exports.getNonTeachingJurySummaryData = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var array01, array001, array02, array002, array03, array003, array04, array004, array05, array005, currentYear, applications, studentsFeedbacks, peersFeedbacks, _i, applications_2, entry, employee, ieac_avg, studentsValidFeedbacks, peersValidFeedbacks, _a, studentsFeedbacks_1, feedback, _b, peersFeedbacks_1, feedback, studentsfeedbackSum, _c, studentsValidFeedbacks_2, feedback, peerFeedbackSum, _d, peersValidFeedbacks_2, feedback, student_avg, peers_avg;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                array01 = [];
                array001 = [];
                array02 = [];
                array002 = [];
                array03 = [];
                array003 = [];
                array04 = [];
                array004 = [];
                array05 = [];
                array005 = [];
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.NonTeaching.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                applications = _e.sent();
                return [4 /*yield*/, models_1.FeedbackThree.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 2:
                studentsFeedbacks = _e.sent();
                return [4 /*yield*/, models_1.FeedbackFour.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 3:
                peersFeedbacks = _e.sent();
                // calculate scores and add entry in respective category
                for (_i = 0, applications_2 = applications; _i < applications_2.length; _i++) {
                    entry = applications_2[_i];
                    employee = {};
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
                    ieac_avg = Number(((Number(entry.ieac_scoreA) + Number(entry.ieac_scoreB)) /
                        2).toFixed(2));
                    employee.applicationScore =
                        (employee.applicationScore + ieac_avg / 2) / 2;
                    employee.applicationScore = 0.4 * employee.applicationScore;
                    employee.feedbackScore = 0;
                    employee.totalScore = 0;
                    employee.ieacApprovedFile = entry.ieacApprovedFile;
                    studentsValidFeedbacks = [];
                    peersValidFeedbacks = [];
                    for (_a = 0, studentsFeedbacks_1 = studentsFeedbacks; _a < studentsFeedbacks_1.length; _a++) {
                        feedback = studentsFeedbacks_1[_a];
                        if (entry.staff_name.trim().toLowerCase() ===
                            feedback.employee_name.trim().toLowerCase()) {
                            studentsValidFeedbacks.push(feedback);
                        }
                    }
                    for (_b = 0, peersFeedbacks_1 = peersFeedbacks; _b < peersFeedbacks_1.length; _b++) {
                        feedback = peersFeedbacks_1[_b];
                        if (entry.staff_name.trim().toLowerCase() ===
                            feedback.nominee_name.trim().toLowerCase()) {
                            peersValidFeedbacks.push(feedback);
                        }
                    }
                    studentsfeedbackSum = 0;
                    for (_c = 0, studentsValidFeedbacks_2 = studentsValidFeedbacks; _c < studentsValidFeedbacks_2.length; _c++) {
                        feedback = studentsValidFeedbacks_2[_c];
                        studentsfeedbackSum =
                            studentsfeedbackSum +
                                textToScore(feedback.q_01) +
                                textToScore(feedback.q_02) +
                                textToScore(feedback.q_03) +
                                textToScore(feedback.q_04) +
                                textToScore(feedback.q_05);
                    }
                    peerFeedbackSum = 0;
                    for (_d = 0, peersValidFeedbacks_2 = peersValidFeedbacks; _d < peersValidFeedbacks_2.length; _d++) {
                        feedback = peersValidFeedbacks_2[_d];
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
                    student_avg = Number((studentsfeedbackSum /
                        (5 * studentsValidFeedbacks.length)).toFixed(2));
                    peers_avg = Number((peerFeedbackSum / (8 * peersValidFeedbacks.length)).toFixed(2));
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
                return [2 /*return*/];
        }
    });
}); });
//@desc Delete user
//@route Delete admin/data/delete-user
//@access Private
exports.deleteUser = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.body.userId;
                if (!userId) {
                    res.status(400).json({ error: "Missing userId in the request body" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, models_1.User.destroy({
                        where: { id: userId },
                    })];
            case 1:
                _a.sent();
                res.status(200).json({});
                return [2 /*return*/];
        }
    });
}); });
