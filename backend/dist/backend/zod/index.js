"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validYear = exports.validDate = exports.phoneNumber = exports.somaiyaMail = exports.stringList = exports.numberList = exports.validBoolean = exports.institute = exports.validString = exports.role = exports.validNumber = exports.email = void 0;
exports.arrayChoice = arrayChoice;
exports.Choice = Choice;
exports.textArea = textArea;
exports.validFile = validFile;
exports.lastDate = lastDate;
var z = require("zod");
var role_1 = require("../types/role");
var constants_1 = require("../constants");
exports.email = z.email({ error: "Invalid email address" });
exports.validNumber = z.coerce
    .number()
    .gte(0, "Number should be greater than 0");
exports.role = z.enum(role_1.Role);
exports.validString = z
    .string({ error: "Value must not be empty" })
    .refine(function (data) { return data !== ""; }, { error: "Value must not be empty" });
exports.institute = z.enum(constants_1.Institutes);
exports.validBoolean = z.boolean();
exports.numberList = z.array(z.number());
exports.stringList = z.array(exports.validString);
exports.somaiyaMail = exports.email.regex(/somaiya.edu$/, {
    error: "Invalid Somaiya email",
});
exports.phoneNumber = exports.validString.regex(/^\d{10}/, {
    error: "Invalid Phone Number",
});
exports.validDate = z.coerce.date({
    error: "Invalid Date",
});
exports.validYear = exports.validString
    .regex(/^(19|20)\d{2}$/, { error: "Invalid Year" })
    .refine(function (year) { return year <= new Date().getFullYear().toString(); }, {
    error: "Invalid Year",
});
function arrayChoice(option) {
    return z.any().refine(function (num) { return option.includes(num); }, {
        error: "Invalid Option selected",
    });
}
function Choice(option) {
    return exports.validNumber.refine(function (num) { return option.includes(num); }, {
        error: "Invalid Option selected",
    });
}
function textArea(_a) {
    var minLength = _a.minLength, maxLength = _a.maxLength;
    return exports.validString.regex(RegExp("^\\w{".concat(minLength || 1, ",").concat(maxLength, "}$")), {
        error: "Min word limit: ".concat(minLength || 1, " and Max word limit: ").concat(maxLength),
    });
}
function validFile(_a) {
    var type = _a.type, maxSizeInMb = _a.maxSizeInMb;
    var ValidType = [];
    if (type === "pdf") {
        ValidType.push("application/pdf");
    }
    else {
        ValidType.push("image/jpeg");
    }
    return z
        .instanceof(File)
        .refine(function (file) {
        return file.size < (maxSizeInMb || 5) * 1024 * 1024 &&
            ValidType.includes(file.type);
    }, {
        error: "File should be a ".concat(type, " file and of max size ").concat(maxSizeInMb, " mB"),
    });
}
function lastDate(beforeYears) {
    return exports.validDate.refine(function (date) {
        var now = new Date();
        var previousDate = new Date(now.getFullYear() - beforeYears, now.getMonth(), now.getDate());
        return date <= previousDate;
    }, { error: "Date should be at least ".concat(beforeYears, " years before today") });
}
