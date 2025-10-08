"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackFiveForm = void 0;
var z = require("zod");
var __1 = require("..");
exports.FeedbackFiveForm = z.object({
    rater_name: __1.validString,
    somaiya_mail_id: __1.somaiyaMail,
    institution_name: __1.institute,
    nominee_name: __1.validString,
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
});
