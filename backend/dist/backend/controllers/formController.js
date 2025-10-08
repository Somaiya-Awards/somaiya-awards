"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.submitForm_06 = exports.submitFeedback_05 = exports.submitFeedback_04 = exports.submitFeedback_03 = exports.submitFeedback_02 = exports.submitFeedback_01 = exports.submitForm_10 = exports.submitForm_05 = exports.submitForm_04 = exports.submitForm_03 = exports.submitForm_02 = exports.submitForm_01 = void 0;
var sequelize_1 = require("sequelize");
var OutstandingInstitution_1 = require("../zod/form/OutstandingInstitution");
var models_1 = require("../models");
var express_async_handler_1 = require("express-async-handler");
var logger_1 = require("../middleware/logger");
var _1 = require(".");
var Research_1 = require("../zod/form/Research");
var Sports_1 = require("../zod/form/Sports");
var models_2 = require("../models");
var Teaching_1 = require("../zod/form/Teaching");
var NonTeaching_1 = require("../zod/form/NonTeaching");
var Students_1 = require("../zod/form/Students");
var FeedbackOneForm_1 = require("../zod/form/FeedbackOneForm");
var FeedbackTwo_1 = require("../zod/form/FeedbackTwo");
var FeedbackThreeForm_1 = require("../zod/form/FeedbackThreeForm");
var FeedbackFour_1 = require("../zod/form/FeedbackFour");
var FeedbackFive_1 = require("../zod/form/FeedbackFive");
var zod_1 = require("zod");
var zod_2 = require("../zod");
//@desc handle institution form submission
//@route POST /forms/outstanding-institution
//@access private
exports.submitForm_01 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var supportings, response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                supportings = req.file.path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { supportings: supportings }), OutstandingInstitution_1.OutstandingInstitutionForm, res);
                return [4 /*yield*/, models_1.OutstandingInstitution.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.error("Failed to accept outstanding Institution form response by client ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Outstanding Institution form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle research form submission
//@route POST /forms/research
//@access private
exports.submitForm_02 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var files, evidence_of_research, evidence_of_data_provided, response, result;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                files = (0, _1.checkFiles)(req, res);
                evidence_of_research = (_a = files.evidence_of_research[0]) === null || _a === void 0 ? void 0 : _a.path;
                evidence_of_data_provided = (_b = files.evidence_of_data_provided[0]) === null || _b === void 0 ? void 0 : _b.path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { evidence_of_research: evidence_of_research, evidence_of_data_provided: evidence_of_data_provided }), Research_1.ResearchForm, res);
                return [4 /*yield*/, models_1.Research.create(response)];
            case 1:
                result = _c.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Failed to save Research form filled by ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Research form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle sports form submission
//@route POST /forms/sports
//@access private
exports.submitForm_03 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var files, nominee_coach_photo, nominee_coach_supportings, nominee_ss_girl_photo, nominee_ss_girl_supportings, nominee_ss_boy_photo, nominee_ss_boy_supportings, response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                files = (0, _1.checkFiles)(req, res);
                nominee_coach_photo = files.nominee_coach_photo[0].path;
                nominee_coach_supportings = files.nominee_coach_supportings[0].path;
                nominee_ss_girl_photo = files.nominee_ss_girl_photo[0].path;
                nominee_ss_girl_supportings = files.nominee_ss_girl_supportings[0].path;
                nominee_ss_boy_photo = files.nominee_ss_boy_photo[0].path;
                nominee_ss_boy_supportings = files.nominee_ss_boy_supportings[0].path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { nominee_ss_boy_supportings: nominee_ss_boy_supportings, nominee_ss_boy_photo: nominee_ss_boy_photo, nominee_ss_girl_photo: nominee_ss_girl_photo, nominee_ss_girl_supportings: nominee_ss_girl_supportings, nominee_coach_photo: nominee_coach_photo, nominee_coach_supportings: nominee_coach_supportings }), Sports_1.SportsForm, res);
                return [4 /*yield*/, models_1.Sports.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Failed to save sports form filled by ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Sports form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle teaching / faculty  form submission
//@route POST /forms/teaching
//@access private
exports.submitForm_04 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quick, _a, somaiya_mail_id, awards_category, existingTeachingEntry, files, data_evidence, profile_photograph, response, result;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                quick = zod_1.default.object({
                    somaiya_mail_id: zod_2.email,
                    awards_category: zod_2.validString,
                });
                _a = (0, _1.checkObject)(req.body, quick, res), somaiya_mail_id = _a.somaiya_mail_id, awards_category = _a.awards_category;
                return [4 /*yield*/, models_1.Teaching.findOne({
                        where: (_b = {},
                            _b[sequelize_1.Op.and] = [
                                { somaiya_mail_id: somaiya_mail_id },
                                { awards_category: awards_category },
                                models_2.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _b),
                    })];
            case 1:
                existingTeachingEntry = _c.sent();
                if (existingTeachingEntry) {
                    res.status(400).json({
                        message: "A duplicate entry already exists for this year, email, and awards category.",
                        submitted: false,
                        data: existingTeachingEntry,
                    });
                    return [2 /*return*/];
                }
                files = (0, _1.checkFiles)(req, res);
                data_evidence = files.data_evidence[0].path;
                profile_photograph = files.profile_photograph[0].path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { data_evidence: data_evidence, profile_photograph: profile_photograph }), Teaching_1.TeachingForm, res);
                return [4 /*yield*/, models_1.Teaching.create(response)];
            case 2:
                result = _c.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Failed to save teaching form filled by client ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Teaching form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle non-teaching/staff  form submission
