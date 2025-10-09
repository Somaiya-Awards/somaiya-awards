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
exports.SportsForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
exports.SportsForm = z.object({
    email_id: __1.email,
    institution_name: __1.validString,
    nominee_inspiring_coach: __1.validString,
    nominee_coach_comments: __1.validString,
    nominee_coach_photo: __1.validString,
    nominee_coach_supportings: __1.validString,
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
    isApprovedCoach: __1.validBoolean.optional(),
    nominee_ss_girl: __1.validString,
    nominee_ss_girl_sport: __1.validString,
    nominee_ss_girl_photo: __1.validString,
    nominee_ss_girl_supportings: __1.validString,
    q_21: __1.validNumber,
    q_22: __1.validNumber,
    q_23: __1.validNumber,
    q_24: __1.validNumber,
    isApprovedSportsGirl: __1.validBoolean.optional(),
    nominee_ss_boy: __1.validString,
    nominee_ss_boy_sport: __1.validString,
    nominee_ss_boy_photo: __1.validString,
    nominee_ss_boy_supportings: __1.validString,
    q_25: __1.validNumber,
    q_26: __1.validNumber,
    q_27: __1.validNumber,
    q_28: __1.validNumber,
    isApprovedSportsBoy: __1.validBoolean.optional(),
});
