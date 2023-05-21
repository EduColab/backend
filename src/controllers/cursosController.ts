import { Request, Response } from "express";
import Course from "../models/Course.";



class CursosController {
    public async getAll(req: Request, res: Response) {
        await Course.findAll().then(response => {
            if (response) {
                return res.status(200).send(response)
            }
        })
    }

    public async getById(req: Request, res: Response) {
        try {
            const program = await Course.findOne({
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
        await Course.findAll({ attributes: ['id', 'name'] }).then(response => {
            if (response) {
                return res.status(200).send(response)
            }
        })
    }
    


}
export const cursosController = new CursosController();