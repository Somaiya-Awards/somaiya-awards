import { Sequelize, DataTypes, Model } from "sequelize";

export class Students extends Model {
    declare id: number;
    declare email_id: string;
    declare student_name: string;
    declare students_class: string;
    declare course: string;
    declare institution_name: string;
    declare nomination_category: string;
    declare recommendation_note: string;
    declare supportings: string;
    declare approved: boolean | null;
}

export default function StudentsInit(sequelize: Sequelize) {
    Students.init(
        {
            email_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            students_class: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            course: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            institution_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nomination_category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            recommendation_note: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            supportings: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            approved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            sequelize,
            modelName: "Students",
        }
    );
}
