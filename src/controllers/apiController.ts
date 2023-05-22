import { Request, Response } from "express";
import  db  from "../database";

class ApiController {
    public async init(req: Request, res: Response) {
        // const areas = await db.query("SELECT id, name AS nombre FROM area");
        res.json('Welcome to api');
    }

    public async finder(req: Request, res: Response) {
        const query = req.query.q;
        const resultado = await db.query(`select id, 'Cursos_Comunidad' as type, name, description from community_courses where description like '%${query}%' or name like '%${query}%' UNION
        select id, 'Cursos_Universidades' as type,  name, description from university_courses where description like '%${query}%' or name like '%${query}%' UNION
        select id, 'Carreras' as type, name, description from programs where description like '%${query}%' or name like '%${query}%'`);
        res.json(resultado[0]);
    }


}
export const apiController = new ApiController();