import { Request, Response } from "express";
import Course from "../models/Course.";



class CursosController {
    public async getAll(req: Request, res: Response) {
        await Course.findAll().then(response => {
            if (response[0].dataValues.id) {
                return res.status(200).send(response[0].dataValues)
            }
        })
    }

    public async getAllOptions(req: Request, res: Response) {
        await Course.findAll({ attributes: ['id', 'name'] }).then(response => {
            if (response[0].dataValues.id) {
                return res.status(200).send(response[0].dataValues)
            }
        })
    }
    


}
export const cursosController = new CursosController();