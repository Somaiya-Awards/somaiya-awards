import express from "express";
import {
    userLogin,
    passwordReset,
    changePassword,
    registerUser,
    bulkCreateOrUpdateUsers,
} from "../controllers/authController";

const router = express.Router();

/**
 *  Routes
 */

router.route("/login").post(userLogin);
router.route("/forgot-password").post(passwordReset);
router.route("/:id/:token").post(changePassword);
router.route("/register").post(registerUser);
router.route("/bulk-create").post(bulkCreateOrUpdateUsers);

/**
 * Exports
 */

export default router;
