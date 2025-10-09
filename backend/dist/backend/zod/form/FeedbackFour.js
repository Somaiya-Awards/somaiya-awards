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
exports.FeedbackFourForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
const zod_1 = require("../../../frontend/src/zod/");
const FeedbackTeachingPeerForm_1 = require("../../../frontend/src/zod/Forms/FeedbackTeachingPeerForm");
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
