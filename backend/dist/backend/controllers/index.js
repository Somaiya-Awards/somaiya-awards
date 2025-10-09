"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkObject = checkObject;
exports.checkFiles = checkFiles;
const zod_1 = __importDefault(require("zod"));
/** Checks schema against validator and throws an error if invalid schema and also set res to status 400 */
function checkObject(data, validator, res) {
    let response = validator.safeParse(data);
    if (!response.success) {
        res.status(400);
        throw new Error(JSON.stringify(zod_1.default.treeifyError(response.error)));
    }
    return response.data;
}
function checkFiles(req, res) {
    const files = req.files;
    if (Array.isArray(files)) {
        res.status(400);
        throw new Error("Invalid File Response");
    }
    if (!files) {
        res.status(400);
        throw new Error("Invalid File Response");
    }
    return files;
}
