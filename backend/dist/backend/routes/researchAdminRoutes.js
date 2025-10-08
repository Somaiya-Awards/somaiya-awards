"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var researchAdminController_1 = require("../controllers/researchAdminController");
var router = express_1.default.Router();
// GET METHOD ROUTES
router.route("/research").get(researchAdminController_1.researchDataHandler);
// PUT METHOD ROUTES
router.route("/update").put(researchAdminController_1.researchDataUpdater);
exports.default = router;
