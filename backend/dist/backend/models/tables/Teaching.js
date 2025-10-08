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
exports.Teaching = void 0;
exports.default = TeachingInit;
var sequelize_1 = require("sequelize");
var Teaching = /** @class */ (function (_super) {
    __extends(Teaching, _super);
    function Teaching() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teaching;
}(sequelize_1.Model));
exports.Teaching = Teaching;
function TeachingInit(sequelize) {
    Teaching.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        faculty_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        awards_category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        designation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        date_of_appointment: {
            type: sequelize_1.DataTypes.STRING,
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
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_02: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_03: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_04: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_05: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_06: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_07: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_08: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_09: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_10: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_11: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_12: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_13: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_14: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_15: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_16: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_17: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_18: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_19: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_20: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        q_21: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        data_evidence: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        profile_photograph: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        ieacApproved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ieacApprovedFile: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        ieac_scoreA: {
            type: sequelize_1.DataTypes.DECIMAL(10, 5),
            allowNull: true,
        },
        ieac_scoreB: {
            type: sequelize_1.DataTypes.DECIMAL(10, 5),
            allowNull: true,
        },
        ieac_scoreC: {
            type: sequelize_1.DataTypes.DECIMAL(10, 5),
            allowNull: true,
        },
        hr_approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize: sequelize,
        modelName: "Teaching",
    });
    return Teaching;
}
