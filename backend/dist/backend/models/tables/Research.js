"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Research = void 0;
exports.default = ResearchInit;
const sequelize_1 = require("sequelize");
class Research extends sequelize_1.Model {
}
exports.Research = Research;
function ResearchInit(sequelize) {
    Research.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        faculty_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        designation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        tenure: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        org_articles_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        review_papers_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        letters_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        case_studies_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        books_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        chapters_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        presentations_international_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        presentation_national_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        international_seminar_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        national_seminar_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        international_workshops_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        national_workshops_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        completed_minorp_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        ongoing_minorp_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        completed_majorp_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        ongoing_majorp_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        completed_consultancy_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        ongoing_consultancy_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        revenue_from_projects: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        granted_patents_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        filed_patents_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        granted_copyrights_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        filed_copyrights_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        granted_industrial_designs_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        filed_industrial_designs_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        international_awards_won_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        national_awards_won_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        evidence_of_research: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        evidence_of_data_provided: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        confirmation_of_trueData: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "Research",
    });
    return Research;
}
