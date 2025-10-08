"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Research = void 0;
exports.default = ResearchInit;
var sequelize_1 = require("sequelize");
var Research = /** @class */ (function (_super) {
    __extends(Research, _super);
    function Research() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Research;
}(sequelize_1.Model));
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
        sequelize: sequelize,
        modelName: "Research",
    });
    return Research;
}
