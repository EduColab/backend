import { Router } from "express";
import { programsController } from "../controllers/programsController";
import { jwt } from "../libs/jwt";


class ProgramsRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', jwt.authenticate , programsController.getAll);
        this.router.get('/options', jwt.authenticate, programsController.getAll);
        this.router.get('/id/:id', jwt.authenticate ,programsController.getById);
    }
}
const programsRoutes = new ProgramsRoutes();
export default programsRoutes.router
