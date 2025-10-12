import express from "express";
import {
  sportsStarGirlDataHandler,
  sportsStarBoyDataHandler,
  inspiringCoachDataHandler,
  sportsDataUpdater,
  getNominatedNames,
} from "../controllers/sportsAdminController";
import csrfMiddleware from "../middleware/csrfMiddleware";
import roleMiddle from "../middleware/role";
import userAuthenticator from "../middleware/userAuthenticator";
import { Role } from "../types/role";
const router = express.Router();

/**GET REQUEST */

router.route("/sports-star-girl").get(sportsStarGirlDataHandler);
router.route("/sports-star-boy").get(sportsStarBoyDataHandler);
router.route("/inspiring-coach").get(inspiringCoachDataHandler);
router.route("/nominated-coach-names").get(getNominatedNames);

/**
 * PUT REQUEST
 */
router
  .route("/update")
  .put(
    csrfMiddleware,
    userAuthenticator,
    roleMiddle([Role.SportsAdmin]),
    sportsDataUpdater
  );

export default router;
