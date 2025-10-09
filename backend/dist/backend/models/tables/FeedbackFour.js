"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackFour = void 0;
exports.default = FeedbackFourInit;
const sequelize_1 = require("sequelize");
class FeedbackFour extends sequelize_1.Model {
}
exports.FeedbackFour = FeedbackFour;
function FeedbackFourInit(sequelize) {
    FeedbackFour.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        rater_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        institution_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        department: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        designation: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        somaiya_mail_id: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        contact_no: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        nominee_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        category: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_01: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_02: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_03: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_04: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_05: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_06: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_07: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_08: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        nomination_reason: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    }, {
        sequelize,
        tableName: "FeedbackFour",
    });
    return FeedbackFour;
}
