"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ieacController_1 = require("../controllers/ieacController");
const fileUpload_1 = require("../middleware/fileUpload");
const userAuthenticator_1 = __importDefault(require("../middleware/userAuthenticator"));
const csrfMiddleware_1 = __importDefault(require("../middleware/csrfMiddleware"));
const role_1 = __importDefault(require("../middleware/role"));
const role_2 = require("../types/role");
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
router
    .route("/teaching")
    .put(csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_1.default)(role_2.Role.Ieac), ieacController_1.teachingDataUpdater);
router
    .route("/non-teaching")
    .put(csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_1.default)(role_2.Role.Ieac), ieacController_1.nonTeachingDataUpdater);
/**POST Routes */
// router.route('/research').post(researchRecFileHandler)
router
    .route("/teaching")
    .post(csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_1.default)(role_2.Role.Ieac), fileUpload_1.upload08.single("approvalFile"), ieacController_1.teachingRecFileHandler);
router
    .route("/non-teaching")
    .post(csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_1.default)(role_2.Role.Ieac), fileUpload_1.upload09.single("approvalFile"), ieacController_1.nonTeachingRecFileHandler);
// router.route('/sports').post(sportsRecFileHandler)
exports.default = router;
