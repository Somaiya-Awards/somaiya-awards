const express = require('express');
const router = express.Router()
const userAuthenticator = require('../middleware/userAuthenticator');
const {upload11}  = require('../middleware/fileUpload')
const {
        getCounts,
        getDaysCount,
        getInstitutionWiseCount,
        getInstitutionData,
        getResearchData,
        getFormPreviewData,
        getSportsData,
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
        getUsersData
    } = require('../controllers/adminController')

/** GET ROUTES */

router.route('/count/all').get(userAuthenticator, getCounts);
router.route('/count/15').get(userAuthenticator,getDaysCount)
router.route('/count/institution-wise').get(userAuthenticator,getInstitutionWiseCount)
router.route('/count/group').get(userAuthenticator,getGroupWiseCount)
router.route('/users').get(userAuthenticator,getUsersData)

// responses

router.route('/forms/outstanding-institution').get(userAuthenticator, getInstitutionData)
router.route('/forms/research').get(userAuthenticator, getResearchData)
router.route('/forms/sports-girl').get(userAuthenticator, getSportsGirlData)
router.route('/forms/sports-boy').get(userAuthenticator, getSportsBoyData)
router.route('/forms/sports-coach').get(userAuthenticator, getSportsCoachData)
router.route('/forms/students').get(userAuthenticator, getStudentsData)
router.route('/forms/teaching').get(userAuthenticator, getTeachingData)
router.route('/forms/non-teaching').get(userAuthenticator, getNonTeachingData)
router.route('/forms/feedback-01').get(userAuthenticator, getFeedback01Data)
router.route('/forms/feedback-02').get(userAuthenticator, getFeedback02Data)
router.route('/forms/feedback-03').get(userAuthenticator, getFeedback03Data)
router.route('/forms/feedback-04').get(userAuthenticator, getFeedback04Data)


// scorecard

router.route('/teaching/scorecard').get(userAuthenticator, getTeachingScoreCardData);
router.route('/non-teaching/scorecard').get(userAuthenticator, getNonTeachingScoreCardData);
router.route('/:formtype/preview').get(userAuthenticator,getFormPreviewData);

// Announce Results

router.route('/announce-results').post(upload11.single('result'),resultsDataHandler);

// GET RESULTS

router.route('/results').get(getResultsData);

// Jury summary

router.route('/jury-summary/teaching').get(userAuthenticator, getTeachingJurySummaryData)
router.route('/jury-summary/non-teaching').get(userAuthenticator, getNonTeachingJurySummaryData)

// delete query
router.route('/delete-user').delete(userAuthenticator, deleteUser)

module.exports = router;