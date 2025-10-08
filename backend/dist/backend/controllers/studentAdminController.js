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
exports.studentsDataUpdater = exports.somaiyaGreenStarDataHandler = exports.somaiyaStarCitizenDataHandler = exports.somaiyaStarInnovatorDataHandler = exports.somaiyaStarBoyDataHandler = exports.somaiyaStarGirlDataHandler = void 0;
var express_async_handler_1 = require("express-async-handler");
var sequelize_1 = require("sequelize");
var models_1 = require("../models");
//@desc get somaiya star girl form data of current Year
//@route GET students-admin/data/somaiya-star-girl
//@access PRIVATE
exports.somaiyaStarGirlDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Students.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                                { nomination_category: "Somaiya Star -Girl" },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get somaiya star boy form data of current Year
//@route GET students-admin/data/somaiya-star-boy
//@access PRIVATE
exports.somaiyaStarBoyDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Students.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                                { nomination_category: "Somaiya Star -Boy" },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get somaiya star innovator form data of current Year
//@route GET students-admin/data/somaiya-star-innovator
//@access PRIVATE
exports.somaiyaStarInnovatorDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Students.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                                { nomination_category: "Somaiya Star Innovator" },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get somaiya star citizen form data of current Year
//@route GET students-admin/data/somaiya-star-citizen
//@access PRIVATE
exports.somaiyaStarCitizenDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Students.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                                { nomination_category: "Somaiya Star Citizen" },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get somaiya Green star form data of current Year
//@route GET students-admin/data/somaiya-green-star
//@access PRIVATE
exports.somaiyaGreenStarDataHandler = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentYear, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentYear = new Date().getFullYear();
                return [4 /*yield*/, models_1.Students.findAll({
                        where: (_a = {},
                            _a[sequelize_1.Op.and] = [
                                sequelize_1.default.where(sequelize_1.default.fn("YEAR", sequelize_1.default.col("createdAt")), currentYear),
                                { nomination_category: "Somaiya Green Star/ Green Force" },
                            ],
                            _a),
                    })];
            case 1:
                data = _b.sent();
                res.status(200).json({
                    message: "Request Successful",
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); });
//@desc get somaiya Green star form data of current Year
//@route PUT students-admin/data/update
//@access PRIVATE
exports.studentsDataUpdater = (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var applicationID, applicationForm;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                applicationID = req.body.applicationID;
                return [4 /*yield*/, models_1.Students.findOne({
                        where: { id: applicationID },
                    })];
            case 1:
                applicationForm = _a.sent();
                if (!applicationForm) {
                    res.status(404);
                    throw new Error("Application not found");
                }
                return [4 /*yield*/, applicationForm.update({ approved: true })];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "Update Successful",
                });
                return [2 /*return*/];
        }
    });
}); });
