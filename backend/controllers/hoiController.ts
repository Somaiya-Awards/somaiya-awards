import asyncHandler from "express-async-handler";
import { AuthRequest } from "../types/request";
import { OutstandingInstitution } from "../models/tables/OutstandingInstitution";
import { sequelize } from "../models";
import { Research } from "../models/tables/Research";
import { Sports } from "../models/tables/Sports";
import { Teaching } from "../models/tables/Teaching";
import { NonTeaching } from "../models/tables/NonTeaching";
import { Students } from "../models/tables/Students";

//@desc get data of institution forms to hoi
//@route GET /hoi/data/outstanding-institution
//@access private

export const institutionDataHandler = asyncHandler(async (req, res) => {
    const user_institution = (req as AuthRequest).user.institution;

    const currentYear = new Date().getFullYear();

    const data = await OutstandingInstitution.findAll({
        where: sequelize.and(
            // raw SQL query using and operator
            sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
            { institution_name: user_institution }
        ),
    });

    res.status(200).json({
        data: data,
    });
});

//@desc get data of research forms to hoi
//@route GET /hoi/data/research
//@access private

export const researchDataHandler = asyncHandler(async (req, res) => {
    const user_institution = (req as AuthRequest).user.institution;

    const currentYear = new Date().getFullYear();

    const data = await Research.findAll({
        where: sequelize.and(
            // raw SQL query using and operator
            sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
            { institution: user_institution }
        ),
    });

    res.status(200).json({
        data: data,
    });
});

//@desc get data of sports forms to hoi
//@route GET /hoi/data/sports
//@access private

export const sportsDataHandler = asyncHandler(async (req, res) => {
    const user_institution = (req as AuthRequest).user.institution;

    const currentYear = new Date().getFullYear();

    const data = await Sports.findAll({
        where: sequelize.and(
            // raw SQL query using and operator
            sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
            { institute_name: user_institution }
        ),
    });

    res.status(200).json({
        data: data,
    });
});

//@desc get data of teaching forms to hoi
//@route GET /hoi/data/teaching
//@access private

export const teachingDataHandler = asyncHandler(async (req, res) => {
    const user_institution = (req as AuthRequest).user.institution;

    const currentYear = new Date().getFullYear();

    const data = await Teaching.findAll({
        where: sequelize.and(
            // raw SQL query using and operator
            sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
            { institute_name: user_institution }
        ),
    });

    res.status(200).json({
        data: data,
    });
});

//@desc get data of non-teaching forms to hoi
//@route GET /hoi/data/non-teaching
//@access private

export const nonTeachingDataHandler = asyncHandler(async (req, res) => {
    const user_institution = (req as AuthRequest).user.institution;

    const currentYear = new Date().getFullYear();

    const data = await NonTeaching.findAll({
        where: sequelize.and(
            // raw SQL query using and operator
            sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
            { institute_name: user_institution }
        ),
    });

    res.status(200).json({
        data: data,
    });
});

//@desc get data of students to HOI
//@route GET /hoi/data/students
//@access private

export const studentsDataHandler = asyncHandler(async (req, res) => {
    const user_institution = (req as AuthRequest).user.institution;

    const currentYear = new Date().getFullYear();

    const data = await Students.findAll({
        where: sequelize.and(
            // raw SQL query using and operator
            sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
            { institution_name: user_institution }
        ),
    });

    res.status(200).json({
        data: data,
    });
});
