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
exports.OutstandingInstitutionForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
const constants_1 = require("../../constants");
const OutstandingInstForm_1 = require("../../../frontend/src/zod/Forms/OutstandingInstForm");
exports.OutstandingInstitutionForm = z.object({
    email_id: __1.email,
    nomination_category: (0, __1.arrayChoice)(OutstandingInstForm_1.OutstandingInstList),
    institution_name: (0, __1.arrayChoice)(constants_1.Institutes),
    established_In: __1.validYear,
    head_of_institution: __1.validString,
    hoi_designation: __1.validString,
    hoi_joining_date: __1.validDate,
    somaiya_mail_id: __1.somaiyaMail,
    contact_number: __1.phoneNumber,
    q_01: (0, __1.textArea)({ minLength: 500, maxLength: 700 }),
    q_02: (0, __1.textArea)({ maxLength: 500 }),
    q_03: (0, __1.textArea)({ maxLength: 500 }),
    q_04: (0, __1.textArea)({ maxLength: 500 }),
    q_05: (0, __1.textArea)({ maxLength: 500 }),
    q_06: (0, __1.textArea)({ maxLength: 500 }),
    q_07: (0, __1.textArea)({ maxLength: 250 }),
    q_08: (0, __1.textArea)({ maxLength: 500 }),
    q_09: (0, __1.textArea)({ maxLength: 500 }),
    q_10: (0, __1.textArea)({ maxLength: 500 }),
    q_11: (0, __1.textArea)({ maxLength: 500 }),
    q_12: (0, __1.textArea)({ maxLength: 250 }),
    q_13: (0, __1.textArea)({ maxLength: 750 }),
    q_14: (0, __1.textArea)({ maxLength: 750 }),
    q_15: (0, __1.textArea)({ maxLength: 500 }),
    q_16: (0, __1.textArea)({ maxLength: 500 }),
    q_17: (0, __1.textArea)({ maxLength: 500 }),
    institution_ratings: __1.validNumber,
    q_18: (0, __1.textArea)({ maxLength: 1000 }),
    q_19: (0, __1.textArea)({ maxLength: 300 }),
    q_20: (0, __1.textArea)({ maxLength: 500 }),
    q_21: (0, __1.textArea)({ maxLength: 750 }),
    q_22: (0, __1.textArea)({ maxLength: 500 }),
    q_23: (0, __1.textArea)({ maxLength: 1000 }),
    q_24: (0, __1.textArea)({ maxLength: 500 }),
    q_25: (0, __1.textArea)({ maxLength: 500 }),
    q_26: (0, __1.textArea)({ maxLength: 500 }),
    q_27: (0, __1.textArea)({ maxLength: 500 }),
    q_28: (0, __1.textArea)({ maxLength: 500 }),
    q_29: (0, __1.textArea)({ maxLength: 500 }),
    q_30: (0, __1.textArea)({ maxLength: 500 }),
    q_31: (0, __1.textArea)({ maxLength: 500 }),
    q_32: (0, __1.textArea)({ maxLength: 500 }),
    q_33: (0, __1.textArea)({ maxLength: 300 }),
    q_34: (0, __1.textArea)({ maxLength: 300 }),
    q_35: (0, __1.textArea)({ maxLength: 300 }),
    q_36: (0, __1.textArea)({ maxLength: 300 }),
    q_37: (0, __1.textArea)({ maxLength: 300 }),
    q_38: (0, __1.textArea)({ maxLength: 500 }),
    supportings: __1.validString,
    ieac_approved: __1.validBoolean.optional(),
    hr_approved: __1.validBoolean.optional(),
});
