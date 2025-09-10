import express from "express";
import {
    researchDataHandler,
    researchDataUpdater,
} from "../controllers/researchAdminController";
const router = express.Router();

// GET METHOD ROUTES

router.route("/research").get(researchDataHandler);

// PUT METHOD ROUTES

router.route("/update").put(researchDataUpdater);

export default router;
