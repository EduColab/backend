import { Request, Response } from "express";
import Programs from "../models/Programs";

class ProgramsController {
    public async getAll(req: Request, res: Response) {
        await Programs.findAll().then(response => {
            console.log(response)
            if (response) {
                return res.status(200).send(response)
            }
        })
    }

    public async getAllOptions(req: Request, res: Response) {
        await Programs.findAll({ attributes: ['id', 'name'] }).then(response => {
            if (response) {
                return res.status(200).send(response)
            }
        })
    }


}
export const programsController = new ProgramsController();