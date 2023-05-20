import { Router } from "express";
import { apiController } from "../controllers/apiController";


class ApiRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', apiController.init);
        // this.router.get('/:id', areasController.getOne);
        // this.router.post('/', areasController.create);
        // this.router.put('/:id', areasController.update);
        // this.router.delete('/:id', areasController.delete);
    }
}
const apiRoutes = new ApiRoutes();
export default apiRoutes.router
