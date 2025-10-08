"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var os_1 = require("os");
var authRoutes_1 = require("./routes/authRoutes");
var formRoutes_1 = require("./routes/formRoutes");
var hoiRoutes_1 = require("./routes/hoiRoutes");
var ieacRoutes_1 = require("./routes/ieacRoutes");
var adminRoutes_1 = require("./routes/adminRoutes");
var studentAdminRoutes_1 = require("./routes/studentAdminRoutes");
var sportsAdminRoutes_1 = require("./routes/sportsAdminRoutes");
var researchAdminRoutes_1 = require("./routes/researchAdminRoutes");
var errorHandler_1 = require("./middleware/errorHandler");
var cors_1 = require("cors");
var logger_1 = require("./middleware/logger");
var role_1 = require("./types/role");
var dotenv_1 = require("dotenv");
var userAuthenticator_1 = require("./middleware/userAuthenticator");
var role_2 = require("./middleware/role");
var cookie_parser_1 = require("cookie-parser");
var models_1 = require("./models");
var bcrypt_1 = require("bcrypt");
var csrfMiddleware_1 = require("./middleware/csrfMiddleware");
var constants_1 = require("./constants");
var cluster_1 = require("cluster");
dotenv_1.default.config();
var numCPUs = os_1.default.cpus().length;
if (cluster_1.default.isPrimary) {
    console.log("Master ".concat(process.pid, " is running"));
    // Fork workers
    //    for (let i = 0; i < numCPUs; i++) {
    cluster_1.default.fork();
    //  }
    cluster_1.default.on("exit", function (worker, code, signal) {
        console.log("Worker ".concat(worker.process.pid, " died"));
        cluster_1.default.fork();
    });
}
else {
    var app_1 = (0, express_1.default)();
    var frontendURL = void 0;
    var prod = process.env.PROD === "1";
    if (prod) {
        frontendURL = "https://somaiyaawards.somaiya.edu/";
    }
    else {
        frontendURL = "http://localhost:5173";
    }
    console.log(frontendURL);
    app_1.use((0, cors_1.default)({
        origin: frontendURL, // your frontend URL
        credentials: true,
        exposedHeaders: [constants_1.CsrfName],
    }));
    app_1.use((0, cookie_parser_1.default)());
    app_1.use(express_1.default.json());
    app_1.use("/data", userAuthenticator_1.default, express_1.default.static("".concat(__dirname, "/data")));
    app_1.use("/auth", authRoutes_1.default);
    app_1.use("/forms", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Hoi), formRoutes_1.default);
    app_1.use("/hoi/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Hoi), hoiRoutes_1.default);
    app_1.use("/ieac/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.Ieac), ieacRoutes_1.default);
    app_1.use("/admin/data", adminRoutes_1.default);
    app_1.use("/students-admin/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.StudentAdmin), studentAdminRoutes_1.default);
    app_1.use("/sports-admin/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.SportsAdmin), sportsAdminRoutes_1.default);
    app_1.use("/research-admin/data", csrfMiddleware_1.default, userAuthenticator_1.default, (0, role_2.default)(role_1.Role.ResearchAdmin), researchAdminRoutes_1.default);
    app_1.use(errorHandler_1.default);
    // server listen and database configuration(do it once, only.Uncomment once, then comment out)
    models_1.sequelize.sync({ alter: false }).then(function (req) { return __awaiter(void 0, void 0, void 0, function () {
        var userCount, _a, _b, error_1, PORT;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, models_1.User.count()];
                case 1:
                    userCount = _d.sent();
                    if (!(userCount === 0)) return [3 /*break*/, 4];
                    _b = (_a = models_1.User).create;
                    _c = {
                        email_id: "sas.tech@somaiya.edu"
                    };
                    return [4 /*yield*/, bcrypt_1.default.hash("Sas@1234", 10)];
                case 2: return [4 /*yield*/, _b.apply(_a, [(_c.password = _d.sent(),
                            _c.role = role_1.Role.Admin,
                            _c)])];
                case 3:
                    _d.sent();
                    console.log("Default user created successfully!");
                    _d.label = 4;
                case 4:
                    logger_1.serverLogger.info("Connected to database ".concat(req.config.database));
                    console.log("Connected to MySQL database");
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _d.sent();
                    console.error("Error creating default user: OR User already exists. " + error_1);
                    throw error_1;
                case 6:
                    PORT = process.env.PORT || 5000;
                    app_1.listen(PORT, function () {
                        logger_1.serverLogger.info("Server started running at port ".concat(PORT));
                        console.log("Server started running at port ".concat(PORT));
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
