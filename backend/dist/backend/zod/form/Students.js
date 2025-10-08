"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsForm = void 0;
var z = require("zod");
var __1 = require("..");
var constants_1 = require("../../constants");
var StudentsFormData_1 = require("../../../frontend/src/zod/Forms/StudentsFormData");
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
