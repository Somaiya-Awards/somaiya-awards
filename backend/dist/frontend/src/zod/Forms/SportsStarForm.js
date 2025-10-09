"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsStarFormField = void 0;
const zod_1 = __importDefault(require("zod"));
const zod_2 = require("../../../../backend/zod");
const constants_1 = require("../../../../backend/constants");
const __1 = require("..");
exports.SportsStarFormField = {
    email_id: zod_2.email,
    institution_name: (0, zod_2.arrayChoice)(constants_1.Institutes),
    nominee_inspiring_coach: zod_2.validString,
    nominee_coach_comments: (0, zod_2.textArea)({ maxLength: 500 }),
    nominee_coach_photo: (0, zod_2.validFile)({ type: "jpg" }),
    nominee_coach_supportings: (0, zod_2.validFile)({ type: "pdf" }),
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
    nominee_ss_girl: zod_2.validString,
    nominee_ss_girl_sport: zod_2.validString,
    nominee_ss_girl_photo: (0, zod_2.validFile)({ type: "jpg" }),
    nominee_ss_girl_supportings: (0, zod_2.validFile)({ type: "pdf" }),
    q_21: (0, zod_2.arrayChoice)(__1.options),
    q_22: (0, zod_2.arrayChoice)(__1.options),
    q_23: (0, zod_2.arrayChoice)(__1.options),
    q_24: (0, zod_2.arrayChoice)(__1.options),
    nominee_ss_boy: zod_2.validString,
    nominee_ss_boy_sport: zod_2.validString,
    nominee_ss_boy_photo: (0, zod_2.validFile)({ type: "jpg" }),
    nominee_ss_boy_supportings: (0, zod_2.validFile)({ type: "pdf" }),
    q_25: (0, zod_2.arrayChoice)(__1.options),
    q_26: (0, zod_2.arrayChoice)(__1.options),
    q_27: (0, zod_2.arrayChoice)(__1.options),
    q_28: (0, zod_2.arrayChoice)(__1.options),
};
const SportsStarFormValidator = zod_1.default.object(exports.SportsStarFormField);
exports.default = SportsStarFormValidator;
