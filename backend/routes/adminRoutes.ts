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

/** GET ROUTES */

router.route("/count/all").get(getCounts);
router.route("/count/15").get(getDaysCount);
router.route("/count/institution-wise").get(getInstitutionWiseCount);
router.route("/count/group").get(getGroupWiseCount);
router.route("/users").get(getUsersData);

// responses

router.route("/forms/outstanding-institution").get(getInstitutionData);
router.route("/forms/research").get(getResearchData);
router.route("/forms/sports-girl").get(getSportsGirlData);
router.route("/forms/sports-boy").get(getSportsBoyData);
router.route("/forms/sports-coach").get(getSportsCoachData);
router.route("/forms/students").get(getStudentsData);
router.route("/forms/teaching").get(getTeachingData);
router.route("/forms/non-teaching").get(getNonTeachingData);
router.route("/forms/feedback-01").get(getFeedback01Data);
router.route("/forms/feedback-02").get(getFeedback02Data);
router.route("/forms/feedback-03").get(getFeedback03Data);
router.route("/forms/feedback-04").get(getFeedback04Data);

// scorecard

router.route("/teaching/scorecard").get(getTeachingScoreCardData);
router.route("/non-teaching/scorecard").get(getNonTeachingScoreCardData);
router.route("/:formtype/preview").get(getFormPreviewData);

// Announce Results

router
    .route("/announce-results")
    .post(upload11.single("result"), resultsDataHandler);

// GET RESULTS

router.route("/results").get(getResultsData);

// Jury summary

router.route("/jury-summary/teaching").get(getTeachingJurySummaryData);
router.route("/jury-summary/non-teaching").get(getNonTeachingJurySummaryData);

// delete query
router.route("/delete-user").delete(deleteUser);
export default router;
