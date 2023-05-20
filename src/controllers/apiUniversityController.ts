import { Request, Response } from "express";
import University from "../models/University";


class ApiUniversityController {
    public async init(req: Request, res: Response) {
        try {
            const universities = await University.findAll(); 
            res.json(universities);
        } catch(error) {
            res.status(500).json({error:"Internal Server Error"})
        }
    }


}
export const apiUniversityController = new ApiUniversityController();