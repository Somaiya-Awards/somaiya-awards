import { Sequelize, DataTypes, Model } from "sequelize";

export class FeedbackOne extends Model {
    declare id: number;
    declare email_id: string;
    declare student_batch_year: string;
    declare student_class_and_division: string;
    declare teacher_name: string;
    declare teacher_designation: string;
    declare teaching_subject: string;
    declare q_01: string;
    declare q_02: string;
    declare q_03: number;
    declare q_04: number;
    declare q_05: number;
    declare q_06: string;
    declare q_07: string;
    declare q_08: number;
    declare q_09: string;
    declare q_10: string;
    declare q_11: string;
    declare nominating_reasons: string;
}

export default function FeedbackOneInit(sequelize: Sequelize) {
    FeedbackOne.init(
        {
            email_id: { type: DataTypes.STRING, allowNull: false },
            student_batch_year: { type: DataTypes.STRING, allowNull: false },
            student_class_and_division: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teacher_name: { type: DataTypes.STRING, allowNull: false },
            teacher_designation: { type: DataTypes.STRING, allowNull: false },
            teaching_subject: { type: DataTypes.STRING, allowNull: false },
            q_01: { type: DataTypes.STRING, allowNull: false },
            q_02: { type: DataTypes.STRING, allowNull: false },
            q_03: { type: DataTypes.INTEGER, allowNull: false },
            q_04: { type: DataTypes.INTEGER, allowNull: false },
            q_05: { type: DataTypes.INTEGER, allowNull: false },
            q_06: { type: DataTypes.STRING, allowNull: false },
            q_07: { type: DataTypes.STRING, allowNull: false },
            q_08: { type: DataTypes.INTEGER, allowNull: false },
            q_09: { type: DataTypes.STRING, allowNull: false },
            q_10: { type: DataTypes.STRING, allowNull: false },
            q_11: { type: DataTypes.STRING, allowNull: false },
            nominating_reasons: { type: DataTypes.TEXT, allowNull: false },
        },
        {
            sequelize,
            tableName: "FeedbackOne",
        }
    );
}
