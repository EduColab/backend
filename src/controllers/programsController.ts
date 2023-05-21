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

    public async getById(req: Request, res: Response) {
        try {
            const program = await Programs.findOne({
                where: {
                    id: req.params.id
                }
            }); 
            res.json(program);
        } catch(error) {
            res.status(500).json({error:"Internal Server Error"})
        }
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