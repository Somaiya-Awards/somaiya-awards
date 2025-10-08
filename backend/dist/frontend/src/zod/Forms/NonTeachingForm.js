"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonTeachingField = exports.NonTeachingAwardList = void 0;
var zod_1 = require("zod");
var zod_2 = require("../../../../backend/zod");
var __1 = require("..");
exports.NonTeachingAwardList = [
    "Outstanding Employee - Institute (More than 3 years of Service)",
    "Promising Employee - Institute (2 to 3 years of Service)",
    "Outstanding Employee - Somaiya Trust",
    "Outstanding Employee - Somaiya Vidyavihar University",
    "Promising Employee - Somaiya Trust",
    "Promising Employee - Somaiya Vidyavihar University",
    "Outstanding Employee - K. J. Somaiya Hospital",
    "Promising Employee - K. J. Somaiya Hospital",
];
exports.NonTeachingField = {
    email_id: zod_2.email,
    staff_name: zod_2.validString,
    award_category: (0, zod_2.arrayChoice)(exports.NonTeachingAwardList),
    institution_name: zod_2.institute,
    department: zod_2.validString,
    designation: zod_2.validString,
    appointment_date: (0, zod_2.lastDate)(3),
    somaiya_email_id: zod_2.somaiyaMail,
    phone_number: zod_2.phoneNumber,
    q_01: (0, zod_2.arrayChoice)(__1.options),
    q_02: (0, zod_2.arrayChoice)(__1.options),
    q_03: (0, zod_2.arrayChoice)(__1.options),
    q_04: (0, zod_2.arrayChoice)(__1.options),
    q_05: (0, zod_2.arrayChoice)(__1.options),
    q_06: (0, zod_2.arrayChoice)(__1.options),
    q_07: (0, zod_2.arrayChoice)(__1.options),
    q_08: (0, zod_2.arrayChoice)(__1.options),
    q_09: (0, zod_2.arrayChoice)(__1.options),
    q_10: (0, zod_2.arrayChoice)(__1.options),
    q_11: (0, zod_2.arrayChoice)(__1.options),
    q_12: (0, zod_2.arrayChoice)(__1.options),
    q_13: (0, zod_2.arrayChoice)(__1.options),
    q_14: (0, zod_2.arrayChoice)(__1.options),
    q_15: (0, zod_2.arrayChoice)(__1.options),
    q_16: (0, zod_2.arrayChoice)(__1.options),
    q_17: (0, zod_2.arrayChoice)(__1.options),
    q_18: (0, zod_2.arrayChoice)(__1.options),
    q_19: (0, zod_2.arrayChoice)(__1.options),
    q_20: (0, zod_2.arrayChoice)(__1.options),
    q_21: (0, zod_2.arrayChoice)(__1.options),
    q_22: (0, zod_2.arrayChoice)(__1.options),
    q_23: (0, zod_2.arrayChoice)(__1.options),
    q_24: (0, zod_2.arrayChoice)(__1.options),
    proof_docs: (0, zod_2.validFile)({ type: "pdf" }),
    nominee_photograph: (0, zod_2.validFile)({ type: "jpg" }),
};
var NonTeachingValidator = zod_1.default.object(exports.NonTeachingField);
exports.default = NonTeachingValidator;