//@route POST /forms/non-teaching
//@access private
exports.submitForm_05 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quick, _a, somaiya_mail_id, awards_category, existingNonTeachingEntry, files, proof_docs, nominee_photograph, response, result;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                quick = zod_1.default.object({
                    somaiya_mail_id: zod_2.email,
                    awards_category: zod_2.validString,
                });
                _a = (0, _1.checkObject)(req.body, quick, res), somaiya_mail_id = _a.somaiya_mail_id, awards_category = _a.awards_category;
                return [4 /*yield*/, models_1.NonTeaching.findOne({
                        where: (_b = {},
                            _b[sequelize_1.Op.and] = [
                                { somaiya_email_id: somaiya_mail_id },
                                { award_category: awards_category },
                                models_2.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _b),
                    })];
            case 1:
                existingNonTeachingEntry = _c.sent();
                if (existingNonTeachingEntry) {
                    res.status(400).json({
                        message: "A duplicate entry already exists for this year, email, and awards category.",
                        submitted: false,
                        data: existingNonTeachingEntry,
                    });
                    return [2 /*return*/];
                }
                files = (0, _1.checkFiles)(req, res);
                proof_docs = files.proof_docs[0].path;
                nominee_photograph = files.nominee_photograph[0].path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { proof_docs: proof_docs, nominee_photograph: nominee_photograph }), NonTeaching_1.NonTeachingForm, res);
                return [4 /*yield*/, models_1.NonTeaching.create(response)];
            case 2:
                result = _c.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Failed to save Non Teaching form filled by client ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Non Teaching form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle research form submission
//@route POST /forms/research
//@access private
exports.submitForm_10 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var supportings, response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                supportings = req.file.path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { supportings: supportings }), Students_1.StudentsForm, res);
                return [4 /*yield*/, models_1.Students.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Failed to save Non Teaching form filled by client ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Students form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle feedback 01 form submission
//@route POST /forms/feedback-01
//@access private
exports.submitFeedback_01 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = (0, _1.checkObject)(req.body, FeedbackOneForm_1.FeedbackOneForm, res);
                return [4 /*yield*/, models_1.FeedbackOne.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Feedback 01 form filled by client ".concat(req.ip, " was not accepted"));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Feedback 01 form successfully filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle feedback 02 form submission
//@route POST /forms/feedback-02
//@access private
exports.submitFeedback_02 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = (0, _1.checkObject)(req.body, FeedbackTwo_1.FeedbackTwoForm, res);
                return [4 /*yield*/, models_1.FeedbackTwo.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Feedback 02 form filled by client ".concat(req.ip, " was not accepted"));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Feedback 02 form successfully filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle feedback03 form submission
//@route POST /forms/feedback-03
//@access private
exports.submitFeedback_03 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = (0, _1.checkObject)(req.body, FeedbackThreeForm_1.FeedbackThreeForm, res);
                return [4 /*yield*/, models_1.FeedbackThree.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Feedback 03 form filled by client ".concat(req.ip, " was not accepted"));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Feedback 03 form successfully filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle feedback04 form submission
//@route POST /forms/feedback-04
//@access private
exports.submitFeedback_04 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = (0, _1.checkObject)(req.body, FeedbackFour_1.FeedbackFourForm, res);
                return [4 /*yield*/, models_1.FeedbackFour.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Feedback 04 form filled by client ".concat(req.ip, " was not accepted"));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Feedback 04 form successfully filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle feedback05 form submission
//@route POST /forms/feedback-05
//@access private
exports.submitFeedback_05 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = (0, _1.checkObject)(req.body, FeedbackFive_1.FeedbackFiveForm, res);
                return [4 /*yield*/, models_1.FeedbackFive.create(response)];
            case 1:
                result = _a.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Feedback 05 form filled by client ".concat(req.ip, " was not accepted"));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("Feedback 05 form successfully filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc handle non-teaching/staff  form submission
//@route POST /forms/non-teaching
//@access private
exports.submitForm_06 = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quick, _a, somaiya_mail_id, awards_category, existingNonTeachingEntry, files, proof_docs, response, result;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                quick = zod_1.default.object({
                    somaiya_mail_id: zod_2.email,
                    awards_category: zod_2.validString,
                });
                _a = (0, _1.checkObject)(req.body, quick, res), somaiya_mail_id = _a.somaiya_mail_id, awards_category = _a.awards_category;
                return [4 /*yield*/, models_1.NonTeaching.findOne({
                        where: (_b = {},
                            _b[sequelize_1.Op.and] = [
                                { somaiya_email_id: somaiya_mail_id },
                                { award_category: awards_category },
                                models_2.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _b),
                    })];
            case 1:
                existingNonTeachingEntry = _c.sent();
                if (existingNonTeachingEntry) {
                    res.status(400).json({
                        message: "A duplicate entry already exists for this year, email, and awards category.",
                        submitted: false,
                        data: existingNonTeachingEntry,
                    });
                    return [2 /*return*/];
                }
                files = (0, _1.checkFiles)(req, res);
                proof_docs = files.proof_docs[0].path;
                response = (0, _1.checkObject)(__assign(__assign({}, req.body), { proof_docs: proof_docs }), NonTeaching_1.NonTeachingForm, res);
                return [4 /*yield*/, models_1.House.create(response)];
            case 2:
                result = _c.sent();
                if (!result) {
                    // throw error
                    res.status(500);
                    logger_1.formLogger.info("Failed to save House form filled by client ".concat(req.ip));
                    throw new Error("Failed to accept your response");
                }
                logger_1.formLogger.info("House form filled by client ".concat(req.ip));
                res.status(200).json({
                    message: "Form submitted successfully",
                    submitted: true,
                });
                return [2 /*return*/];
        }
    });
}); });
