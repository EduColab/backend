import { expressjwt } from "express-jwt"
import { Request, Response, NextFunction, response } from "express"
import jsonWebToken from 'jsonwebtoken'
import User from "../models/User"
import * as dotenv from 'dotenv'
dotenv.config()

class Jwt {
    public createToken(username: string, password: string, email: string) {
        const secret: string | any = process.env.JWT_SECRET

        const tokenResponse: string | undefined = jsonWebToken.sign({username, password, email}, secret)

        return tokenResponse
    }

    public async authenticate(req: Request | any, res: Response, next: NextFunction) {
        const token = req.headers.authorization.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: "Token not provided" });
        }

        try {
            const secret: string | any = process.env.JWT_SECRET

            const decoded: object | any = jsonWebToken.verify(token, secret);

            await User.findAll({where: {username: decoded.username, password: decoded.password, email: decoded.email}}).then(response => {
                if (!response[0].dataValues.username) {   
                    return res.status(401).json({ message: "Invalid token" });
                }
            })


            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    }
}

export const jwt = new Jwt();