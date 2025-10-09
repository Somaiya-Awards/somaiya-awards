"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackFive = void 0;
exports.default = FeedbackFiveInit;
const sequelize_1 = require("sequelize");
class FeedbackFive extends sequelize_1.Model {
}
exports.FeedbackFive = FeedbackFive;
function FeedbackFiveInit(sequelize) {
    FeedbackFive.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        rater_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        somaiya_mail_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        q_01: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_02: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_03: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_04: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_05: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_06: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_07: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_08: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_09: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_10: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_11: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_12: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_13: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_14: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_15: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_16: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_17: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_18: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_19: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_20: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    }, {
        sequelize,
        tableName: "FeedbackFive",
    });
    return FeedbackFive;
}
