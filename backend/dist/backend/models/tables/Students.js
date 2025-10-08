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
exports.Students = void 0;
exports.default = StudentsInit;
var sequelize_1 = require("sequelize");
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Students;
}(sequelize_1.Model));
exports.Students = Students;
function StudentsInit(sequelize) {
    Students.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        student_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        students_class: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        course: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        institution_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        nomination_category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        recommendation_note: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        supportings: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        approved: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize: sequelize,
        modelName: "Students",
    });
    return Students;
}
