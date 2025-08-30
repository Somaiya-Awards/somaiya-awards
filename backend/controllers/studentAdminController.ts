import asyncHandler from "express-async-handler";
import sequelize from "sequelize";
const { Op } = sequelize;
import { Students } from "../models/tables/Students";

//@desc get somaiya star girl form data of current Year
//@route GET students-admin/data/somaiya-star-girl
//@access PRIVATE

export const somaiyaStarGirlDataHandler = asyncHandler(async (req, res) => {
    const currentYear = new Date().getFullYear();

    const data = await Students.findAll({
        where: {
            [Op.and]: [
                sequelize.where(
                    sequelize.fn("YEAR", sequelize.col("createdAt")),
                    currentYear
                ),
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
export const somaiyaStarBoyDataHandler = asyncHandler(async (req, res) => {
    const currentYear = new Date().getFullYear();

    const data = await Students.findAll({
        where: {
            [Op.and]: [
                sequelize.where(
                    sequelize.fn("YEAR", sequelize.col("createdAt")),
                    currentYear
                ),
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
export const somaiyaStarInnovatorDataHandler = asyncHandler(
    async (req, res) => {
        const currentYear = new Date().getFullYear();

        const data = await Students.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn("YEAR", sequelize.col("createdAt")),
                        currentYear
                    ),
                    { nomination_category: "Somaiya Star Innovator" },
                ],
            },
        });

        res.status(200).json({
            message: "Request Successful",
            data: data,
        });
    }
);

//@desc get somaiya star citizen form data of current Year
//@route GET students-admin/data/somaiya-star-citizen
//@access PRIVATE
export const somaiyaStarCitizenDataHandler = asyncHandler(async (req, res) => {
    const currentYear = new Date().getFullYear();

    const data = await Students.findAll({
        where: {
            [Op.and]: [
                sequelize.where(
                    sequelize.fn("YEAR", sequelize.col("createdAt")),
                    currentYear
                ),
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
export const somaiyaGreenStarDataHandler = asyncHandler(async (req, res) => {
    const currentYear = new Date().getFullYear();

    const data = await Students.findAll({
        where: {
            [Op.and]: [
                sequelize.where(
                    sequelize.fn("YEAR", sequelize.col("createdAt")),
                    currentYear
                ),
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

export const studentsDataUpdater = asyncHandler(async (req, res) => {
    const { applicationID } = req.body;

    const applicationForm = await Students.findOne({
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
