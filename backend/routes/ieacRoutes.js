const express = require('express');
const router = express.Router();
const {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    researchDataUpdater,
    sportsDataUpdater,
    teachingDataUpdater,
    nonTeachingDataUpdater,
    researchRecFileHandler,
    teachingRecFileHandler,
    nonTeachingRecFileHandler,
    sportsRecFileHandler,
    getNominatedTeacherNames,
    getNominatedStaffNames} = require('../controllers/ieacController');
const {upload06, upload07, upload08, upload09} =require('../middleware/fileUpload');
const userAuthenticator = require('../middleware/userAuthenticator');

/**GET Routes */
router.route('/outstanding-institution').get(userAuthenticator, institutionDataHandler);
// router.route('/research').get(userAuthenticator, researchDataHandler);
// router.route('/sports').get(userAuthenticator,sportsDataHandler);
router.route('/teaching').get(userAuthenticator,teachingDataHandler);
router.route('/non-teaching').get(userAuthenticator,nonTeachingDataHandler);

router.route('/nominated-faculty-names').get(userAuthenticator, getNominatedTeacherNames)
router.route('/nominated-staff-names').get(userAuthenticator, getNominatedStaffNames)

/**PUT Routes */

// router.route('/research').put(userAuthenticator,researchDataUpdater);
// router.route('/sports').put(userAuthenticator,sportsDataUpdater);
router.route('/teaching').put(userAuthenticator,teachingDataUpdater);
router.route('/non-teaching').put(userAuthenticator,nonTeachingDataUpdater);


/**POST Routes */

// router.route('/research').post(userAuthenticator,upload06.single('approvalFile'),researchRecFileHandler)
router.route('/teaching').post(userAuthenticator,upload08.single('approvalFile'),teachingRecFileHandler)
router.route('/non-teaching').post(userAuthenticator,upload09.single('approvalFile'),nonTeachingRecFileHandler)
// router.route('/sports').post(userAuthenticator,upload07.single('approvalFile'),sportsRecFileHandler)
module.exports = router