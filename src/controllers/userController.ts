import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { jwt } from "../libs/jwt";
// import { db } from "../database";

class UserController {
    public async register(req: Request, res: Response) {
        const { username, password, email, universidadId } = req.body;

        if (!(username && password && email && universidadId)) {
            return res.status(400).send("All input is required");
        }

        bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
              console.log(err);
            } else {
                const token: string | any = jwt.createToken(username, hash, email, universidadId)
                
                // Almacena el hash en la base de datos o donde corresponda

                return res.status(200).send({ token });
            }
        });
    }


}
export const userController = new UserController();