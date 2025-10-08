"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InitDB;
var User_1 = require("./User");
var FeedbackOne_1 = require("./FeedbackOne");
var FeedbackTwo_1 = require("./FeedbackTwo");
var FeedbackThree_1 = require("./FeedbackThree");
var FeedbackFour_1 = require("./FeedbackFour");
var FeedbackFive_1 = require("./FeedbackFive");
var NonTeaching_1 = require("./NonTeaching");
var OutstandingInstitution_1 = require("./OutstandingInstitution");
var Research_1 = require("./Research");
var Results_1 = require("./Results");
var Sports_1 = require("./Sports");
var Students_1 = require("./Students");
var Teaching_1 = require("./Teaching");
var House_1 = require("./House");
function InitDB(sequelize) {
    return {
        User: (0, User_1.default)(sequelize),
        FeedbackOne: (0, FeedbackOne_1.default)(sequelize),
        FeedbackTwo: (0, FeedbackTwo_1.default)(sequelize),
        FeedbackThree: (0, FeedbackThree_1.default)(sequelize),
        FeedbackFour: (0, FeedbackFour_1.default)(sequelize),
        FeedbackFive: (0, FeedbackFive_1.default)(sequelize),
        NonTeaching: (0, NonTeaching_1.default)(sequelize),
        OutstandingInstitution: (0, OutstandingInstitution_1.default)(sequelize),
        Research: (0, Research_1.default)(sequelize),
        Results: (0, Results_1.default)(sequelize),
        Sports: (0, Sports_1.default)(sequelize),
        Students: (0, Students_1.default)(sequelize),
        Teaching: (0, Teaching_1.default)(sequelize),
        House: (0, House_1.default)(sequelize),
    };
}
