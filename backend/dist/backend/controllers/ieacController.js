"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNominatedStaffNames = exports.getNominatedTeacherNames = exports.nonTeachingRecFileHandler = exports.teachingRecFileHandler = exports.nonTeachingDataUpdater = exports.teachingDataUpdater = exports.sportsDataUpdater = exports.nonTeachingDataHandler = exports.teachingDataHandler = exports.institutionDataHandler = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const models_1 = require("../models");
const models_2 = require("../models");
const sequelize_1 = require("sequelize");
//@desc get data of institution forms to ieac
//@route GET /ieac/data/outstanding-institution
//@access private
exports.institutionDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_2.OutstandingInstitution.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`) // match current Year
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
const sportsDataHandler = (0, express_async_handler_1.default)(async (req, res) => { });
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
exports.teachingDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_2.Teaching.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`) // match current Year
        ),
    });
    res.status(200).json({
        data: data,
    });
});
//@desc get data of non-teaching forms to ieac
//@route GET /ieac/data/non-teaching
//@access private
exports.nonTeachingDataHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const currentYear = new Date().getFullYear();
    const data = await models_1.NonTeaching.findAll({
        where: models_1.sequelize.and(
        // raw SQL query using and operator
        models_1.sequelize.literal(`YEAR(createdAt) = ${currentYear}`) // match current Year
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
exports.sportsDataUpdater = (0, express_async_handler_1.default)(async (req, res) => { });
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
exports.teachingDataUpdater = (0, express_async_handler_1.default)(async (req, res) => {
    const { scoreA, scoreB, scoreC, recommended, applicationID } = req.body;
    const applicationForm = await models_2.Teaching.findOne({
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
exports.nonTeachingDataUpdater = (0, express_async_handler_1.default)(async (req, res) => {
    const { scoreA, scoreB, recommended, applicationID } = req.body;
    const applicationForm = await models_1.NonTeaching.findOne({
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
const sportsRecFileHandler = (0, express_async_handler_1.default)(async (req, res) => { });
//
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
exports.teachingRecFileHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const ieacApprovedFile = req.file.path;
    const currentYear = new Date().getFullYear();
    await models_2.Teaching.update({
        ieacApprovedFile: ieacApprovedFile,
    }, {
        where: {
            [sequelize_1.Op.and]: [
                {
                    institution_name: req.user
                        .institution,
                },
                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
            ],
        },
    });
    res.status(200).json({
        file: ieacApprovedFile,
        message: "File uploaded successfully!",
    });
});
exports.nonTeachingRecFileHandler = (0, express_async_handler_1.default)(async (req, res) => {
    const ieacApprovedFile = req.file.path;
    await models_1.NonTeaching.update({
        ieacApprovedFile: ieacApprovedFile,
    }, {
        where: {
            [sequelize_1.Op.and]: [
                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                {
                    institution_name: req.user
                        .institution,
                },
            ],
        },
    });
    res.status(200).json({
        file: ieacApprovedFile,
        message: "File uploaded successfully!",
    });
});
//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE
exports.getNominatedTeacherNames = (0, express_async_handler_1.default)(async (req, res) => {
    let names = [];
    const institute_name = req.query.institute_name;
    const result = await models_2.Teaching.findAll({
        where: {
            [sequelize_1.Op.and]: [
                { institution_name: institute_name },
                { ieacApproved: true },
                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
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
exports.getNominatedStaffNames = (0, express_async_handler_1.default)(async (req, res) => {
    let names = [];
    const institute_name = req.query.institute_name;
    const result = await models_1.NonTeaching.findAll({
        where: {
            [sequelize_1.Op.and]: [
                { ieacApproved: true },
                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
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
