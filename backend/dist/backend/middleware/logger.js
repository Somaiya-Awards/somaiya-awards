"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formLogger = exports.authLogger = exports.serverLogger = void 0;
var winston_1 = require("winston");
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
    }), winston_1.default.format.printf(function (info) {
        return "".concat(info.level, ": ").concat(info.label, ": ").concat([info.timestamp], ": ").concat(info.message);
    })),
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
    }), winston_1.default.format.printf(function (info) {
        return "".concat(info.level, ": ").concat(info.label, ": ").concat([info.timestamp], ": ").concat(info.message);
    })),
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
    }), winston_1.default.format.printf(function (info) {
        return "".concat(info.level, ": ").concat(info.label, ": ").concat([info.timestamp], ": ").concat(info.message);
    })),
});
