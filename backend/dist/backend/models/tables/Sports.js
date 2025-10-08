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
exports.Sports = void 0;
exports.default = SportsInit;
var sequelize_1 = require("sequelize");
var Sports = /** @class */ (function (_super) {
    __extends(Sports, _super);
    function Sports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sports;
}(sequelize_1.Model));
exports.Sports = Sports;
function SportsInit(sequelize) {
    Sports.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_inspiring_coach: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_coach_comments: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        nominee_coach_photo: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_coach_supportings: {
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
        q_21: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_22: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_23: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_24: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        isApprovedCoach: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        nominee_ss_girl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_ss_girl_sport: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_ss_girl_photo: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_ss_girl_supportings: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        isApprovedSportsGirl: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        nominee_ss_boy: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_ss_boy_sport: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_ss_boy_photo: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nominee_ss_boy_supportings: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        q_25: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_26: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_27: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_28: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        isApprovedSportsBoy: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize: sequelize,
        modelName: "Sports",
    });
    return Sports;
}
