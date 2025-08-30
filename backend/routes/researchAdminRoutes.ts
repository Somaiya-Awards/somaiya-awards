import express from "express";
import userAuthenticator from "../middleware/userAuthenticator";
import {
    researchDataHandler,
    researchDataUpdater,
} from "../controllers/researchAdminController";
const router = express.Router();

// GET METHOD ROUTES

router.route("/research").get(userAuthenticator, researchDataHandler);

// PUT METHOD ROUTES

router.route("/update").put(userAuthenticator, researchDataUpdater);

export default router;
