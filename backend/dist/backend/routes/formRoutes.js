"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
var formController_1 = require("../controllers/formController");
var fileUpload_1 = require("../middleware/fileUpload");
/**
 * Support note:
 *
 *  __%01 : refers to isntitution forms
 *  __%02 : refers to resarch forms
 *  __%03 : refers to sports forms
 *  __%04: refers to teaching forms
 *  __%05: refers to non teaching forms
 *
 *
 *      All forms form with submitForm_(num)> 05 are feedback forms
 *
 *      feedback numbering and meaning
 *
 *      feeback01 : student feedback for teaching staff form
 *      feeback02 : peers feedback for teaching staff form
 *      feeback03 : students feedback for non teaching staff form
 *      feeback04 : peer feedback for non teaching staff form
 *      feeback05 : Feedback form for sports incharge / coach
 *
 *  // update JULY 2023
 *
 * __%10 : refers to students forms
 *
 */
router
    .route("/outstanding-institution")
    .post(fileUpload_1.upload01.single("supportings"), formController_1.submitForm_01);
router.route("/research").post(fileUpload_1.upload02.fields([
    { name: "evidence_of_research", maxCount: 1 },
    { name: "evidence_of_data_provided", maxCount: 1 },
]), formController_1.submitForm_02);
router.route("/sports").post(fileUpload_1.upload03.fields([
    { name: "nominee_coach_photo", maxCount: 1 },
    { name: "nominee_coach_supportings", maxCount: 1 },
    { name: "nominee_ss_girl_photo", maxCount: 1 },
    { name: "nominee_ss_girl_supportings", maxCount: 1 },
    { name: "nominee_ss_boy_photo", maxCount: 1 },
    { name: "nominee_ss_boy_supportings", maxCount: 1 },
]), formController_1.submitForm_03);
router.route("/teaching").post(fileUpload_1.upload04.fields([
    { name: "data_evidence", maxCount: 1 },
    { name: "profile_photograph", maxCount: 1 },
]), formController_1.submitForm_04);
router.route("/non-teaching").post(fileUpload_1.upload05.fields([
    { name: "proof_docs", maxCount: 1 },
    { name: "nominee_photograph", maxCount: 1 },
]), formController_1.submitForm_05);
router.route("/students").post(fileUpload_1.upload10.single("supportings"), formController_1.submitForm_10);
router.route("/feedback-01").post(formController_1.submitFeedback_01);
router.route("/feedback-02").post(formController_1.submitFeedback_02);
router.route("/feedback-03").post(formController_1.submitFeedback_03);
router.route("/feedback-04").post(formController_1.submitFeedback_04);
router.route("/feedback-05").post(formController_1.submitFeedback_05);
// router.route("/house").post(submitFeedback_05);
exports.default = router;
