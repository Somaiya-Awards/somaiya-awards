import asyncHandler from "express-async-handler";
import { AuthRequest, FileRequest } from "../types/request";
import { NonTeaching, sequelize } from "../models";
import { OutstandingInstitution, Research, Sports, Teaching } from "../models";
import { Op } from "sequelize";

//@desc get data of institution forms to ieac
//@route GET /ieac/data/outstanding-institution
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

//@desc get data of research forms to ieac
//@route GET /ieac/data/research
//@access private
/**
 * @deprecated : Permanently moved to research Admin
 */
// export const researchDataHandler = asyncHandler(async (req, res) => {
//     const user_institution = (req as AuthRequest).user.institution;
//
//     const currentYear = new Date().getFullYear();
//
//     const data = await Research.findAll({
//         where: sequelize.and(
//             // raw SQL query using and operator
//             sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
//             { institution: user_institution }
//         ),
//     });
//
//     res.status(200).json({
//         data: data,
//     });
// });

//@desc get data of sports forms to ieac
//@route GET /ieac/data/sports
//@access private
/**@deprecated : Shifted Permanently to Sports Admin */
// export const sportsDataHandler = asyncHandler(async (req, res) => {
//     const user_institution = (req as AuthRequest).user.institution;
//
//     const currentYear = new Date().getFullYear();
//
//     const data = await Sports.findAll({
//         where: sequelize.and(
//             // raw SQL query using and operator
//             sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
//             { institute_name: user_institution }
//         ),
//     });
//
//     res.status(200).json({
//         data: data,
//     });
// });

//@desc get data of teaching forms to ieac
//@route GET /ieac/data/teaching
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

//@desc get data of non-teaching forms to ieac
//@route GET /ieac/data/non-teaching
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

//@desc update institution form
//@route PUT /ieac/data/outstanding-institution
//@access private
/**@deprecated : no longer required (Then remove it) */
// const institutionDataUpdater = asyncHandler(async (req, res) => {
//     res.status(200).json({
//         message: "API works",
//     });
// });

// @desc update research form
// @route PUT /ieac/data/research
// @access private
/**
 * @deprecated permanently moved to research Admin
 */
// export const researchDataUpdater = asyncHandler(async (req, res) => {
//     const { applicationID } = req.body;

//     const applicationForm = await Research.findOne({
//         where: { id: applicationID },
//     });

//     if (!applicationForm) {
//         res.status(404);
//         throw new Error("Application not found");
//     }

// 
//     await applicationForm.update({ ieacApproved: true });

//     res.status(200).json({
//         message: "Update Successful",
//     });
// });

//@desc update sports
//@route PUT /ieac/data/sports
//@access private
/**@deprecated : No need For IAEC Approval */
// export const sportsDataUpdater = asyncHandler(async (req, res) => {
//     const { applicationID } = req.body;
//
//     const applicationForm = await Sports.findOne({
//         where: { id: applicationID },
//     });
//     if (!applicationForm) {
//         res.status(404);
//         throw new Error("Application not found");
//     }
//
//     await applicationForm.update({ ieacApproved: true });
//
//     res.status(200).json({
//         message: "Update Successful",
//     });
// });

//@desc update teaching forms
//@route PUT /ieac/data/teaching
//@access private
// TODO: add zod for this
export const teachingDataUpdater = asyncHandler(async (req, res) => {
    const { scoreA, scoreB, scoreC, recommended, applicationID } = req.body;

    const applicationForm = await Teaching.findOne({
        where: { id: applicationID },
    });
    if (!applicationForm) {
        res.status(404);
        throw new Error("Application not found");
    }
    await applicationForm.update({
        ieac_scoreA: scoreA,
        ieac_scoreB: scoreB,
        ieac_scoreC: scoreC,
        ieacApproved: recommended,
    });

    res.status(200).json({
        message: "Update Successful",
    });
});

//@desc update non-teaching forms
//@route PUT /ieac/data/non-teaching
//@access private

