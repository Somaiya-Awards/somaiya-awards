"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsDataUpdater = exports.somaiyaGreenStarDataHandler = exports.somaiyaStarCitizenDataHandler = exports.somaiyaStarInnovatorDataHandler = exports.somaiyaStarBoyDataHandler = exports.somaiyaStarGirlDataHandler = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const sequelize_1 = __importStar(require("sequelize"));
const models_1 = require("../models");
//@desc get somaiya star girl form data of current Year
//@route GET students-admin/data/somaiya-star-girl
//@access PRIVATE
exports.somaiyaStarGirlDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Students.findAll({
        where: {
            [sequelize_1.Op.and]: [
                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                { nomination_category: "Somaiya Star -Girl" },
            ],
        },
    });
    res.status(200).json({
        message: "Request Successful",
        data: data,
    });
});
//@desc get somaiya star boy form data of current Year
//@route GET students-admin/data/somaiya-star-boy
//@access PRIVATE
exports.somaiyaStarBoyDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Students.findAll({
        where: {
            [sequelize_1.Op.and]: [
                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                { nomination_category: "Somaiya Star -Boy" },
            ],
        },
    });
    res.status(200).json({
        message: "Request Successful",
        data: data,
    });
});
//@desc get somaiya star innovator form data of current Year
//@route GET students-admin/data/somaiya-star-innovator
//@access PRIVATE
exports.somaiyaStarInnovatorDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Students.findAll({
        where: {
            [sequelize_1.Op.and]: [
                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                { nomination_category: "Somaiya Star Innovator" },
            ],
        },
    });
    res.status(200).json({
        message: "Request Successful",
        data: data,
    });
});
//@desc get somaiya star citizen form data of current Year
//@route GET students-admin/data/somaiya-star-citizen
//@access PRIVATE
exports.somaiyaStarCitizenDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Students.findAll({
        where: {
            [sequelize_1.Op.and]: [
                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                { nomination_category: "Somaiya Star Citizen" },
            ],
        },
    });
    res.status(200).json({
        message: "Request Successful",
        data: data,
    });
});
//@desc get somaiya Green star form data of current Year
//@route GET students-admin/data/somaiya-green-star
//@access PRIVATE
exports.somaiyaGreenStarDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.Students.findAll({
        where: {
            [sequelize_1.Op.and]: [
                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                { nomination_category: "Somaiya Green Star/ Green Force" },
            ],
        },
    });
    res.status(200).json({
        message: "Request Successful",
        data: data,
    });
});
//@desc get somaiya Green star form data of current Year
//@route PUT students-admin/data/update
//@access PRIVATE
exports.studentsDataUpdater = (0, express_async_handler_1.default)(async (req, res) => {
    const { applicationID } = req.body;
    const applicationForm = await models_1.Students.findOne({
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
