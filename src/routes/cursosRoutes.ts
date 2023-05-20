import { Router } from "express";
import { cursosController } from "../controllers/cursosController";
import { jwt } from "../libs/jwt";


class CursosRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', jwt.authenticate, cursosController.getAll);
        this.router.get('/options', jwt.authenticate, cursosController.getAllOptions);
    }
}
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router