export const nonTeachingDataUpdater = asyncHandler(async (req, res) => {
    const { scoreA, scoreB, recommended, applicationID } = req.body;

    const applicationForm = await NonTeaching.findOne({
        where: { id: applicationID },
    });
    if (!applicationForm) {
        res.status(404);
        throw new Error("Application not found");
    }

    await applicationForm.update({
        ieac_scoreA: scoreA,
        ieac_scoreB: scoreB,
        ieacApproved: recommended,
    });

    res.status(200).json({
        message: "Update Successful",
    });
});

/**
 * File handlers
 */
/**@deprecated : No longer required */
// const researchRecFileHandler = asyncHandler(async (req, res) => {
//     const ieacApprovedFile = (req as FileRequest).file.path;
//
//     const currentYear = new Date().getFullYear();
//     await Research.update(
//         {
//             ieacApprovedFile: ieacApprovedFile,
//         },
//         {
//             where: {
//                 createdAt: {
//                     [Op.and]: [
//                         sequelize.where(
//                             sequelize.fn("YEAR", sequelize.col("createdAt")),
//                             currentYear
//                         ),
//                     ],
//                 },
//                 institution: (req as AuthRequest).user.institution,
//             },
//         }
//     );
//
//     res.status(200).json({
//         file: ieacApprovedFile,
//         message: "File uploaded sucessfully! ",
//     });
// });

/**@deprecated : No Need for IAEC to approve */
// const sportsRecFileHandler = asyncHandler(async (req, res) => {
//     const ieacApprovedFile = (req as FileRequest).file.path;
//
//     const currentYear = new Date().getFullYear();
//     await Sports.update(
//         {
//             ieacApprovedFile: ieacApprovedFile,
//         },
//         {
//             where: {
//                 createdAt: {
//                     [Op.and]: [
//                         sequelize.where(
//                             sequelize.fn("YEAR", sequelize.col("createdAt")),
//                             currentYear
//                         ),
//                     ],
//                 },
//                 institute_name: (req as AuthRequest).user.institution,
//             },
//         }
//     );
//
//     res.status(200).json({
//         file: ieacApprovedFile,
//         message: "File uploaded sucessfully! ",
//     });
// });

export const teachingRecFileHandler = asyncHandler(async (req, res) => {
    const ieacApprovedFile = (req as FileRequest).file.path;

    const currentYear = new Date().getFullYear();
    await Teaching.update(
        {
            ieacApprovedFile: ieacApprovedFile,
        },
        {
            where: {
                [Op.and]: [
                    { institution_name: (req as AuthRequest).user.institution as string},
                    sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                ],
            },
        }
    );

    res.status(200).json({
        file: ieacApprovedFile,
        message: "File uploaded successfully!",
    });
});

export const nonTeachingRecFileHandler = asyncHandler(async (req, res) => {
    const ieacApprovedFile = (req as FileRequest).file.path;

    await NonTeaching.update(
        {
            ieacApprovedFile: ieacApprovedFile,
        },
        {
            where: {
                [Op.and]: [
                    sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                    { institution_name: (req as AuthRequest).user.institution as string},
                ],
            },
        }
    );

    res.status(200).json({
        file: ieacApprovedFile,
        message: "File uploaded successfully!",
    });
});

//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE

export const getNominatedTeacherNames = asyncHandler(async (req, res) => {
    let names = [];

    const institute_name = req.query.institute_name as string;

    const result = await Teaching.findAll({
        where: {
            [Op.and]: [
                { institution_name: institute_name },
                { ieacApproved: true },
                sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
            ],
        },
        attributes: ["staff_name"],
    });

    for (const feedback of result) {
        names.push(feedback.faculty_name);
    }

    res.status(200).json({
        data: names,
    });
});

//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE

export const getNominatedStaffNames = asyncHandler(async (req, res) => {
    let names = [];

    const institute_name = req.query.institute_name as string;

    const result = await NonTeaching.findAll({
        where: {
            [Op.and]: [
                { institution_name: institute_name },
                { ieacApproved: true },
                sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
            ],
        },
        attributes: ["staff_name"],
    });

    for (const feedback of result) {
        names.push(feedback.staff_name);
    }

    res.status(200).json({
        data: names,
    });
});
