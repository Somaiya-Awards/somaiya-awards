import { Sequelize } from "sequelize";
import process from "process";
import InitDB from "./tables";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let s: Sequelize;

if (config.use_env_variable) {
    s = new Sequelize(process.env[config.use_env_variable], config);
} else {
    s = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

export const {
    User,
    FeedbackOne,
    FeedbackTwo,
    FeedbackThree,
    FeedbackFour,
    NonTeaching,
    OutstandingInstitution,
    Research,
    Results,
    Sports,
    Students,
    Teaching,
    FeedbackFive,
    House,
} = InitDB(s);

export const sequelize = s;
