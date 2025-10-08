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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNominatedNames = exports.sportsDataUpdater = exports.inspiringCoachDataHandler = exports.sportsStarBoyDataHandler = exports.sportsStarGirlDataHandler = void 0;
var express_async_handler_1 = require("express-async-handler");
var models_1 = require("../models");
var sequelize_1 = require("sequelize");
//@desc get sports star girl form data of current Year
//@route GET sports-admin/data/sports-star-girl
//@access PRIVATE
exports.sportsStarGirlDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, rawData, data, _i, rawData_1, response, object;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                rawData = _a.sent();
                data = [];
                for (_i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {
                    response = rawData_1[_i];
                    object = {
                        id: response.id,
                        email_id: response.email_id,
                        institute_name: response.institution_name,
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
                    data.push(object);
                }
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get sports star Boy form data of current Year
//@route GET sports-admin/data/sports-star-boy
//@access PRIVATE
exports.sportsStarBoyDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, rawData, data, _i, rawData_2, response, object;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                rawData = _a.sent();
                data = [];
                for (_i = 0, rawData_2 = rawData; _i < rawData_2.length; _i++) {
                    response = rawData_2[_i];
                    object = {
                        id: response.id,
                        email_id: response.email_id,
                        institute_name: response.institution_name,
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
                    data.push(object);
                }
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get inspiring coach/ Teacher sports form data of current Year
//@route GET sports-admin/data/inspiring-coach
//@access PRIVATE
// TODO: Do something about this
exports.inspiringCoachDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, rawData, feedbacks, data, _i, rawData_3, response, validFeedback, _a, feedbacks_1, feedback, feedbackScore, _b, validFeedback_1, answers, object;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 1:
                rawData = _c.sent();
                return [4 /*yield*/, models_1.FeedbackFive.findAll({
                        where: models_1.sequelize.where(models_1.sequelize.fn("YEAR", models_1.sequelize.col("createdAt")), currentYear),
                    })];
            case 2:
                feedbacks = _c.sent();
                data = [];
                for (_i = 0, rawData_3 = rawData; _i < rawData_3.length; _i++) {
                    response = rawData_3[_i];
                    validFeedback = [];
                    for (_a = 0, feedbacks_1 = feedbacks; _a < feedbacks_1.length; _a++) {
                        feedback = feedbacks_1[_a];
                        if (response.nominee_inspiring_coach.trim().toLowerCase() ===
                            feedback.nominee_name.trim().toLowerCase()) {
                            validFeedback.push(feedback);
                        }
                    }
                    feedbackScore = 0;
                    for (_b = 0, validFeedback_1 = validFeedback; _b < validFeedback_1.length; _b++) {
                        answers = validFeedback_1[_b];
                        feedbackScore =
                            feedbackScore +
                                (answers.q_01 +
                                    answers.q_02 +
                                    answers.q_03 +
                                    answers.q_04 +
                                    answers.q_05 +
                                    answers.q_06 +
                                    answers.q_07 +
                                    answers.q_08 +
                                    answers.q_09 +
                                    answers.q_10 +
                                    answers.q_11 +
                                    answers.q_12 +
                                    answers.q_13 +
                                    answers.q_14 +
                                    answers.q_15 +
                                    answers.q_16 +
                                    answers.q_17 +
                                    answers.q_18 +
                                    answers.q_19 +
                                    answers.q_20);
                    }
                    feedbackScore = feedbackScore / validFeedback.length;
                    object = {
                        id: response.id,
                        email_id: response.email_id,
                        institute_name: response.institution_name,
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
                        final_score: 0.4 *
                            (response.q_01 +
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
                                response.q_20),
                    };
                    data.push(object);
                }
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                    feedback: feedbacks,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc update recommendation of sports form nominees
//@route GET sports-admin/data/update
//@access PRIVATE
exports.sportsDataUpdater = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, applicationID, applicationForm, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, type = _a.type, applicationID = _a.applicationID;
                return [4 /*yield*/, models_1.Sports.findOne({
                        where: { id: applicationID },
                    })];
            case 1:
                applicationForm = _c.sent();
                if (!applicationForm) {
                    res.status(404);
                    throw new Error("Application not found");
                }
                _b = type;
                switch (_b) {
                    case "sports star boy": return [3 /*break*/, 2];
                    case "sports star girl": return [3 /*break*/, 4];
                    case "inspiring coach": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2: return [4 /*yield*/, applicationForm.update({ isApprovedSportsBoy: true })];
            case 3:
                _c.sent();
                return [3 /*break*/, 8];
            case 4: return [4 /*yield*/, applicationForm.update({ isApprovedSportsGirl: true })];
            case 5:
                _c.sent();
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, applicationForm.update({ isApprovedCoach: true })];
            case 7:
                _c.sent();
                return [3 /*break*/, 8];
            case 8:
                res.status(200).json({
                    message: "Sucessfully Updated",
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE
exports.getNominatedNames = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var names, institute_name, result, _i, result_1, feedback;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                names = [];
                institute_name = req.headers["x-institute-name"];
                return [4 /*yield*/, models_1.Sports.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                { institution_name: institute_name },
                                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _a),
                    })];
            case 1:
                result = _b.sent();
                for (_i = 0, result_1 = result; _i < result_1.length; _i++) {
                    feedback = result_1[_i];
                    names.push(feedback.nominee_inspiring_coach);
                }
                res.status(200).json({
                    data: names,
                });
                return [2 /*return*/];
        }
    });
}); });
