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
exports.TeachingForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
const TeachingForm_1 = require("../../../frontend/src/zod/Forms/TeachingForm");
const constants_1 = require("../../constants");
exports.TeachingForm = z.object({
    email_id: __1.email,
    faculty_name: __1.validString,
    awards_category: (0, __1.arrayChoice)(TeachingForm_1.awards),
    institution_name: (0, __1.arrayChoice)(constants_1.Institutes),
    department: __1.validString,
    designation: __1.validString,
    date_of_appointment: (0, __1.lastDate)(3),
    somaiya_mail_id: __1.somaiyaMail,
    contact_number: __1.phoneNumber,
    q_01: __1.validNumber,
    q_02: __1.validNumber,
    q_03: __1.validNumber,
    q_04: __1.validNumber,
    q_05: __1.validNumber,
    q_06: __1.validNumber,
    q_07: __1.validNumber,
    q_08: __1.validNumber,
    q_09: __1.validNumber,
    q_10: __1.validNumber,
    q_11: __1.validNumber,
    q_12: __1.validNumber,
    q_13: __1.validNumber,
    q_14: __1.validNumber,
    q_15: __1.validNumber,
    q_16: __1.validNumber,
    q_17: __1.validNumber,
    q_18: __1.validNumber,
    q_19: __1.validNumber,
    q_20: __1.validNumber,
    q_21: (0, __1.textArea)({ maxLength: 300 }),
    profile_photograph: __1.validString,
    ieacApproved: __1.validBoolean.optional(),
    ieacApprovedFile: __1.validString.optional().nullable(),
    ieac_scoreA: __1.validNumber.optional().nullable(),
    ieac_scoreB: __1.validNumber.optional().nullable(),
    ieac_scoreC: __1.validNumber.optional().nullable(),
    hr_approved: __1.validBoolean.optional(),
});
