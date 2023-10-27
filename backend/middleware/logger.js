const winston =  require('winston')


const serverLogger = winston.createLogger({
    'transports':[
        new winston.transports.File({
            filename:'logs/server.log'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label 💻`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    ),
})

const authLogger = winston.createLogger({
    'transports':[
        new winston.transports.File({
            filename:'logs/auth.log'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label 👨`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    ),
})

const formLogger = winston.createLogger({
    'transports':[
        new winston.transports.File({
            filename:'logs/applications.log'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label 📜`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    ),
})


module.exports = {
    serverLogger,
    authLogger,
    formLogger
}