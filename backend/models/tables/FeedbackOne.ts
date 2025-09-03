import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface FeedbackOneAttributes {
    id: number;
    email_id: string;
    student_batch_year: string;
    student_class_and_division: string;
    teacher_name: string;
    teacher_designation: string;
    teaching_subject: string;
    q_01: string;
    q_02: string;
    q_03: number;
    q_04: number;
    q_05: number;
    q_06: string;
    q_07: string;
    q_08: number;
    q_09: string;
    q_10: string;
    q_11: string;
    nominating_reasons: string;
    createdAt?: Date,
    updatedAt?: Date,
}

interface FeedbackOneCreationAttributes
    extends Optional<FeedbackOneAttributes, "id" | "createdAt" | "updatedAt"> {}

export class FeedbackOne
    extends Model<FeedbackOneAttributes, FeedbackOneCreationAttributes>
    implements FeedbackOneAttributes
{
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
    declare readonly createdAt?: Date;
    declare readonly updatedAt?: Date;
}

export default function FeedbackOneInit(sequelize: Sequelize) {
    FeedbackOne.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

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
    return FeedbackOne;
}
