"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentAdminController_1 = require("../controllers/studentAdminController");
const csrfMiddleware_1 = __importDefault(require("../middleware/csrfMiddleware"));
const userAuthenticator_1 = __importDefault(require("../middleware/userAuthenticator"));
const role_1 = __importDefault(require("../middleware/role"));
const role_2 = require("../types/role");
const router = express_1.default.Router();
/**
 * GET REQUEST
 */
router.route("/somaiya-star-girl").get(studentAdminController_1.somaiyaStarGirlDataHandler);
router.route("/somaiya-star-boy").get(studentAdminController_1.somaiyaStarBoyDataHandler);
router.route("/somaiya-star-innovator").get(studentAdminController_1.somaiyaStarInnovatorDataHandler);
router.route("/somaiya-star-citizen").get(studentAdminController_1.somaiyaStarCitizenDataHandler);
router.route("/somaiya-green-star").get(studentAdminController_1.somaiyaGreenStarDataHandler);
/**
 * Put REQUEST
 */
router
    .route("/update")
    .put(csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_1.default)(role_2.Role.SportsAdmin), studentAdminController_1.studentsDataUpdater);
exports.default = router;
