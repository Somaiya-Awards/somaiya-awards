"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackThreeForm = void 0;
var z = require("zod");
var __1 = require("..");
var zod_1 = require("../../../frontend/src/zod");
exports.FeedbackThreeForm = z.object({
    email_id: __1.email,
    student_batch_year: __1.validDate,
    student_class_and_division: __1.validString,
    employee_name: __1.validString,
    employee_designation: __1.validString,
    q_01: (0, __1.arrayChoice)(zod_1.agreeList),
    q_02: (0, __1.arrayChoice)(zod_1.agreeList),
    q_03: (0, __1.arrayChoice)(zod_1.agreeList),
    q_04: (0, __1.arrayChoice)(zod_1.agreeList),
    q_05: (0, __1.arrayChoice)(zod_1.agreeList),
    nomination_reason: (0, __1.textArea)({ maxLength: 300 }),
});
