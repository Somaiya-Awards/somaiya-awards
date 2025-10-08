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
exports.FeedbackOne = void 0;
exports.default = FeedbackOneInit;
var sequelize_1 = require("sequelize");
var FeedbackOne = /** @class */ (function (_super) {
    __extends(FeedbackOne, _super);
    function FeedbackOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FeedbackOne;
}(sequelize_1.Model));
exports.FeedbackOne = FeedbackOne;
function FeedbackOneInit(sequelize) {
    FeedbackOne.init({
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
        teacher_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        teacher_designation: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        teaching_subject: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_01: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_02: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_03: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_04: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_05: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_06: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_07: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_08: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        q_09: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_10: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        q_11: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        nominating_reasons: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    }, {
        sequelize: sequelize,
        tableName: "FeedbackOne",
    });
    return FeedbackOne;
}
