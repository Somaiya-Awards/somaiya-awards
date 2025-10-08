"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsFormDataField = exports.studentAwardList = void 0;
var zod_1 = require("zod");
var zod_2 = require("../../../../backend/zod");
var constants_1 = require("../../../../backend/constants");
var SportsStarForm_1 = require("./SportsStarForm");
exports.studentAwardList = [
    "Somaiya Star -Girl",
    "Somaiya Star -Boy",
    "Somaiya Star Citizen",
    "Somaiya Green Star/ Green Force",
    "Somaiya Star Innovator",
];
exports.StudentsFormDataField = {
    email_id: zod_2.somaiyaMail,
    student_name: zod_2.validString,
    students_class: zod_2.validString,
    course: zod_2.validString,
    institution_name: (0, zod_2.arrayChoice)(constants_1.Institutes),
    nomination_category: (0, zod_2.arrayChoice)(exports.studentAwardList),
    recommendation_note: (0, zod_2.textArea)({ maxLength: 600 }),
    supportings: (0, zod_2.validFile)({ type: "pdf" }),
};
var StudentsFormDataValidator = zod_1.default.object(SportsStarForm_1.SportsStarFormField);
exports.default = StudentsFormDataValidator;
