"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonTeaching = void 0;
exports.default = NonTeachingInit;
const sequelize_1 = require("sequelize");
class NonTeaching extends sequelize_1.Model {
}
exports.NonTeaching = NonTeaching;
function NonTeachingInit(sequelize) {
    NonTeaching.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        staff_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        award_category: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        institution_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        department: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        designation: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        appointment_date: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        somaiya_email_id: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        phone_number: { type: sequelize_1.DataTypes.STRING, allowNull: false },
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
        q_21: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_22: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_23: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_24: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        proof_docs: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        nominee_photograph: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        ieacApproved: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
        ieac_scoreA: { type: sequelize_1.DataTypes.DECIMAL(10, 5), allowNull: true },
        ieac_scoreB: { type: sequelize_1.DataTypes.DECIMAL(10, 5), allowNull: true },
        ieacApprovedFile: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        hr_approved: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    }, {
        sequelize,
        modelName: "NonTeaching",
    });
    return NonTeaching;
}
