import { User } from "../models/tables/User";
import { Request } from "express";

export interface AuthRequest extends Request {
    user: User;
}

export interface FileRequest extends AuthRequest {
    file: Express.Multer.File;
}
