import { Request, Response } from "express";



class CursosController {
    public async getAll(req: Request, res: Response) {
        res.send([{id: 1, name: 'curso', idUniversidad: 1, idArea: 1, idCarrera: 1, idSemestre:1}])
    }

    public async getAllOptions(req: Request, res: Response) {
        res.send([{id: 1, label: 'curso'}])
    }
    


}
export const cursosController = new CursosController();