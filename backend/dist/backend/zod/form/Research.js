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
exports.ResearchForm = void 0;
const z = __importStar(require("zod"));
const __1 = require("..");
const constants_1 = require("../../constants");
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
