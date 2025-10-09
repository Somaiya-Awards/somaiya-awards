"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackThree = void 0;
exports.default = FeedbackThreeInit;
const sequelize_1 = require("sequelize");
class FeedbackThree extends sequelize_1.Model {
}
exports.FeedbackThree = FeedbackThree;
function FeedbackThreeInit(sequelize) {
    FeedbackThree.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        student_batch_year: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        student_class_and_division: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        employee_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        employee_designation: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_01: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_02: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_03: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_04: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_05: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        nomination_reason: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    }, {
        sequelize,
        tableName: "FeedbackThree",
    });
    return FeedbackThree;
}
