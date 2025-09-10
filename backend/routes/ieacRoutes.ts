import express from "express";
const router = express.Router();
import {
    teachingDataUpdater,
    nonTeachingDataUpdater,
    teachingRecFileHandler,
    nonTeachingRecFileHandler,
    getNominatedTeacherNames,
    getNominatedStaffNames,
    teachingDataHandler,
    nonTeachingDataHandler,
    institutionDataHandler,
} from "../controllers/ieacController";
import { upload08, upload09 } from "../middleware/fileUpload";
import userAuthenticator from "../middleware/userAuthenticator";

/**GET Routes */
router.route("/outstanding-institution").get(institutionDataHandler);
// router.route('/research').get(researchDataHandler);
// router.route('/sports').get(sportsDataHandler);
router.route("/teaching").get(teachingDataHandler);
router.route("/non-teaching").get(nonTeachingDataHandler);

router.route("/nominated-faculty-names").get(getNominatedTeacherNames);
router.route("/nominated-staff-names").get(getNominatedStaffNames);

/**PUT Routes */

// router.route('/research').put(researchDataUpdater);
// router.route('/sports').put(sportsDataUpdater);
router.route("/teaching").put(teachingDataUpdater);
router.route("/non-teaching").put(nonTeachingDataUpdater);

/**POST Routes */

// router.route('/research').post(researchRecFileHandler)
router
    .route("/teaching")
    .post(upload08.single("approvalFile"), teachingRecFileHandler);
router
    .route("/non-teaching")
    .post(upload09.single("approvalFile"), nonTeachingRecFileHandler);
// router.route('/sports').post(sportsRecFileHandler)
export default router;
