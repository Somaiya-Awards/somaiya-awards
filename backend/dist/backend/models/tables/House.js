"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
exports.default = HouseInit;
const sequelize_1 = require("sequelize");
class House extends sequelize_1.Model {
}
exports.House = House;
function HouseInit(sequelize) {
    House.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        house_name: {
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
        proof_docs: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "House",
    });
    return House;
}
