import { Router } from "express";
import { subjectController } from "../controllers/subjectController";
import { jwt } from "../libs/jwt";


class SubjectRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', jwt.authenticate ,subjectController.getAll);
        this.router.get('/options', jwt.authenticate ,subjectController.getAll);
    }
}
const subjectRoutes = new SubjectRoutes();
export default subjectRoutes.router
