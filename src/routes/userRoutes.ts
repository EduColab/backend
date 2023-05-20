import { Router } from "express";
import { userController } from "../controllers/userController";


class UserRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/login', userController.login);
        this.router.post('/register', userController.register);
        // this.router.get('/:id', areasController.getOne);
        // this.router.post('/', areasController.create);
        // this.router.put('/:id', areasController.update);
        // this.router.delete('/:id', areasController.delete);
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.router
