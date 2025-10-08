"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
var ieacController_1 = require("../controllers/ieacController");
var fileUpload_1 = require("../middleware/fileUpload");
/**GET Routes */
router.route("/outstanding-institution").get(ieacController_1.institutionDataHandler);
// router.route('/research').get(researchDataHandler);
// router.route('/sports').get(sportsDataHandler);
router.route("/teaching").get(ieacController_1.teachingDataHandler);
router.route("/non-teaching").get(ieacController_1.nonTeachingDataHandler);
router.route("/nominated-faculty-names").get(ieacController_1.getNominatedTeacherNames);
router.route("/nominated-staff-names").get(ieacController_1.getNominatedStaffNames);
/**PUT Routes */
// router.route('/research').put(researchDataUpdater);
// router.route('/sports').put(sportsDataUpdater);
router.route("/teaching").put(ieacController_1.teachingDataUpdater);
router.route("/non-teaching").put(ieacController_1.nonTeachingDataUpdater);
/**POST Routes */
// router.route('/research').post(researchRecFileHandler)
router
    .route("/teaching")
    .post(fileUpload_1.upload08.single("approvalFile"), ieacController_1.teachingRecFileHandler);
router
    .route("/non-teaching")
    .post(fileUpload_1.upload09.single("approvalFile"), ieacController_1.nonTeachingRecFileHandler);
// router.route('/sports').post(sportsRecFileHandler)
exports.default = router;
