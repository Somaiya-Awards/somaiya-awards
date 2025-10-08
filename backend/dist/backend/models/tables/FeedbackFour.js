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
exports.FeedbackFour = void 0;
exports.default = FeedbackFourInit;
var sequelize_1 = require("sequelize");
var FeedbackFour = /** @class */ (function (_super) {
    __extends(FeedbackFour, _super);
    function FeedbackFour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FeedbackFour;
}(sequelize_1.Model));
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
        sequelize: sequelize,
        tableName: "FeedbackFour",
    });
    return FeedbackFour;
}
