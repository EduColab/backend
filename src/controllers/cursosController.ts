import { Request, Response } from "express";
import UniversityCourse from "../models/UniversityCourse";
import CommunityCourse from "../models/CommunityCourse";


class CursosController {
    public async getAll(req: Request, res: Response) {
        await UniversityCourse.findAll().then(response => {
            if (response) {
                return res.status(200).send(response)
            }
        })
    }

    public async getById(req: Request, res: Response) {
        try {
            const program = await UniversityCourse.findOne({
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
        await UniversityCourse.findAll({ attributes: ['id', 'name'] }).then(response => {
            if (response) {
                return res.status(200).send(response)
            }
        })
    }

    public async store(req: Request, res: Response) {

        const { name, description, type, owner } = req.body;

        if (!(name && description && type && owner)) {
            return res.status(400).send("All input is required");
        }
        if(type=="community"){
            const newCourse = {
                name: name,
                description: description,
                email: owner,
                programs_related:"[]",
                subjects_related:"[]"
            };
            let courseCreated = await CommunityCourse.create(newCourse);
            res.status(200).send(courseCreated);
        }
        if(type=="university") {
            const newCourse = {
            name: name,
            description: description,
            universityId: owner,
            programs_related:"[]",
            subjects_related:"[]"
          };
          let courseCreated = await UniversityCourse.create(newCourse);
          res.status(200).send(courseCreated);
        }
    }
    


}
export const cursosController = new CursosController();