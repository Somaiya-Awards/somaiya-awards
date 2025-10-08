"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachingForm = void 0;
var z = require("zod");
var __1 = require("..");
var TeachingForm_1 = require("../../../frontend/src/zod/Forms/TeachingForm");
var constants_1 = require("../../constants");
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
