const express = require('express');
const userAuthenticator = require('../middleware/userAuthenticator');
const { sportsStarGirlDataHandler, sportsStarBoyDataHandler, inspiringCoachDataHandler, sportsDataUpdater } = require('../controllers/sportsAdminController');
const router = express.Router()

/**GET REQUEST */

router.route('/sports-star-girl').get(userAuthenticator,sportsStarGirlDataHandler);
router.route('/sports-star-boy').get(userAuthenticator,sportsStarBoyDataHandler);
router.route('/inspiring-coach').get(userAuthenticator,inspiringCoachDataHandler);

/**
 * PUT REQUEST
 */

router.route('/update').put(userAuthenticator, sportsDataUpdater);

module.exports = router