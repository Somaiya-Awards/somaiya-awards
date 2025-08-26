const express = require('express')
const router = express.Router()
const {
    submitForm_01,
    submitForm_02,
    submitForm_03,
    submitForm_04,
    submitForm_05,
    submitForm_10,
    submitFeedback_01,
    submitFeedback_02,
    submitFeedback_03,
    submitFeedback_04,
    submitFeedback_05 } = require('../controllers/formController')
const { upload01, upload02, upload03, upload04, upload05, upload10 } = require('../middleware/fileUpload')

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

router.route('/outstanding-institution').post(
    upload01.single('supportings'),
    submitForm_01
);

router.route('/research').post(
    upload02.fields([
        { name: 'evidence_of_research', maxCount: 1 },
        { name: 'evidence_of_data_provided', maxCount: 1 }
    ]),
    submitForm_02
);

router.route('/sports').post(
    upload03.fields([
        { name: 'nominee_coach_photo', maxCount: 1 },
        { name: 'nominee_coach_supportings', maxCount: 1 },
        { name: 'nominee_ss_girl_photo', maxCount: 1 },
        { name: 'nominee_ss_girl_supportings', maxCount: 1 },
        { name: 'nominee_ss_boy_photo', maxCount: 1 },
        { name: 'nominee_ss_boy_supportings', maxCount: 1 },
    ]),
    submitForm_03
);


router.route('/teaching').post(
    upload04.fields([
        { name: 'data_evidence', maxCount: 1 },
        { name: 'profile_photograph', maxCount: 1 }
    ]),
    submitForm_04
);

router.route('/non-teaching').post(
    upload05.fields([
        { name: 'proof_docs', maxCount: 1 },
        { name: 'nominee_photograph', maxCount: 1 }
    ]),
    submitForm_05
);

router.route('/students').post(
    upload10.single('supportings'),
    submitForm_10
)

router.route('/feedback-01').post(submitFeedback_01)

router.route('/feedback-02').post(submitFeedback_02)

router.route('/feedback-03').post(submitFeedback_03)

router.route('/feedback-04').post(submitFeedback_04)

router.route('/feedback-05').post(submitFeedback_05)

module.exports = router