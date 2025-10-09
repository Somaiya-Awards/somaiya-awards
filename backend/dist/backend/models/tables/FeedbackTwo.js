"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackTwo = void 0;
exports.default = FeedbackTwoInit;
const sequelize_1 = require("sequelize");
class FeedbackTwo extends sequelize_1.Model {
}
exports.FeedbackTwo = FeedbackTwo;
function FeedbackTwoInit(sequelize) {
    FeedbackTwo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        rater_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        institution_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        department_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        designation: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        somaiya_mail_id: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        contact_number: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        teacher_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        nomination_category: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_01: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_02: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_03: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_04: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_05: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_06: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_07: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_08: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_09: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nomination_reason: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    }, {
        sequelize,
        tableName: "FeedbackTwo",
    });
    return FeedbackTwo;
}
