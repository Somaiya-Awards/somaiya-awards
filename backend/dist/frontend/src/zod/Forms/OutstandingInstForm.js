"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutstandingInstFormField = exports.OutstandingInstList = void 0;
const zod_1 = __importDefault(require("zod"));
const zod_2 = require("../../../../backend/zod");
exports.OutstandingInstList = [
    "Outstanding School",
    "Outstanding College",
];
const constants_1 = require("../../../../backend/constants");
exports.OutstandingInstFormField = {
    email_id: zod_2.email,
    nomination_category: (0, zod_2.arrayChoice)(exports.OutstandingInstList),
    institution_name: (0, zod_2.arrayChoice)(constants_1.Institutes),
    established_In: zod_2.validYear,
    head_of_institution: zod_2.validString,
    hoi_designation: zod_2.validString,
    hoi_joining_date: zod_2.validDate,
    somaiya_mail_id: zod_2.somaiyaMail,
    contact_number: zod_2.phoneNumber,
    q_01: (0, zod_2.textArea)({ minLength: 500, maxLength: 700 }),
    q_02: (0, zod_2.textArea)({ maxLength: 500 }),
    q_03: (0, zod_2.textArea)({ maxLength: 500 }),
    q_04: (0, zod_2.textArea)({ maxLength: 500 }),
    q_05: (0, zod_2.textArea)({ maxLength: 500 }),
    q_06: (0, zod_2.textArea)({ maxLength: 500 }),
    q_07: (0, zod_2.textArea)({ maxLength: 250 }),
    q_08: (0, zod_2.textArea)({ maxLength: 500 }),
    q_09: (0, zod_2.textArea)({ maxLength: 500 }),
    q_10: (0, zod_2.textArea)({ maxLength: 500 }),
    q_11: (0, zod_2.textArea)({ maxLength: 500 }),
    q_12: (0, zod_2.textArea)({ maxLength: 250 }),
    q_13: (0, zod_2.textArea)({ maxLength: 750 }),
    q_14: (0, zod_2.textArea)({ maxLength: 750 }),
    q_15: (0, zod_2.textArea)({ maxLength: 500 }),
    q_16: (0, zod_2.textArea)({ maxLength: 500 }),
    q_17: (0, zod_2.textArea)({ maxLength: 500 }),
    institution_ratings: (0, zod_2.arrayChoice)(["1", "2", "3", "4", "5"]),
    q_18: (0, zod_2.textArea)({ maxLength: 1000 }),
    q_19: (0, zod_2.textArea)({ maxLength: 300 }),
    q_20: (0, zod_2.textArea)({ maxLength: 500 }),
    q_21: (0, zod_2.textArea)({ maxLength: 750 }),
    q_22: (0, zod_2.textArea)({ maxLength: 500 }),
    q_23: (0, zod_2.textArea)({ maxLength: 1000 }),
    q_24: (0, zod_2.textArea)({ maxLength: 500 }),
    q_25: (0, zod_2.textArea)({ maxLength: 500 }),
    q_26: (0, zod_2.textArea)({ maxLength: 500 }),
    q_27: (0, zod_2.textArea)({ maxLength: 500 }),
    q_28: (0, zod_2.textArea)({ maxLength: 500 }),
    q_29: (0, zod_2.textArea)({ maxLength: 500 }),
    q_30: (0, zod_2.textArea)({ maxLength: 500 }),
    q_31: (0, zod_2.textArea)({ maxLength: 500 }),
    q_32: (0, zod_2.textArea)({ maxLength: 500 }),
    q_33: (0, zod_2.textArea)({ maxLength: 300 }),
    q_34: (0, zod_2.textArea)({ maxLength: 300 }),
    q_35: (0, zod_2.textArea)({ maxLength: 300 }),
    q_36: (0, zod_2.textArea)({ maxLength: 300 }),
    q_37: (0, zod_2.textArea)({ maxLength: 300 }),
    q_38: (0, zod_2.textArea)({ maxLength: 500 }),
    supportings: (0, zod_2.validFile)({ type: "pdf" }),
};
const OutstandingInstFormValidator = zod_1.default.object(exports.OutstandingInstFormField);
exports.default = OutstandingInstFormValidator;
