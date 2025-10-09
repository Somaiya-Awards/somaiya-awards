"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackOneForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
const StudentTeachingFeedbackForm_1 = require("../../../frontend/src/zod/Forms/StudentTeachingFeedbackForm");
const zod_1 = require("../../../frontend/src/zod");
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
