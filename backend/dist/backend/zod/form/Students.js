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
exports.StudentsForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
const constants_1 = require("../../constants");
const StudentsFormData_1 = require("../../../frontend/src/zod/Forms/StudentsFormData");
exports.StudentsForm = z.object({
    email_id: __1.somaiyaMail,
    student_name: __1.validString,
    students_class: __1.validString,
    course: __1.validString,
    institution_name: (0, __1.arrayChoice)(constants_1.Institutes),
    nomination_category: (0, __1.arrayChoice)(StudentsFormData_1.studentAwardList),
    recommendation_note: (0, __1.textArea)({ maxLength: 600 }),
    supportings: __1.validString,
    approved: __1.validBoolean.optional(),
});
