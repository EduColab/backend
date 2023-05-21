import { Router } from "express";
import { programController } from "../controllers/programController";
import { jwt } from "../libs/jwt";


class ProgramsRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', jwt.authenticate , programController.getAll);
        this.router.get('/options', jwt.authenticate, programController.getAll);
    }
}
const programsRoutes = new ProgramsRoutes();
export default programsRoutes.router