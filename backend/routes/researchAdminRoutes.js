const express = require('express')
const userAuthenticator = require('../middleware/userAuthenticator')
const { researchDataHandler, researchDataUpdater } = require('../controllers/researchAdminController')
const router = express.Router()

// GET METHOD ROUTES

router.route('/research').get(userAuthenticator,researchDataHandler)

// PUT METHOD ROUTES

router.route('/update').put(userAuthenticator,researchDataUpdater)

module.exports = router