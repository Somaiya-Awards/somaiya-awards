import { Sequelize, DataTypes, Model } from "sequelize";

export class Results extends Model {
    declare id: number;
    declare result: string;
}

export default function ResultsInit(sequelize: Sequelize) {
    return Results.init(
        {
            result: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Research",
        }
    );
}
