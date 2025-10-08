import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface HouseAttributes {
    id: number;
    house_name: string,

    // Academics (100 points)
    q_01: number,
    q_02: number,
    q_03: number,
    q_04: number,

    // Co-Curricular (100 points)
    q_05: number,
    q_06: number,
    q_07: number,

    // Sports (100 points)
    q_08: number,
    q_09: number,
    q_10: number,

    // Discipline & Behavior (50 points)
    q_11: number,
    q_12: number,

    // Leadership & Initiative (50 points)
    q_13: number,
    q_14: number,

    // Community Service (50 points)
    q_15: number,
    q_16: number,

    // House Spirit / Participation (50 points)
    q_17: number,
    q_18: number,
    proof_docs: string,
    approved: boolean;
    createdAt?: Date,
    updatedAt?: Date,
}

interface HouseCreationAttributes
    extends Optional<HouseAttributes, "id" | "createdAt" | "updatedAt"> {}


export class House
    extends Model<HouseAttributes, HouseCreationAttributes>
    implements HouseAttributes {
    declare id: number;
    declare house_name: string;

    declare q_01: number;
    declare q_02: number;
    declare q_03: number;
    declare q_04: number;

    declare q_05: number;
    declare q_06: number;
    declare q_07: number;

    declare q_08: number;
    declare q_09: number;
    declare q_10: number;

    declare q_11: number;
    declare q_12: number;

    declare q_13: number;
    declare q_14: number;

    declare q_15: number;
    declare q_16: number;

    declare q_17: number;
    declare q_18: number;
    declare proof_docs: string;
    declare approved: boolean;
    declare readonly createdAt?: Date;
    declare readonly updatedAt?: Date;
}

export default function HouseInit(sequelize: Sequelize) {
    House.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            house_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            q_01: { type: DataTypes.INTEGER, allowNull: false },
            q_02: { type: DataTypes.INTEGER, allowNull: false },
            q_03: { type: DataTypes.INTEGER, allowNull: false },
            q_04: { type: DataTypes.INTEGER, allowNull: false },
        
            q_05: { type: DataTypes.INTEGER, allowNull: false },
            q_06: { type: DataTypes.INTEGER, allowNull: false },
            q_07: { type: DataTypes.INTEGER, allowNull: false },
        
            q_08: { type: DataTypes.INTEGER, allowNull: false },
            q_09: { type: DataTypes.INTEGER, allowNull: false },
            q_10: { type: DataTypes.INTEGER, allowNull: false },
        
            q_11: { type: DataTypes.INTEGER, allowNull: false },
            q_12: { type: DataTypes.INTEGER, allowNull: false },
        
            q_13: { type: DataTypes.INTEGER, allowNull: false },
            q_14: { type: DataTypes.INTEGER, allowNull: false },
        
            q_15: { type: DataTypes.INTEGER, allowNull: false },
            q_16: { type: DataTypes.INTEGER, allowNull: false },
        
            q_17: { type: DataTypes.INTEGER, allowNull: false },
            q_18: { type: DataTypes.INTEGER, allowNull: false },

            proof_docs: {
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
            modelName: "House",
        }
    );
    
    return House;
}
