"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.House = exports.FeedbackFive = exports.Teaching = exports.Students = exports.Sports = exports.Results = exports.Research = exports.OutstandingInstitution = exports.NonTeaching = exports.FeedbackFour = exports.FeedbackThree = exports.FeedbackTwo = exports.FeedbackOne = exports.User = void 0;
var sequelize_1 = require("sequelize");
var process_1 = require("process");
var tables_1 = require("./tables");
var env = process_1.default.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var s;
if (config.use_env_variable) {
    //@ts-ignore
    s = new sequelize_1.Sequelize(process_1.default.env[config.use_env_variable], config);
}
else {
    s = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
exports.User = (_a = (0, tables_1.default)(s), _a.User), exports.FeedbackOne = _a.FeedbackOne, exports.FeedbackTwo = _a.FeedbackTwo, exports.FeedbackThree = _a.FeedbackThree, exports.FeedbackFour = _a.FeedbackFour, exports.NonTeaching = _a.NonTeaching, exports.OutstandingInstitution = _a.OutstandingInstitution, exports.Research = _a.Research, exports.Results = _a.Results, exports.Sports = _a.Sports, exports.Students = _a.Students, exports.Teaching = _a.Teaching, exports.FeedbackFive = _a.FeedbackFive, exports.House = _a.House;
exports.sequelize = s;
