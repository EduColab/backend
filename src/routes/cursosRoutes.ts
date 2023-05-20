import { Router } from "express";
import { cursosController } from "../controllers/cursosController";


class CursosRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', cursosController.getAll);
        this.router.get('/options', cursosController.getAllOptions);
        // this.router.get('/:id', areasController.getOne);
        // this.router.post('/', areasController.create);
        // this.router.put('/:id', areasController.update);
        // this.router.delete('/:id', areasController.delete);
    }
}
const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router
