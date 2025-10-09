"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.houseDataHandler = exports.studentsDataHandler = exports.nonTeachingDataHandler = exports.teachingDataHandler = exports.sportsDataHandler = exports.researchDataHandler = exports.institutionDataHandler = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const models_1 = require("../models");
const models_2 = require("../models");
//@desc get data of institution forms to hoi
//@route GET /hoi/data/outstanding-institution
//@access private
exports.institutionDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_2.OutstandingInstitution.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of research forms to hoi
//@route GET /hoi/data/research
//@access private
exports.researchDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_2.Research.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of sports forms to hoi
//@route GET /hoi/data/sports
//@access private
exports.sportsDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_2.Sports.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of teaching forms to hoi
//@route GET /hoi/data/teaching
//@access private
exports.teachingDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_2.Teaching.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of non-teaching forms to hoi
//@route GET /hoi/data/non-teaching
//@access private
exports.nonTeachingDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_1.NonTeaching.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of students to HOI
//@route GET /hoi/data/students
//@access private
exports.studentsDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_2.Students.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of students to HOI
//@route GET /hoi/data/students
//@access private
exports.houseDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const user_institution = req.user.institution;
    const currentYear = new Date().getFullYear();
    const data = await models_1.House.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
        { institution_name: user_institution }),
    });
    res.status(200).json({
        data: data,
    });
});
