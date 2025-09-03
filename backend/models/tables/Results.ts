import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface ResultsAttributes {
    id: number;
    result: string;
    createdAt?: Date,
    updatedAt?: Date,
}

interface ResultsCreationAttributes extends Optional<ResultsAttributes, "id" | "createdAt" | "updatedAt"> {}

export class Results extends Model<
    ResultsAttributes,
    ResultsCreationAttributes
> {
    declare id: number;
    declare result: string;
    declare readonly createdAt?: Date;
    declare readonly updatedAt?: Date;
}

export default function ResultsInit(sequelize: Sequelize) {
    Results.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            result: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Results",
        }
    );
    return Results;
}
