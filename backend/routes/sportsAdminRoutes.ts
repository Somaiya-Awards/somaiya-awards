import express from "express";
import userAuthenticator from "../middleware/userAuthenticator";
import {
    sportsStarGirlDataHandler,
    sportsStarBoyDataHandler,
    inspiringCoachDataHandler,
    sportsDataUpdater,
    getNominatedNames,
} from "../controllers/sportsAdminController";
const router = express.Router();

/**GET REQUEST */

router
    .route("/sports-star-girl")
    .get(userAuthenticator, sportsStarGirlDataHandler);
router
    .route("/sports-star-boy")
    .get(userAuthenticator, sportsStarBoyDataHandler);
router
    .route("/inspiring-coach")
    .get(userAuthenticator, inspiringCoachDataHandler);
router
    .route("/nominated-coach-names")
    .get(userAuthenticator, getNominatedNames);

/**
 * PUT REQUEST
 */

router.route("/update").put(userAuthenticator, sportsDataUpdater);

export default router;
