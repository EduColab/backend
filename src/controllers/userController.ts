import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { jwt } from "../libs/jwt";
import User from "../models/User";

class UserController {
    public async register(req: Request, res: Response) {
        const { username, password, email } = req.body;

        if (!(username && password && email)) {
            return res.status(400).send("All input is required");
        }

        const passwordHash: string | any = await bcrypt.hash(password, 10)
        
        const token: string | undefined = jwt.createToken(username, passwordHash, email)

        if (token.length > 0 && passwordHash.length > 0) {
            let userCreated = await User.create({ username, password: passwordHash, email, token })
            return res.status(200).send({ token });
        }
    }

    public async login(req: Request, res: Response) {
        const { password, email } = req.body;

        if (!(password && email)) {
            return res.status(400).send("All input is required");
        }

        const userResponse: any = await User.findAll({ where: { email }})

        await bcrypt.compare(password, userResponse[0].dataValues.password).then((response: boolean) => {
            if (response) {
                return res.status(200).send({ token: userResponse[0].dataValues.token })
            } else {
                return res.status(400).send("Invalid Credentials");
            }
        })
    }


}
export const userController = new UserController();