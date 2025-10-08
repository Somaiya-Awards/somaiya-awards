"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var zod_2 = require("../../zod");
var constants_1 = require("../../constants");
var __1 = require("..");
var HouseForm = zod_1.default.object({
    house_name: (0, zod_2.arrayChoice)(constants_1.Houses),
    // Academics (100 points)
    q_01: zod_2.validNumber,
    q_02: zod_2.validNumber,
    q_03: zod_2.validNumber,
    q_04: zod_2.validNumber,
    // Co-Curricular (100 points)
    q_05: zod_2.validNumber,
    q_06: zod_2.validNumber,
    q_07: zod_2.validNumber,
    // Sports (100 points)
    q_08: zod_2.validNumber,
    q_09: zod_2.validNumber,
    q_10: zod_2.validNumber,
    // Discipline & Behavior (50 points)
    q_11: zod_2.validNumber,
    q_12: zod_2.validNumber,
    // Leadership & Initiative (50 points)
    q_13: zod_2.validNumber,
    q_14: zod_2.validNumber,
    // Community Service (50 points)
    q_15: zod_2.validNumber,
    q_16: zod_2.validNumber,
    // House Spirit / Participation (50 points)
    q_17: zod_2.validNumber,
    q_18: zod_2.validNumber,
    proof_docs: __1.validString,
    approved: __1.validBoolean.optional(),
});
exports.default = HouseForm;
