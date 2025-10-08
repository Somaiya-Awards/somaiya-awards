"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNominatedStaffNames = exports.getNominatedTeacherNames = exports.nonTeachingRecFileHandler = exports.teachingRecFileHandler = exports.nonTeachingDataUpdater = exports.teachingDataUpdater = exports.sportsDataUpdater = exports.nonTeachingDataHandler = exports.teachingDataHandler = exports.institutionDataHandler = void 0;
var express_async_handler_1 = require("express-async-handler");
var models_1 = require("../models");
var models_2 = require("../models");
var sequelize_1 = require("sequelize");
//@desc get data of institution forms to ieac
//@route GET /ieac/data/outstanding-institution
//@access private
exports.institutionDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_2.OutstandingInstitution.findAll({
                        where: models_1.sequelize.and(
                        // raw SQL query using and operator
                        models_1.sequelize.literal("YEAR(createdAt) = ".concat(currentYear)), // match current Year
                        { institution_name: user_institution }),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
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
var sportsDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
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
exports.teachingDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_2.Teaching.findAll({
                        where: models_1.sequelize.and(
                        // raw SQL query using and operator
                        models_1.sequelize.literal("YEAR(createdAt) = ".concat(currentYear)), // match current Year
                        { institute_name: user_institution }),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get data of non-teaching forms to ieac
//@route GET /ieac/data/non-teaching
//@access private
exports.nonTeachingDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.NonTeaching.findAll({
                        where: models_1.sequelize.and(
                        // raw SQL query using and operator
                        models_1.sequelize.literal("YEAR(createdAt) = ".concat(currentYear)), // match current Year
                        { institute_name: user_institution }),
                    })];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
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
exports.sportsDataUpdater = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
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
exports.teachingDataUpdater = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, scoreA, scoreB, scoreC, recommended, applicationID, applicationForm;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, scoreA = _a.scoreA, scoreB = _a.scoreB, scoreC = _a.scoreC, recommended = _a.recommended, applicationID = _a.applicationID;
                return [4 /*yield*/, models_2.Teaching.findOne({
                        where: { id: applicationID },
                    })];
            case 1:
                applicationForm = _b.sent();
                if (!applicationForm) {
                    res.status(404);
                    throw new Error("Application not found");
                }
                return [4 /*yield*/, applicationForm.update({
                        ieac_scoreA: scoreA,
                        ieac_scoreB: scoreB,
                        ieac_scoreC: scoreC,
                        ieacApproved: recommended,
                    })];
            case 2:
                _b.sent();
                res.status(200).json({
                    message: "Update Successful",
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc update non-teaching forms
//@route PUT /ieac/data/non-teaching
//@access private
exports.nonTeachingDataUpdater = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, scoreA, scoreB, recommended, applicationID, applicationForm;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, scoreA = _a.scoreA, scoreB = _a.scoreB, recommended = _a.recommended, applicationID = _a.applicationID;
                return [4 /*yield*/, models_1.NonTeaching.findOne({
                        where: { id: applicationID },
                    })];
            case 1:
                applicationForm = _b.sent();
                if (!applicationForm) {
                    res.status(404);
                    throw new Error("Application not found");
                }
                return [4 /*yield*/, applicationForm.update({
                        ieac_scoreA: scoreA,
                        ieac_scoreB: scoreB,
                        ieacApproved: recommended,
                    })];
            case 2:
                _b.sent();
                res.status(200).json({
                    message: "Update Successful",
                });
                return [2 /*return*/];
        }
    });
}); });
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
var sportsRecFileHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
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
exports.teachingRecFileHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ieacApprovedFile, currentYear;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                ieacApprovedFile = req.file.path;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_2.Teaching.update({
                        ieacApprovedFile: ieacApprovedFile,
                    }, {
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                {
                                    institution_name: req.user
                                        .institution,
                                },
                                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _a),
                    })];
            case 1:
                _b.sent();
                res.status(200).json({
                    file: ieacApprovedFile,
                    message: "File uploaded successfully!",
                });
                return [2 /*return*/];
        }
    });
}); });
exports.nonTeachingRecFileHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ieacApprovedFile;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                ieacApprovedFile = req.file.path;
                return [4 /*yield*/, models_1.NonTeaching.update({
                        ieacApprovedFile: ieacApprovedFile,
                    }, {
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                                {
                                    institution_name: req.user
                                        .institution,
                                },
                            ],
                            _a),
                    })];
            case 1:
                _b.sent();
                res.status(200).json({
                    file: ieacApprovedFile,
                    message: "File uploaded successfully!",
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE
exports.getNominatedTeacherNames = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var names, institute_name, result, _i, result_1, feedback;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                names = [];
                institute_name = req.query.institute_name;
                return [4 /*yield*/, models_2.Teaching.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                { institution_name: institute_name },
                                { ieacApproved: true },
                                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _a),
                        attributes: ["staff_name"],
                    })];
            case 1:
                result = _b.sent();
                for (_i = 0, result_1 = result; _i < result_1.length; _i++) {
                    feedback = result_1[_i];
                    names.push(feedback.faculty_name);
                }
                res.status(200).json({
                    data: names,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE
exports.getNominatedStaffNames = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var names, institute_name, result, _i, result_2, feedback;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                names = [];
                institute_name = req.query.institute_name;
                return [4 /*yield*/, models_1.NonTeaching.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                { institution_name: institute_name },
                                { ieacApproved: true },
                                models_1.sequelize.literal("YEAR(createdAt) = YEAR(CURDATE())"),
                            ],
                            _a),
                        attributes: ["staff_name"],
                    })];
            case 1:
                result = _b.sent();
                for (_i = 0, result_2 = result; _i < result_2.length; _i++) {
                    feedback = result_2[_i];
                    names.push(feedback.staff_name);
                }
                res.status(200).json({
                    data: names,
                });
                return [2 /*return*/];
        }
    });
}); });
