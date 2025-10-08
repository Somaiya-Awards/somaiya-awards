"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackOneForm = void 0;
var z = require("zod");
var __1 = require("..");
var StudentTeachingFeedbackForm_1 = require("../../../frontend/src/zod/Forms/StudentTeachingFeedbackForm");
var zod_1 = require("../../../frontend/src/zod");
exports.FeedbackOneForm = z.object({
    email_id: __1.email,
    student_batch_year: __1.validYear,
    student_class_and_division: __1.validString,
    teacher_name: __1.validString,
    teacher_designation: __1.validString,
    teaching_subject: __1.validString,
    q_01: (0, __1.arrayChoice)(StudentTeachingFeedbackForm_1.good),
    q_02: (0, __1.arrayChoice)(StudentTeachingFeedbackForm_1.good),
    q_03: (0, __1.arrayChoice)(zod_1.options),
    q_04: (0, __1.arrayChoice)(zod_1.options),
    q_05: (0, __1.arrayChoice)(zod_1.options),
    q_06: (0, __1.arrayChoice)(StudentTeachingFeedbackForm_1.good),
    q_07: (0, __1.arrayChoice)(StudentTeachingFeedbackForm_1.good),
    q_08: (0, __1.arrayChoice)(zod_1.options),
    q_09: (0, __1.arrayChoice)(StudentTeachingFeedbackForm_1.good),
    q_10: (0, __1.arrayChoice)(["Yes", "No"]),
    q_11: (0, __1.arrayChoice)(StudentTeachingFeedbackForm_1.good),
    nominating_reasons: (0, __1.textArea)({ maxLength: 300 }),
});
