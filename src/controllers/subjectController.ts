import { Request, Response } from "express";
import Subject from "../models/Subject";

class SubjectController {
    public async getAll(req: Request, res: Response) {
        await Subject.findAll().then(response => {
            if (response[0].dataValues.id) {
                return res.status(200).send(response)
            }
        })
    }

    public async getAllOptions(req: Request, res: Response) {
        await Subject.findAll({ attributes: ['id', 'name'] }).then(response => {
            if (response[0].dataValues.id) {
                return res.status(200).send(response[0].dataValues)
            }
        })
    }


}
export const subjectController = new SubjectController();