import { Request, Response } from "express"
import LanceService from "../services/LanceService"
import {Prisma} from "@prisma/client"

class LanceController{
    constructor(){}

    async listLance(req: Request, res: Response){
        try {
            const lances = await LanceService.findLances();

            return res.json(lances);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createLance(req: Request, res: Response){
        try {
        const data: Prisma.LanceCreateInput = req.body;

        const newLance = await LanceService.createLance(data)

        return res.json(newLance);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deleteLance(req: Request, res: Response){
        try {
            const lanceData: string = req.params.lanceId;

            const lance = await LanceService.deleteLance(lanceData);

            res.json(lance)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance(req: Request, res: Response){
        try {
            const lanceId = req.params.lanceId;
            const data: Prisma.LanceCreateInput = req.body;

            const lance = await LanceService.updateLance(lanceId, data);

            return res.json(lance);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new LanceController();