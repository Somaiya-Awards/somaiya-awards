"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formLogger = exports.authLogger = exports.serverLogger = void 0;
const winston_1 = __importDefault(require("winston"));
exports.serverLogger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.File({
            filename: "logs/server.log",
        }),
    ],
    format: winston_1.default.format.combine(winston_1.default.format.label({
        label: "SERVER",
    }), winston_1.default.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
    }), winston_1.default.format.printf((info) => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`)),
});
exports.authLogger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.File({
            filename: "logs/auth.log",
        }),
    ],
    format: winston_1.default.format.combine(winston_1.default.format.label({
        label: "AUTH",
    }), winston_1.default.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
    }), winston_1.default.format.printf((info) => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`)),
});
exports.formLogger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.File({
            filename: "logs/applications.log",
        }),
    ],
    format: winston_1.default.format.combine(winston_1.default.format.label({
        label: "FORM",
    }), winston_1.default.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
    }), winston_1.default.format.printf((info) => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`)),
});
