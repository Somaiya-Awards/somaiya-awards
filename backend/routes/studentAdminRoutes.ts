import express from "express";
import userAuthenticator from "../middleware/userAuthenticator";
import {
    somaiyaStarGirlDataHandler,
    somaiyaStarBoyDataHandler,
    somaiyaStarInnovatorDataHandler,
    somaiyaStarCitizenDataHandler,
    somaiyaGreenStarDataHandler,
    studentsDataUpdater,
} from "../controllers/studentAdminController";
const router = express.Router();

/**
 * GET REQUEST
 */

router
    .route("/somaiya-star-girl")
    .get(userAuthenticator, somaiyaStarGirlDataHandler);
router
    .route("/somaiya-star-boy")
    .get(userAuthenticator, somaiyaStarBoyDataHandler);
router
    .route("/somaiya-star-innovator")
    .get(userAuthenticator, somaiyaStarInnovatorDataHandler);
router
    .route("/somaiya-star-citizen")
    .get(userAuthenticator, somaiyaStarCitizenDataHandler);
router
    .route("/somaiya-green-star")
    .get(userAuthenticator, somaiyaGreenStarDataHandler);

/**
 * Put REQUEST
 */

router.route("/update").put(userAuthenticator, studentsDataUpdater);

export default router;
