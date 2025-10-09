"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.House = exports.FeedbackFive = exports.Teaching = exports.Students = exports.Sports = exports.Results = exports.Research = exports.OutstandingInstitution = exports.NonTeaching = exports.FeedbackFour = exports.FeedbackThree = exports.FeedbackTwo = exports.FeedbackOne = exports.User = void 0;
const sequelize_1 = require("sequelize");
const process_1 = __importDefault(require("process"));
const tables_1 = __importDefault(require("./tables"));
const env = process_1.default.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
let s;
if (config.use_env_variable) {
    //@ts-ignore
    s = new sequelize_1.Sequelize(process_1.default.env[config.use_env_variable], config);
}
else {
    s = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
_a = (0, tables_1.default)(s), exports.User = _a.User, exports.FeedbackOne = _a.FeedbackOne, exports.FeedbackTwo = _a.FeedbackTwo, exports.FeedbackThree = _a.FeedbackThree, exports.FeedbackFour = _a.FeedbackFour, exports.NonTeaching = _a.NonTeaching, exports.OutstandingInstitution = _a.OutstandingInstitution, exports.Research = _a.Research, exports.Results = _a.Results, exports.Sports = _a.Sports, exports.Students = _a.Students, exports.Teaching = _a.Teaching, exports.FeedbackFive = _a.FeedbackFive, exports.House = _a.House;
exports.sequelize = s;
