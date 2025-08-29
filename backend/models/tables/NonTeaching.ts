import { Sequelize, DataTypes, Model } from "sequelize";

export class NonTeaching extends Model {
    declare id: number;
    declare email_id: string;
    declare staff_name: string;
    declare award_category: string;
    declare institution_name: string;
    declare department: string;
    declare designation: string;
    declare appointment_date: string;
    declare somaiya_email_id: string;
    declare phone_number: string;
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
    declare q_19: number;
    declare q_20: number;
    declare q_21: number;
    declare q_22: number;
    declare q_23: number;
    declare q_24: number;
    declare proof_docs: string;
    declare nominee_photograph: string;
    declare ieacApproved: string;
    declare ieac_scoreA: number | null;
    declare ieac_scoreB: number | null;
    declare ieacApprovedFile: string | null;
    declare hr_approved: string;
}

export default function NonTeachingInit(sequelize: Sequelize) {
    NonTeaching.init(
        {
            email_id: { type: DataTypes.STRING, allowNull: false },
            staff_name: { type: DataTypes.STRING, allowNull: false },
            award_category: { type: DataTypes.STRING, allowNull: false },
            institution_name: { type: DataTypes.STRING, allowNull: false },
            department: { type: DataTypes.STRING, allowNull: false },
            designation: { type: DataTypes.STRING, allowNull: false },
            appointment_date: { type: DataTypes.STRING, allowNull: false },
            somaiya_email_id: { type: DataTypes.STRING, allowNull: false },
            phone_number: { type: DataTypes.STRING, allowNull: false },
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
            q_19: { type: DataTypes.INTEGER, allowNull: false },
            q_20: { type: DataTypes.INTEGER, allowNull: false },
            q_21: { type: DataTypes.INTEGER, allowNull: false },
            q_22: { type: DataTypes.INTEGER, allowNull: false },
            q_23: { type: DataTypes.INTEGER, allowNull: false },
            q_24: { type: DataTypes.INTEGER, allowNull: false },
            proof_docs: { type: DataTypes.STRING, allowNull: false },
            nominee_photograph: { type: DataTypes.STRING, allowNull: false },
            ieacApproved: { type: DataTypes.BOOLEAN, defaultValue: false },
            ieac_scoreA: { type: DataTypes.DECIMAL(10, 5), allowNull: true },
            ieac_scoreB: { type: DataTypes.DECIMAL(10, 5), allowNull: true },
            ieacApprovedFile: { type: DataTypes.STRING, allowNull: true },
            hr_approved: { type: DataTypes.BOOLEAN, defaultValue: false },
        },
        {
            sequelize,
            modelName: "NonTeaching",
        }
    );
}
