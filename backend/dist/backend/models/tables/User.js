"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.default = UserInit;
const sequelize_1 = require("sequelize");
const role_1 = require("../../types/role");
class User extends sequelize_1.Model {
}
exports.User = User;
function UserInit(sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        institution: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: sequelize_1.DataTypes.ENUM(role_1.Role.Admin, role_1.Role.Hoi, role_1.Role.Ieac, role_1.Role.Peer, role_1.Role.ResearchAdmin, role_1.Role.SportsAdmin, role_1.Role.Student, role_1.Role.StudentAdmin),
        },
    }, {
        sequelize,
        modelName: "User",
    });
    return User;
}
