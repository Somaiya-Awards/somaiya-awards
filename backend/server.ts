import express, { NextFunction } from "express";
import os from "os";
import { Request, Response } from "express";
import cluster from "cluster";
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
import bcrypt from "bcrypt";
import { sequelize, User } from "./models";
import { Role } from "./types/role";
import dotenv from "dotenv";
import userAuthenticator from "./middleware/userAuthenticator";

dotenv.config();

const numCPUs = os.cpus().length;

// if (cluster.isMaster) {
//     console.log(`Master ${process.pid} is running`);
//
//     // Fork workers
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }
//
//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//     });
// } else {
// creating express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/data", userAuthenticator, express.static(`${__dirname}/data`));
app.use("/auth", authRoute);
app.use("/forms", formRoute);
app.use("/hoi/data", hoiRoutes);
app.use("/ieac/data", ieacRoutes);
app.use("/admin/data", adminRoutes);
app.use("/students-admin/data", studentAdminRoutes);
app.use("/sports-admin/data", sportsAdminRoutes);
app.use("/research-admin/data", researchRoutes);
app.use(errorHandler);

// server listen and database configuration
sequelize.sync({ alter: true }).then(async (req) => {
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
        throw error;
        console.error(
            "Error creating default user: OR User already exists. " + error
        );
    }
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        serverLogger.info(`Server started running at port ${PORT}`);
        console.log(`Server started running at port ${PORT}`);
    });
});
// }
