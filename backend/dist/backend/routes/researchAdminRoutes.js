"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const researchAdminController_1 = require("../controllers/researchAdminController");
const router = express_1.default.Router();
// GET METHOD ROUTES
router.route("/research").get(researchAdminController_1.researchDataHandler);
// PUT METHOD ROUTES
router.route("/update").put(researchAdminController_1.researchDataUpdater);
exports.default = router;
