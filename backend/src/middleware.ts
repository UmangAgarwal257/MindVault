import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { Request, Response, NextFunction } from "express"
dotenv.config({ path: __dirname + "/../.env" })

export const userMiddleware = (req : Request, res : Response , next : NextFunction) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token as string, process.env.JWT_USER_PASSWORD as string);

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    } else {
        res.status(401).json({
            message : "Incorrect Credentials"
        })
    }
}