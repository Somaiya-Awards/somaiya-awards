"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.validYear = exports.validDate = exports.phoneNumber = exports.somaiyaMail = exports.stringList = exports.numberList = exports.validBoolean = exports.institute = exports.anyString = exports.validString = exports.role = exports.validNumber = exports.email = void 0;
exports.arrayChoice = arrayChoice;
exports.Choice = Choice;
exports.textArea = textArea;
exports.validFile = validFile;
exports.lastDate = lastDate;
const z = __importStar(require("zod"));
const role_1 = require("../types/role");
const constants_1 = require("../constants");
exports.email = z.email({ error: "Invalid email address" });
exports.validNumber = z.coerce
    .number()
    .gte(0, "Number should be greater than 0");
exports.role = z.enum(role_1.Role);
exports.validString = z
    .string({ error: "Value must not be empty" })
    .regex(/^[A-Za-z0-9\s.,!?'"@#$%&*()_+\-=:;\/\\|<>~`[\]{}]+$/, {
    // .regex(/^[A-Za-z0-9\s.,\-=:;\/\\]+$/, {
    error: "Value can only contain the following characters: a-z, A-Z, 0-9 and spaces",
});
exports.anyString = z.string({ error: "Value must not be empty" });
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
    .refine((year) => year <= new Date().getFullYear().toString(), {
    error: "Invalid Year",
});
function arrayChoice(option) {
    return z.any().refine((num) => option.includes(num), {
        error: "Invalid Option selected",
    });
}
function Choice(option) {
    return exports.validNumber.refine((num) => option.includes(num), {
        error: "Invalid Option selected",
    });
}
function textArea({ minLength, maxLength, }) {
    return z.string().regex(RegExp(`^\\w{${minLength || 1},${maxLength}}$`), {
        error: `Min word limit: ${minLength || 1} and Max word limit: ${maxLength}`,
    });
}
function validFile({ type, maxSizeInMb, }) {
    var ValidType = [];
    if (type === "pdf") {
        ValidType.push("application/pdf");
    }
    else {
        ValidType.push("image/jpeg");
    }
    return z
        .instanceof(File)
        .refine((file) => file.size < (maxSizeInMb || 5) * 1024 * 1024 &&
        ValidType.includes(file.type), {
        error: `File should be a ${type} file and of max size ${maxSizeInMb} mB`,
    });
}
function lastDate(beforeYears) {
    return exports.validDate.refine((date) => {
        const now = new Date();
        const previousDate = new Date(now.getFullYear() - beforeYears, now.getMonth(), now.getDate());
        return date <= previousDate;
    }, { error: `Date should be at least ${beforeYears} years before today` });
}
