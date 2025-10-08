"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkObject = checkObject;
exports.checkFiles = checkFiles;
var zod_1 = require("zod");
/** Checks schema against validator and throws an error if invalid schema and also set res to status 400 */
function checkObject(data, validator, res) {
    var response = validator.safeParse(data);
    if (!response.success) {
        res.status(400);
        throw new Error(JSON.stringify(zod_1.default.treeifyError(response.error)));
    }
    return response.data;
}
function checkFiles(req, res) {
    var files = req.files;
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
