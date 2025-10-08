"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var csrfMiddleware_1 = require("../middleware/csrfMiddleware");
var router = express_1.default.Router();
/**
 *  Routes. Note: Manual csrf cause entry points might not have them, except refresh and bulk-create
 */
router.route("/login").post(authController_1.userLogin);
router.route("/logout").post(authController_1.userLogout);
router.route("/refresh").post(csrfMiddleware_1.default, authController_1.userRefresh);
router.route("/forgot-password").post(authController_1.passwordReset);
router.route("/:id/:token").post(authController_1.changePassword);
router.route("/register").post(authController_1.registerUser);
router.route("/bulk-create").post(csrfMiddleware_1.default, authController_1.bulkCreateOrUpdateUsers);
/**
 * Exports
 */
exports.default = router;
