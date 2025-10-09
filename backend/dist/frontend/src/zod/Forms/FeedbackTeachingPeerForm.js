"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackTeachingPeerField = exports.feedTeacherCategory = void 0;
const zod_1 = __importDefault(require("zod"));
const zod_2 = require("../../../../backend/zod");
const __1 = require("..");
exports.feedTeacherCategory = [
    "Promising Teacher",
    "Excellence in Teaching",
];
exports.FeedbackTeachingPeerField = {
    rater_name: zod_2.validString,
    institution_name: zod_2.validString,
    department_name: zod_2.validString,
    designation: zod_2.validString,
    somaiya_mail_id: zod_2.somaiyaMail,
    contact_number: zod_2.phoneNumber,
    teacher_name: zod_2.validString,
    nomination_category: (0, zod_2.arrayChoice)(exports.feedTeacherCategory),
    q_01: (0, zod_2.arrayChoice)(__1.agreeList),
    q_02: (0, zod_2.arrayChoice)(__1.agreeList),
    q_03: (0, zod_2.arrayChoice)(__1.agreeList),
    q_04: (0, zod_2.arrayChoice)(__1.agreeList),
    q_05: (0, zod_2.arrayChoice)(__1.agreeList),
    q_06: (0, zod_2.arrayChoice)(__1.agreeList),
    q_07: (0, zod_2.arrayChoice)(__1.agreeList),
    q_08: (0, zod_2.arrayChoice)(__1.ratingList),
    q_09: (0, zod_2.arrayChoice)(__1.agreeList),
    nomination_reason: (0, zod_2.textArea)({ maxLength: 600 }),
};
const FeedbackTeachingPeerValidator = zod_1.default.object(exports.FeedbackTeachingPeerField);
exports.default = FeedbackTeachingPeerValidator;
