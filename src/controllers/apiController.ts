import { Request, Response } from "express";
// import { db } from "../database";

class ApiController {
    public async init(req: Request, res: Response) {
        // const areas = await db.query("SELECT id, name AS nombre FROM area");
        res.json('Welcome to api');
    }


}
export const apiController = new ApiController();