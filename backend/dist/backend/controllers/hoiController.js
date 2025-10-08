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
exports.houseDataHandler = exports.studentsDataHandler = exports.nonTeachingDataHandler = exports.teachingDataHandler = exports.sportsDataHandler = exports.researchDataHandler = exports.institutionDataHandler = void 0;
var express_async_handler_1 = require("express-async-handler");
var models_1 = require("../models");
var models_2 = require("../models");
//@desc get data of institution forms to hoi
//@route GET /hoi/data/outstanding-institution
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
//@desc get data of research forms to hoi
//@route GET /hoi/data/research
//@access private
exports.researchDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_2.Research.findAll({
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
//@desc get data of sports forms to hoi
//@route GET /hoi/data/sports
//@access private
exports.sportsDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_2.Sports.findAll({
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
//@desc get data of teaching forms to hoi
//@route GET /hoi/data/teaching
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
//@desc get data of non-teaching forms to hoi
//@route GET /hoi/data/non-teaching
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
//@desc get data of students to HOI
//@route GET /hoi/data/students
//@access private
exports.studentsDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_2.Students.findAll({
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
//@desc get data of students to HOI
//@route GET /hoi/data/students
//@access private
exports.houseDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_institution, currentYear, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_institution = req.user.institution;
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.House.findAll({
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
