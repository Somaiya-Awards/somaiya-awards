"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackFourForm = void 0;
var z = require("zod");
var __1 = require("..");
var zod_1 = require("../../../frontend/src/zod/");
var FeedbackTeachingPeerForm_1 = require("../../../frontend/src/zod/Forms/FeedbackTeachingPeerForm");
exports.FeedbackFourForm = z.object({
    rater_name: __1.validString,
    institute_name: __1.validString,
    department_name: __1.validString,
    designation: __1.validString,
    somaiya_mail_id: __1.somaiyaMail,
    contact_number: __1.phoneNumber,
    teacher_name: __1.validString,
    nomination_category: (0, __1.arrayChoice)(FeedbackTeachingPeerForm_1.feedTeacherCategory),
    q_01: (0, __1.arrayChoice)(zod_1.agreeList),
    q_02: (0, __1.arrayChoice)(zod_1.agreeList),
    q_03: (0, __1.arrayChoice)(zod_1.agreeList),
    q_04: (0, __1.arrayChoice)(zod_1.agreeList),
    q_05: (0, __1.arrayChoice)(zod_1.agreeList),
    q_06: (0, __1.arrayChoice)(zod_1.agreeList),
    q_07: (0, __1.arrayChoice)(zod_1.agreeList),
    q_08: (0, __1.arrayChoice)(zod_1.ratingList),
    q_09: (0, __1.arrayChoice)(zod_1.agreeList),
    nomination_reason: (0, __1.textArea)({ maxLength: 600 }),
});
