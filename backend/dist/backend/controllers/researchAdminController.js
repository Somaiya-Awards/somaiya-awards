"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.researchDataUpdater = exports.researchDataHandler = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const sequelize_1 = __importDefault(require("sequelize"));
const models_1 = require("../models");
//@desc get data of research forms to Research Admin
//@route GET /research-admin/data/research
//@access private
exports.researchDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Research.findAll({
        where: sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of research forms to Research Admin
//@route PUT /research-admin/data/update
//@access private
exports.researchDataUpdater = (0, express_async_handler_1.default)(async (req, res) => {
    const { applicationID } = req.body;
    const applicationForm = await models_1.Research.findOne({
        where: { id: applicationID },
    });
    if (!applicationForm) {
        res.status(404);
        throw new Error("Application not found");
    }
    await applicationForm.update({ approved: true });
    res.status(200).json({
        message: "Update Successful",
    });
});
