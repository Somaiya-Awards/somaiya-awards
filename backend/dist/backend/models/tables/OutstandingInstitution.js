"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutstandingInstitution = void 0;
exports.default = OutstandingInstitutionInit;
const sequelize_1 = require("sequelize");
class OutstandingInstitution extends sequelize_1.Model {
}
exports.OutstandingInstitution = OutstandingInstitution;
function OutstandingInstitutionInit(sequelize) {
    OutstandingInstitution.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nomination_category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        established_In: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        head_of_institution: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        hoi_designation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        hoi_joining_date: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
        },
        somaiya_mail_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        contact_number: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        q_01: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_02: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_03: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_04: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_05: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_06: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_07: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_08: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_09: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_10: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_11: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_12: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_13: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_14: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_15: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_16: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_17: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        institution_ratings: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_18: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_19: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_20: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_21: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_22: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_23: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_24: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_25: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_26: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_27: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_28: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_29: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_30: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_31: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_32: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_33: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_34: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_35: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_36: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_37: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        q_38: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        supportings: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        ieac_approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
        },
        hr_approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "OutstandingInstitution",
    });
    return OutstandingInstitution;
}
