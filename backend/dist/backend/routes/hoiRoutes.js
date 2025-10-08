"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
var hoiController_1 = require("../controllers/hoiController");
// all hoi accessible routes;
//get institution form data
router.route("/outstanding-institution").get(hoiController_1.institutionDataHandler);
//get research form data
router.route("/research").get(hoiController_1.researchDataHandler);
//get sports form data
router.route("/sports").get(hoiController_1.sportsDataHandler);
//get teaching form data
router.route("/teaching").get(hoiController_1.teachingDataHandler);
//get non-teaching form data
router.route("/non-teaching").get(hoiController_1.nonTeachingDataHandler);
//get non-teaching form data
router.route("/students").get(hoiController_1.studentsDataHandler);
router.route("/house").get(hoiController_1.houseDataHandler);
exports.default = router;
