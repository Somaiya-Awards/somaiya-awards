"use strict";

import { Sequelize } from "sequelize";
import process from "process";
import InitDB from "./tables";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let s;
if (config.use_env_variable) {
    //@ts-ignore
    s = new Sequelize(process.env[config.use_env_variable], config);
} else {
    s = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

InitDB(s);
export const sequelize = s;
