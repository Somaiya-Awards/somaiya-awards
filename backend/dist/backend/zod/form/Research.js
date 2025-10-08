"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchForm = void 0;
var z = require("zod");
var __1 = require("..");
var constants_1 = require("../../constants");
exports.ResearchForm = z.object({
    faculty_name: __1.validString,
    designation: __1.validString,
    institution_name: (0, __1.arrayChoice)(constants_1.Institutes),
    department: __1.validString,
    tenure: __1.validString,
    org_articles_count: __1.validNumber,
    review_papers_count: __1.validNumber,
    letters_count: __1.validNumber,
    case_studies_count: __1.validNumber,
    books_count: __1.validNumber,
    chapters_count: __1.validNumber,
    presentations_international_count: __1.validNumber,
    presentation_national_count: __1.validNumber,
    international_seminar_count: __1.validNumber,
    national_seminar_count: __1.validNumber,
    international_workshops_count: __1.validNumber,
    national_workshops_count: __1.validNumber,
    completed_minorp_count: __1.validNumber,
    ongoing_minorp_count: __1.validNumber,
    completed_majorp_count: __1.validNumber,
    ongoing_majorp_count: __1.validNumber,
    completed_consultancy_count: __1.validNumber,
    ongoing_consultancy_count: __1.validNumber,
    revenue_from_projects: __1.validNumber,
    granted_patents_count: __1.validNumber,
    filed_patents_count: __1.validNumber,
    granted_copyrights_count: __1.validNumber,
    filed_copyrights_count: __1.validNumber,
    granted_industrial_designs_count: __1.validNumber,
    filed_industrial_designs_count: __1.validNumber,
    international_awards_won_count: __1.validNumber,
    national_awards_won_count: __1.validNumber,
    evidence_of_research: __1.validString,
    evidence_of_data_provided: __1.validString,
    confirmation_of_trueData: __1.validString.optional(),
    approved: __1.validBoolean.optional(),
});
