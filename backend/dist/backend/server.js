"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const formRoutes_1 = __importDefault(require("./routes/formRoutes"));
const hoiRoutes_1 = __importDefault(require("./routes/hoiRoutes"));
const ieacRoutes_1 = __importDefault(require("./routes/ieacRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const studentAdminRoutes_1 = __importDefault(require("./routes/studentAdminRoutes"));
const sportsAdminRoutes_1 = __importDefault(require("./routes/sportsAdminRoutes"));
const researchAdminRoutes_1 = __importDefault(require("./routes/researchAdminRoutes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = require("./middleware/logger");
const role_1 = require("./types/role");
const dotenv_1 = __importDefault(require("dotenv"));
const userAuthenticator_1 = __importDefault(require("./middleware/userAuthenticator"));
const role_2 = __importDefault(require("./middleware/role"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const models_1 = require("./models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const csrfMiddleware_1 = __importDefault(require("./middleware/csrfMiddleware"));
const constants_1 = require("./constants");
const cluster_1 = __importDefault(require("cluster"));
dotenv_1.default.config();
const numCPUs = os_1.default.cpus().length;
if (cluster_1.default.isMaster) {
    console.log(`Master ${process.pid} is running`);
    if (process.env.DEBUG === "1") {
        cluster_1.default.fork();
    }
    else {
        // Fork workers
        for (let i = 0; i < numCPUs; i++) {
            cluster_1.default.fork();
        }
    }
    cluster_1.default.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster_1.default.fork();
    });
}
else {
    const app = (0, express_1.default)();
    let frontendURL;
    const prod = process.env.PROD === "1";
    if (prod) {
        frontendURL = "https://somaiyaawards.somaiya.edu";
    }
    else {
        frontendURL = "http://localhost:5173";
    }
    console.log(frontendURL);
    app.use((0, cors_1.default)({
        origin: frontendURL, // your frontend URL
        credentials: true,
        exposedHeaders: [constants_1.CsrfName],
        allowedHeaders: `${constants_1.CsrfName}, request-origin, content-type, ${constants_1.instituteHeader}, ${constants_1.applicationHeader}`,
    }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use("/data", userAuthenticator_1.default, express_1.default.static(`${__dirname}/data`));
    app.use("/auth", authRoutes_1.default);
    app.use("/forms", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Hoi), formRoutes_1.default);
    app.use("/hoi/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Hoi), hoiRoutes_1.default);
    app.use("/ieac/data", ieacRoutes_1.default);
    app.use("/admin/data", adminRoutes_1.default);
    app.use("/students-admin/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.StudentAdmin), studentAdminRoutes_1.default);
    app.use("/sports-admin/data", sportsAdminRoutes_1.default);
    app.use("/research-admin/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.ResearchAdmin), researchAdminRoutes_1.default);
    app.use(errorHandler_1.default);
    // server listen and database configuration(do it once, only.Uncomment once, then comment out)
    models_1.sequelize.sync({ alter: false }).then(async (req) => {
        try {
            const userCount = await models_1.User.count();
            if (userCount === 0) {
                await models_1.User.create({
                    email_id: "sas.tech@somaiya.edu",
                    password: await bcrypt_1.default.hash("Sas@1234", 10),
                    role: role_1.Role.Admin,
                });
                console.log("Default user created successfully!");
            }
            logger_1.serverLogger.info(`Connected to database ${req.config.database}`);
            console.log("Connected to MySQL database");
        }
        catch (error) {
            console.error("Error creating default user: OR User already exists. " + error);
            throw error;
        }
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            logger_1.serverLogger.info(`Server started running at port ${PORT}`);
            console.log(`Server started running at port ${PORT}`);
        });
    });
}
