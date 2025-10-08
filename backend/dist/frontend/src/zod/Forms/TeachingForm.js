"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachingFormField = exports.awards = void 0;
var zod_1 = require("../../../../backend/zod");
var constants_1 = require("../../../../backend/constants");
var zod_2 = require("zod");
var __1 = require("..");
exports.awards = [
    "Excellence in Teaching (more than 3 years of service)",
    "Promising Teacher of the year (2 to 3 years of service)",
];
exports.TeachingFormField = {
    email_id: zod_1.email,
    faculty_name: zod_1.validString,
    awards_category: (0, zod_1.arrayChoice)(exports.awards),
    institution_name: (0, zod_1.arrayChoice)(constants_1.Institutes),
    department: zod_1.validString,
    designation: zod_1.validString,
    date_of_appointment: (0, zod_1.lastDate)(3),
    somaiya_mail_id: zod_1.somaiyaMail,
    contact_number: zod_1.phoneNumber,
    q_01: (0, zod_1.arrayChoice)(__1.options),
    q_02: (0, zod_1.arrayChoice)(__1.options),
    q_03: (0, zod_1.arrayChoice)(__1.options),
    q_04: (0, zod_1.arrayChoice)(__1.options),
    q_05: (0, zod_1.arrayChoice)(__1.options),
    q_06: (0, zod_1.arrayChoice)(__1.options),
    q_07: (0, zod_1.arrayChoice)(__1.options),
    q_08: (0, zod_1.arrayChoice)(__1.options),
    q_09: (0, zod_1.arrayChoice)(__1.options),
    q_10: (0, zod_1.arrayChoice)(__1.options),
    q_11: (0, zod_1.arrayChoice)(__1.options),
    q_12: (0, zod_1.arrayChoice)(__1.options),
    q_13: (0, zod_1.arrayChoice)(__1.options),
    q_14: (0, zod_1.arrayChoice)(__1.options),
    q_15: (0, zod_1.arrayChoice)(__1.options),
    q_16: (0, zod_1.arrayChoice)(__1.options),
    q_17: (0, zod_1.arrayChoice)(__1.options),
    q_18: (0, zod_1.arrayChoice)(__1.options),
    q_19: (0, zod_1.arrayChoice)(__1.options),
    q_20: (0, zod_1.arrayChoice)(__1.options),
    q_21: (0, zod_1.textArea)({ maxLength: 300 }),
    data_evidence: (0, zod_1.validFile)({ type: "pdf" }),
    profile_photograph: (0, zod_1.validFile)({ type: "jpg" }),
};
var TeachingFormValidator = zod_2.default.object(exports.TeachingFormField);
exports.default = TeachingFormValidator;
