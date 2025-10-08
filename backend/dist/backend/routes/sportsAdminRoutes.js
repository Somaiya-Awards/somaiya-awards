"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sportsAdminController_1 = require("../controllers/sportsAdminController");
var router = express_1.default.Router();
/**GET REQUEST */
router.route("/sports-star-girl").get(sportsAdminController_1.sportsStarGirlDataHandler);
router.route("/sports-star-boy").get(sportsAdminController_1.sportsStarBoyDataHandler);
router.route("/inspiring-coach").get(sportsAdminController_1.inspiringCoachDataHandler);
router.route("/nominated-coach-names").get(sportsAdminController_1.getNominatedNames);
/**
 * PUT REQUEST
 */
router.route("/update").put(sportsAdminController_1.sportsDataUpdater);
exports.default = router;
