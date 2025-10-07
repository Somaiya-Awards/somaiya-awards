import winston from "winston";

export const serverLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: "logs/server.log",
        }),
    ],
    format: winston.format.combine(
        winston.format.label({
            label: "SERVER",
        }),
        winston.format.timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
        }),
        winston.format.printf(
            (info) =>
                `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
        )
    ),
});

export const authLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: "logs/auth.log",
        }),
    ],
    format: winston.format.combine(
        winston.format.label({
            label: "AUTH",
        }),
        winston.format.timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
        }),
        winston.format.printf(
            (info) =>
                `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
        )
    ),
});

export const formLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: "logs/applications.log",
        }),
    ],
    format: winston.format.combine(
        winston.format.label({
            label: "FORM",
        }),
        winston.format.timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
        }),
        winston.format.printf(
            (info) =>
                `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
        )
    ),
});
