"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
exports.default = ResultsInit;
const sequelize_1 = require("sequelize");
class Results extends sequelize_1.Model {
}
exports.Results = Results;
function ResultsInit(sequelize) {
    Results.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        result: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Results",
    });
    return Results;
}
