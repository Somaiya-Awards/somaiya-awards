const { constants } = require('../constants')

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500

    switch (statusCode) {

        case constants.BAD_REQUEST:
            res.json({
                title: "400 : BAD REQUEST",
                message: err.message,
                stack: err.stack
            })

            break

        case constants.UNAUTHORIZED:
            res.json({
                title: "401 : UNAUTHORIZED",
                message: err.message,
                stack: err.stack
            })

            break

        case constants.FORBIDDEN:
            res.json({
                title: "403 : FORBIDDEN",
                message: err.message,
                stack: err.stack
            })

            break

        case constants.NOT_FOUND:
            res.json({
                title: "404 : NOT FOUND",
                message: err.message,
                stack: err.stack
            })

            break

        case constants.METHOD_NOT_ALLOWED:
            res.json({
                title: "405 : METHOD NOT ALLOWED",
                message: err.message,
                stack: err.stack
            })

            break

    }
}


module.exports = errorHandler