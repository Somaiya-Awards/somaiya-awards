import express from "express";
const router = express.Router();
import { upload11 } from "../middleware/fileUpload";
import {
    getCounts,
    getDaysCount,
    getInstitutionWiseCount,
    getInstitutionData,
    getResearchData,
    getFormPreviewData,
    deleteUser,
    getTeachingJurySummaryData,
    getNonTeachingJurySummaryData,
    getTeachingData,
    getNonTeachingData,
    getFeedback01Data,
    getFeedback02Data,
    getFeedback03Data,
    getFeedback04Data,
    getTeachingScoreCardData,
    getNonTeachingScoreCardData,
    resultsDataHandler,
    getResultsData,
    getGroupWiseCount,
    getStudentsData,
    getSportsGirlData,
    getSportsBoyData,
    getSportsCoachData,
    getUsersData,
} from "../controllers/adminController";
import userAuthenticator from "../middleware/userAuthenticator";
import { Role } from "../types/role";
import roleMiddle from "../middleware/role";
import csrfMiddleware from "../middleware/csrfCookie";

/** GET ROUTES */

router
    .route("/count/all")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getCounts);
router
    .route("/count/15")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getDaysCount);
router
    .route("/count/institution-wise")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getInstitutionWiseCount);
router
    .route("/count/group")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getGroupWiseCount);
router
    .route("/users")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getUsersData);

// responses

router
    .route("/forms/outstanding-institution")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getInstitutionData);
router
    .route("/forms/research")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getResearchData);
router
    .route("/forms/sports-girl")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getSportsGirlData);
router
    .route("/forms/sports-boy")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getSportsBoyData);
router
    .route("/forms/sports-coach")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getSportsCoachData);
router
    .route("/forms/students")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getStudentsData);
router
    .route("/forms/teaching")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getTeachingData);
router
    .route("/forms/non-teaching")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getNonTeachingData);
router
    .route("/forms/feedback-01")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getFeedback01Data);
router
    .route("/forms/feedback-02")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getFeedback02Data);
router
    .route("/forms/feedback-03")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getFeedback03Data);
router
    .route("/forms/feedback-04")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getFeedback04Data);

// scorecard

router
    .route("/teaching/scorecard")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getTeachingScoreCardData);
router
    .route("/non-teaching/scorecard")
    .get(
        csrfMiddleware, userAuthenticator,
        roleMiddle(Role.Admin),
        getNonTeachingScoreCardData
    );
router
    .route("/:formtype/preview")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getFormPreviewData);

// Announce Results

router
    .route("/announce-results")
    .post(
        csrfMiddleware, userAuthenticator,
        roleMiddle(Role.Admin),
        upload11.single("result"),
        resultsDataHandler
    );

// GET RESULTS

router.route("/results").get(getResultsData);

// Jury summary

router
    .route("/jury-summary/teaching")
    .get(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), getTeachingJurySummaryData);
router
    .route("/jury-summary/non-teaching")
    .get(
        csrfMiddleware, userAuthenticator,
        roleMiddle(Role.Admin),
        getNonTeachingJurySummaryData
    );

// delete query
router
    .route("/delete-user")
    .delete(csrfMiddleware, userAuthenticator, roleMiddle(Role.Admin), deleteUser);

export default router;
