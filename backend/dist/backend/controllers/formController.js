"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm_06 = exports.submitFeedback_05 = exports.submitFeedback_04 = exports.submitFeedback_03 = exports.submitFeedback_02 = exports.submitFeedback_01 = exports.submitForm_10 = exports.submitForm_05 = exports.submitForm_04 = exports.submitForm_03 = exports.submitForm_02 = exports.submitForm_01 = void 0;
const sequelize_1 = require("sequelize");
const OutstandingInstitution_1 = require("../zod/form/OutstandingInstitution");
const models_1 = require("../models");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const logger_1 = require("../middleware/logger");
const _1 = require(".");
const Research_1 = require("../zod/form/Research");
const Sports_1 = require("../zod/form/Sports");
const models_2 = require("../models");
const Teaching_1 = require("../zod/form/Teaching");
const NonTeaching_1 = require("../zod/form/NonTeaching");
const Students_1 = require("../zod/form/Students");
const FeedbackOneForm_1 = require("../zod/form/FeedbackOneForm");
const FeedbackTwo_1 = require("../zod/form/FeedbackTwo");
const FeedbackThreeForm_1 = require("../zod/form/FeedbackThreeForm");
const FeedbackFour_1 = require("../zod/form/FeedbackFour");
const FeedbackFive_1 = require("../zod/form/FeedbackFive");
const zod_1 = __importDefault(require("zod"));
const zod_2 = require("../zod");
//@desc handle institution form submission
//@route POST /forms/outstanding-institution
//@access private
exports.submitForm_01 = (0, express_async_handler_1.default)(async (req, res) => {
    const supportings = req.file.path;
    const response = (0, _1.checkObject)({
        ...req.body,
        supportings,
    }, OutstandingInstitution_1.OutstandingInstitutionForm, res);
    const result = await models_1.OutstandingInstitution.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.error(`Failed to accept outstanding Institution form response by client ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Outstanding Institution form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle research form submission
//@route POST /forms/research
//@access private
exports.submitForm_02 = (0, express_async_handler_1.default)(async (req, res) => {
    const files = (0, _1.checkFiles)(req, res);
    const evidence_of_research = files.evidence_of_research[0]?.path;
    const evidence_of_data_provided = files.evidence_of_data_provided[0]?.path;
    const response = (0, _1.checkObject)({
        ...req.body,
        evidence_of_research,
        evidence_of_data_provided,
    }, Research_1.ResearchForm, res);
    const result = await models_1.Research.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Failed to save Research form filled by ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Research form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle sports form submission
//@route POST /forms/sports
//@access private
exports.submitForm_03 = (0, express_async_handler_1.default)(async (req, res) => {
    const files = (0, _1.checkFiles)(req, res);
    const nominee_coach_photo = files.nominee_coach_photo[0].path;
    const nominee_coach_supportings = files.nominee_coach_supportings[0].path;
    const nominee_ss_girl_photo = files.nominee_ss_girl_photo[0].path;
    const nominee_ss_girl_supportings = files.nominee_ss_girl_supportings[0].path;
    const nominee_ss_boy_photo = files.nominee_ss_boy_photo[0].path;
    const nominee_ss_boy_supportings = files.nominee_ss_boy_supportings[0].path;
    const response = (0, _1.checkObject)({
        ...req.body,
        nominee_ss_boy_supportings,
        nominee_ss_boy_photo,
        nominee_ss_girl_photo,
        nominee_ss_girl_supportings,
        nominee_coach_photo,
        nominee_coach_supportings,
    }, Sports_1.SportsForm, res);
    const result = await models_1.Sports.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Failed to save sports form filled by ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Sports form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle teaching / faculty  form submission
//@route POST /forms/teaching
//@access private
exports.submitForm_04 = (0, express_async_handler_1.default)(async (req, res) => {
    const quick = zod_1.default.object({
        somaiya_mail_id: zod_2.email,
        awards_category: zod_2.validString,
    });
    const { somaiya_mail_id, awards_category } = (0, _1.checkObject)(req.body, quick, res);
    // Check if an entry with the same year, email, and awards category already exists
    const existingTeachingEntry = await models_1.Teaching.findOne({
        where: {
            [sequelize_1.Op.and]: [
                { somaiya_mail_id: somaiya_mail_id },
                { awards_category: awards_category },
                models_2.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
            ],
        },
    });
    if (existingTeachingEntry) {
        res.status(400).json({
            message: "A duplicate entry already exists for this year, email, and awards category.",
            submitted: false,
            data: existingTeachingEntry,
        });
        return;
    }
    const files = (0, _1.checkFiles)(req, res);
    const data_evidence = files.data_evidence[0].path;
    const profile_photograph = files.profile_photograph[0].path;
    const response = (0, _1.checkObject)({ ...req.body, data_evidence, profile_photograph }, Teaching_1.TeachingForm, res);
    const result = await models_1.Teaching.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Failed to save teaching form filled by client ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Teaching form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle non-teaching/staff  form submission
//@route POST /forms/non-teaching
//@access private
exports.submitForm_05 = (0, express_async_handler_1.default)(async (req, res) => {
    let quick = zod_1.default.object({
        somaiya_mail_id: zod_2.email,
        awards_category: zod_2.validString,
    });
    const { somaiya_mail_id, awards_category } = (0, _1.checkObject)(req.body, quick, res);
    // Check if an entry with the same year, email, and awards category already exists
    const existingNonTeachingEntry = await models_1.NonTeaching.findOne({
        where: {
            [sequelize_1.Op.and]: [
                { somaiya_email_id: somaiya_mail_id },
                { award_category: awards_category },
                models_2.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
            ],
        },
    });
    if (existingNonTeachingEntry) {
        res.status(400).json({
            message: "A duplicate entry already exists for this year, email, and awards category.",
            submitted: false,
            data: existingNonTeachingEntry,
        });
        return;
    }
    const files = (0, _1.checkFiles)(req, res);
    const proof_docs = files.proof_docs[0].path;
    const nominee_photograph = files.nominee_photograph[0].path;
    const response = (0, _1.checkObject)({ ...req.body, proof_docs, nominee_photograph }, NonTeaching_1.NonTeachingForm, res);
    const result = await models_1.NonTeaching.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Failed to save Non Teaching form filled by client ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Non Teaching form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle research form submission
//@route POST /forms/research
//@access private
exports.submitForm_10 = (0, express_async_handler_1.default)(async (req, res) => {
    const supportings = req.file.path;
    const response = (0, _1.checkObject)({ ...req.body, supportings }, Students_1.StudentsForm, res);
    const result = await models_1.Students.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Failed to save Non Teaching form filled by client ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Students form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle feedback 01 form submission
//@route POST /forms/feedback-01
//@access private
exports.submitFeedback_01 = (0, express_async_handler_1.default)(async (req, res) => {
    const response = (0, _1.checkObject)(req.body, FeedbackOneForm_1.FeedbackOneForm, res);
    const result = await models_1.FeedbackOne.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Feedback 01 form filled by client ${req.ip} was not accepted`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Feedback 01 form successfully filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle feedback 02 form submission
//@route POST /forms/feedback-02
//@access private
exports.submitFeedback_02 = (0, express_async_handler_1.default)(async (req, res) => {
    const response = (0, _1.checkObject)(req.body, FeedbackTwo_1.FeedbackTwoForm, res);
    const result = await models_1.FeedbackTwo.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Feedback 02 form filled by client ${req.ip} was not accepted`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Feedback 02 form successfully filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle feedback03 form submission
//@route POST /forms/feedback-03
//@access private
exports.submitFeedback_03 = (0, express_async_handler_1.default)(async (req, res) => {
    const response = (0, _1.checkObject)(req.body, FeedbackThreeForm_1.FeedbackThreeForm, res);
    const result = await models_1.FeedbackThree.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Feedback 03 form filled by client ${req.ip} was not accepted`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Feedback 03 form successfully filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle feedback04 form submission
//@route POST /forms/feedback-04
//@access private
exports.submitFeedback_04 = (0, express_async_handler_1.default)(async (req, res) => {
    const response = (0, _1.checkObject)(req.body, FeedbackFour_1.FeedbackFourForm, res);
    const result = await models_1.FeedbackFour.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Feedback 04 form filled by client ${req.ip} was not accepted`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Feedback 04 form successfully filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle feedback05 form submission
//@route POST /forms/feedback-05
//@access private
exports.submitFeedback_05 = (0, express_async_handler_1.default)(async (req, res) => {
    const response = (0, _1.checkObject)(req.body, FeedbackFive_1.FeedbackFiveForm, res);
    const result = await models_1.FeedbackFive.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Feedback 05 form filled by client ${req.ip} was not accepted`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`Feedback 05 form successfully filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
//@desc handle non-teaching/staff  form submission
//@route POST /forms/non-teaching
//@access private
exports.submitForm_06 = (0, express_async_handler_1.default)(async (req, res) => {
    let quick = zod_1.default.object({
        somaiya_mail_id: zod_2.email,
        awards_category: zod_2.validString,
    });
    const { somaiya_mail_id, awards_category } = (0, _1.checkObject)(req.body, quick, res);
    // Check if an entry with the same year, email, and awards category already exists
    const existingNonTeachingEntry = await models_1.NonTeaching.findOne({
        where: {
            [sequelize_1.Op.and]: [
                { somaiya_email_id: somaiya_mail_id },
                { award_category: awards_category },
                models_2.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
            ],
        },
    });
    if (existingNonTeachingEntry) {
        res.status(400).json({
            message: "A duplicate entry already exists for this year, email, and awards category.",
            submitted: false,
            data: existingNonTeachingEntry,
        });
        return;
    }
    const files = (0, _1.checkFiles)(req, res);
    const proof_docs = files.proof_docs[0].path;
    const response = (0, _1.checkObject)({ ...req.body, proof_docs }, NonTeaching_1.NonTeachingForm, res);
    const result = await models_1.House.create(response);
    if (!result) {
        // throw error
        res.status(500);
        logger_1.formLogger.info(`Failed to save House form filled by client ${req.ip}`);
        throw new Error("Failed to accept your response");
    }
    logger_1.formLogger.info(`House form filled by client ${req.ip}`);
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true,
    });
});
