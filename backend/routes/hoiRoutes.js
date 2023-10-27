const express = require('express');
const router = express.Router();
const userAuthenticator = require('../middleware/userAuthenticator');
const {institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    studentsDataHandler} = require('../controllers/hoiController');

// all hoi accessible routes;

//get institution form data 

router.route('/outstanding-institution').get( userAuthenticator , institutionDataHandler);

//get research form data

router.route('/research').get( userAuthenticator , researchDataHandler);

//get sports form data

router.route('/sports').get( userAuthenticator , sportsDataHandler);

//get teaching form data

router.route('/teaching').get( userAuthenticator , teachingDataHandler);

//get non-teaching form data

router.route('/non-teaching').get( userAuthenticator , nonTeachingDataHandler);

//get non-teaching form data

router.route('/students').get( userAuthenticator , studentsDataHandler);



module.exports = router;