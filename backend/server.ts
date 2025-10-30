import express from "express";
import os from "os";
import authRoute from "./routes/authRoutes";
import formRoute from "./routes/formRoutes";
import hoiRoutes from "./routes/hoiRoutes";
import ieacRoutes from "./routes/ieacRoutes";
import adminRoutes from "./routes/adminRoutes";
import studentAdminRoutes from "./routes/studentAdminRoutes";
import sportsAdminRoutes from "./routes/sportsAdminRoutes";
import researchRoutes from "./routes/researchAdminRoutes";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";
import { serverLogger } from "./middleware/logger";
import { Role } from "./types/role";
import dotenv from "dotenv";
import userAuthenticator from "./middleware/userAuthenticator";
import roleMiddle from "./middleware/role";
import cookieParser from "cookie-parser";
import { sequelize, User } from "./models";
import bcrypt from "bcrypt";
import csrfMiddleware from "./middleware/csrfMiddleware";
import { applicationHeader, CsrfName, instituteHeader } from "./constants";
import cluster from "cluster";

dotenv.config();

const numCPUs = os.cpus().length;

const prod = process.env.PROD === "1";

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    /** Do it once on Master Process, we have done this i think */
    sequelize.sync({ alter: false }).then(async (req) => {
        try {
            const userCount = await User.count();

            if (userCount === 0) {
                await User.create({
                    email_id: "sas.tech@somaiya.edu",
                    password: await bcrypt.hash("Sas@1234", 10),
                    role: Role.Admin,
                });

                console.log("Default user created successfully!");
            }

            serverLogger.info(`Connected to database ${req.config.database}`);
            console.log("Connected to MySQL database");
        } catch (error) {
            console.error(
                "Error creating default user: OR User already exists. " + error
            );
            throw error;
        }

        if (prod) {
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }
        } else {
            cluster.fork();
        }

        cluster.on("exit", (worker) => {
            console.log(`Worker ${worker.process.pid} died`);
            cluster.fork();
        });
    });
} else {
    const app = express();
    let frontendURL: string;

    if (prod) {
        frontendURL = "https://somaiyaawards.somaiya.edu";
    } else {
        frontendURL = "http://localhost:5173";
    }

    app.use(
        cors({
            origin: frontendURL, // your frontend URL
            credentials: true,
            exposedHeaders: [CsrfName],
            allowedHeaders: `request-origin, content-type, ${CsrfName}, ${instituteHeader}, ${applicationHeader}`,
        })
    );
    app.use(cookieParser());
    app.use(express.json());
    app.use("/data", userAuthenticator, express.static(`${__dirname}/data`));
    app.use("/auth", authRoute);
    app.use("/forms", csrfMiddleware, userAuthenticator, formRoute);
    app.use(
        "/hoi/data",
        csrfMiddleware,
        userAuthenticator,
        roleMiddle([Role.Hoi, Role.Ieac]),
        hoiRoutes
    );
    app.use("/ieac/data", ieacRoutes);
    app.use("/admin/data", adminRoutes);
    app.use("/students-admin/data", studentAdminRoutes);
    app.use("/sports-admin/data", sportsAdminRoutes);
    app.use("/research-admin/data", researchRoutes);

    app.use(errorHandler);

    const PORT = process.env.PORT || 5001;

    app.listen(PORT, () => {
        serverLogger.info(`Server started running at port ${PORT}`);
        console.log(`Server started running at port ${PORT}`);
    });
}
