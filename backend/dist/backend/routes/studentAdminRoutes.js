"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var studentAdminController_1 = require("../controllers/studentAdminController");
var router = express_1.default.Router();
/**
 * GET REQUEST
 */
router.route("/somaiya-star-girl").get(studentAdminController_1.somaiyaStarGirlDataHandler);
router.route("/somaiya-star-boy").get(studentAdminController_1.somaiyaStarBoyDataHandler);
router.route("/somaiya-star-innovator").get(studentAdminController_1.somaiyaStarInnovatorDataHandler);
router.route("/somaiya-star-citizen").get(studentAdminController_1.somaiyaStarCitizenDataHandler);
router.route("/somaiya-green-star").get(studentAdminController_1.somaiyaGreenStarDataHandler);
/**
 * Put REQUEST
 */
router.route("/update").put(studentAdminController_1.studentsDataUpdater);
exports.default = router;
