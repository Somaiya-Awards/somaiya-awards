"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
exports.default = StudentsInit;
const sequelize_1 = require("sequelize");
class Students extends sequelize_1.Model {
}
exports.Students = Students;
function StudentsInit(sequelize) {
    Students.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        student_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        students_class: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        course: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nomination_category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        recommendation_note: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        supportings: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "Students",
    });
    return Students;
}
