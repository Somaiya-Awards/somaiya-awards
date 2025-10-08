"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTeachingFeedbackFormField = exports.good = void 0;
var zod_1 = require("zod");
var zod_2 = require("../../../../backend/zod");
var __1 = require("..");
var SportsStarForm_1 = require("./SportsStarForm");
exports.good = [
    "Outstanding",
    "Very Good",
    "Good",
    "Average",
    "Poor",
];
exports.StudentTeachingFeedbackFormField = {
    email_id: zod_2.email,
    student_batch_year: zod_2.validYear,
    student_class_and_division: zod_2.validString,
    teacher_name: zod_2.validString,
    teacher_designation: zod_2.validString,
    teaching_subject: zod_2.validString,
    q_01: (0, zod_2.arrayChoice)(exports.good),
    q_02: (0, zod_2.arrayChoice)(exports.good),
    q_03: (0, zod_2.arrayChoice)(__1.options),
    q_04: (0, zod_2.arrayChoice)(__1.options),
    q_05: (0, zod_2.arrayChoice)(__1.options),
    q_06: (0, zod_2.arrayChoice)(exports.good),
    q_07: (0, zod_2.arrayChoice)(exports.good),
    q_08: (0, zod_2.arrayChoice)(__1.options),
    q_09: (0, zod_2.arrayChoice)(exports.good),
    q_10: (0, zod_2.arrayChoice)(["Yes", "No"]),
    q_11: (0, zod_2.arrayChoice)(exports.good),
    nominating_reasons: (0, zod_2.textArea)({ maxLength: 300 }),
};
var StudentTeachingFeedbackFormValidator = zod_1.default.object(SportsStarForm_1.SportsStarFormField);
exports.default = StudentTeachingFeedbackFormValidator;
