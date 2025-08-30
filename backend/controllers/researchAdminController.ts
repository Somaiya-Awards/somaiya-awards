import asyncHandler from "express-async-handler";
import sequelize from "sequelize";
import { Research } from "../models/tables/Research";

//@desc get data of research forms to Research Admin
//@route GET /research-admin/data/research
//@access private

export const researchDataHandler = asyncHandler(async (req, res) => {
    const currentYear = new Date().getFullYear();

    const data = await Research.findAll({
        where: sequelize.where(
            sequelize.fn("YEAR", sequelize.col("createdAt")),
            currentYear
        ),
    });

    res.status(200).json({
        data: data,
    });
});

//@desc get data of research forms to Research Admin
//@route PUT /research-admin/data/update
//@access private
export const researchDataUpdater = asyncHandler(async (req, res) => {
    const { applicationID } = req.body;

    const applicationForm = await Research.findOne({
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
