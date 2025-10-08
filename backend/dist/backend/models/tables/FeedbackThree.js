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
exports.FeedbackThree = void 0;
exports.default = FeedbackThreeInit;
var sequelize_1 = require("sequelize");
var FeedbackThree = /** @class */ (function (_super) {
    __extends(FeedbackThree, _super);
    function FeedbackThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FeedbackThree;
}(sequelize_1.Model));
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
        sequelize: sequelize,
        tableName: "FeedbackThree",
    });
    return FeedbackThree;
}
