import { Router } from "express";
import { programController } from "../controllers/programsController";
import { jwt } from "../libs/jwt";


class ProgramsRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', jwt.authenticate ,programController.getAll);
        this.router.get('/options', jwt.authenticate ,programController.getAllOptions);
    }
}
const programsRoutes = new ProgramsRoutes();
export default programsRoutes.router