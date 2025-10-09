"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InitDB;
const User_1 = __importDefault(require("./User"));
const FeedbackOne_1 = __importDefault(require("./FeedbackOne"));
const FeedbackTwo_1 = __importDefault(require("./FeedbackTwo"));
const FeedbackThree_1 = __importDefault(require("./FeedbackThree"));
const FeedbackFour_1 = __importDefault(require("./FeedbackFour"));
const FeedbackFive_1 = __importDefault(require("./FeedbackFive"));
const NonTeaching_1 = __importDefault(require("./NonTeaching"));
const OutstandingInstitution_1 = __importDefault(require("./OutstandingInstitution"));
const Research_1 = __importDefault(require("./Research"));
const Results_1 = __importDefault(require("./Results"));
const Sports_1 = __importDefault(require("./Sports"));
const Students_1 = __importDefault(require("./Students"));
const Teaching_1 = __importDefault(require("./Teaching"));
const House_1 = __importDefault(require("./House"));
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
