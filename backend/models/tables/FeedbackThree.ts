import { Sequelize, DataTypes, Model } from "sequelize";

export class FeedbackThree extends Model {
    declare id: number;
    declare email_id: string;
    declare student_batch_year: string;
    declare student_class_and_division: string;
    declare employee_name: string;
    declare employee_designation: string;
    declare q_01: string;
    declare q_02: string;
    declare q_03: string;
    declare q_04: string;
    declare q_05: string;
    declare nomination_reason: string;
}

export default function FeedbackThreeInit(sequelize: Sequelize) {
    FeedbackThree.init(
        {
            email_id: { type: DataTypes.STRING, allowNull: false },
            student_batch_year: { type: DataTypes.STRING, allowNull: false },
            student_class_and_division: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            employee_name: { type: DataTypes.STRING, allowNull: false },
            employee_designation: { type: DataTypes.STRING, allowNull: false },
            q_01: { type: DataTypes.STRING, allowNull: false },
            q_02: { type: DataTypes.STRING, allowNull: false },
            q_03: { type: DataTypes.STRING, allowNull: false },
            q_04: { type: DataTypes.STRING, allowNull: false },
            q_05: { type: DataTypes.STRING, allowNull: false },

            nomination_reason: { type: DataTypes.TEXT, allowNull: false },
        },
        {
            sequelize,
            tableName: "FeedbackThree",
        }
    );
}
