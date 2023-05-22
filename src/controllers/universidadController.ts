import { Request, Response } from "express";
import University from "../models/University";
import UniversityCourse from "../models/UniversityCourse";


class UniversidadController {
    public async getAll(req: Request, res: Response) {
        try {
            const universities = await University.findAll(); 
            res.json(universities);
        } catch(error) {
            res.status(500).json({error:"Internal Server Error"})
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const universities = await University.findOne({
                where: {
                    id: req.params.id
                }
            }); 
            res.json(universities);
        } catch(error) {
            res.status(500).json({error:"Internal Server Error"})
        }
    }

    public async getCoursesByUniversityId(req: Request, res: Response) {
        try {
            const program = await UniversityCourse.findAll({
                where: {
                    universityId: req.params.id
                }
            }); 
            res.json(program);
        } catch(error) {
            res.status(500).json({error:"Internal Server Error"})
        }
    }

    public async getAllOptions(req: Request, res: Response) {
        await University.findAll({ attributes: ['id','name']}).then(response =>{
            if(response[0].dataValues.id) {
                return res.status(200).send(response[0].dataValues)
            }
        })
    }

}
export const universidadController = new UniversidadController();