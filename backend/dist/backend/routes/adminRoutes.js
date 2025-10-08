"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
var fileUpload_1 = require("../middleware/fileUpload");
var adminController_1 = require("../controllers/adminController");
var userAuthenticator_1 = require("../middleware/userAuthenticator");
var role_1 = require("../types/role");
var role_2 = require("../middleware/role");
var csrfMiddleware_1 = require("../middleware/csrfMiddleware");
/** GET ROUTES */
router
    .route("/count/all")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getCounts);
router
    .route("/count/15")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getDaysCount);
router
    .route("/count/institution-wise")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getInstitutionWiseCount);
router
    .route("/count/group")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getGroupWiseCount);
router
    .route("/users")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getUsersData);
// responses
router
    .route("/forms/outstanding-institution")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getInstitutionData);
router
    .route("/forms/research")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getResearchData);
router
    .route("/forms/sports-girl")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getSportsGirlData);
router
    .route("/forms/sports-boy")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getSportsBoyData);
router
    .route("/forms/sports-coach")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getSportsCoachData);
router
    .route("/forms/students")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getStudentsData);
router
    .route("/forms/teaching")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getTeachingData);
router
    .route("/forms/non-teaching")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getNonTeachingData);
router
    .route("/forms/feedback-01")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getFeedback01Data);
router
    .route("/forms/feedback-02")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getFeedback02Data);
router
    .route("/forms/feedback-03")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getFeedback03Data);
router
    .route("/forms/feedback-04")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getFeedback04Data);
// scorecard
router
    .route("/teaching/scorecard")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getTeachingScoreCardData);
router
    .route("/non-teaching/scorecard")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getNonTeachingScoreCardData);
router
    .route("/:formtype/preview")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getFormPreviewData);
// Announce Results
router
    .route("/announce-results")
    .post(userAuthenticator_1.default, csrfMiddleware_1.default, (0, role_2.default)(role_1.Role.Admin), fileUpload_1.upload11.single("result"), adminController_1.resultsDataHandler);
// GET RESULTS
router.route("/results").get(adminController_1.getResultsData);
// Jury summary
router
    .route("/jury-summary/teaching")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getTeachingJurySummaryData);
router
    .route("/jury-summary/non-teaching")
    .get(userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.getNonTeachingJurySummaryData);
// delete query
router
    .route("/delete-user")
    .delete(userAuthenticator_1.default, csrfMiddleware_1.default, (0, role_2.default)(role_1.Role.Admin), adminController_1.deleteUser);
exports.default = router;
