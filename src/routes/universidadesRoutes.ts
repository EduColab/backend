import { Router } from "express";
import { universidadController } from "../controllers/universidadController";
import { jwt } from "../libs/jwt";


class UniversidadRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', jwt.authenticate ,universidadController.getAll);
        this.router.get('/options', jwt.authenticate ,universidadController.getAllOptions);
    }
}
const universidadRoutes = new UniversidadRoutes();
export default universidadRoutes.router