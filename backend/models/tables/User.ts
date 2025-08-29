import { Sequelize, DataTypes, Model } from "sequelize";
import { Role } from "../../types/role";

export class User extends Model {
    declare id: number;
    declare email_id: string;
    declare institution: string;
    declare password: string;
    declare role: Role | null;
}

export default function UserInit(sequelize: Sequelize) {
    User.init(
        {
            email_id: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                    isEmail: true,
                },
            },
            institution: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
}
