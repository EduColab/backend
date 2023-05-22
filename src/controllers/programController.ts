import { Request, Response } from "express";
import Program from "../models/Program";


class ProgramController {
    public async getAll(req: Request, res: Response) {
        try {
            const programs = await Program.findAll(); 
            res.json(programs);
        } catch(error) {
            res.status(500).json({error:"Internal Server Error"})
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const program = await Program.findOne({
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
        await Program.findAll({ attributes: ['id','name']}).then(response =>{
            if(response[0].dataValues.id) {
                return res.status(200).send(response[0].dataValues)
            }
        })
    }

}
export const programController = new ProgramController();