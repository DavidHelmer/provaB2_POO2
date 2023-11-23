import { Request, Response } from "express"
import LeilaoService from "../services/LeilaoService"
import {Prisma} from "@prisma/client"

class LeilaoController{
    constructor(){}

    async listLeiloes(req: Request, res: Response){
        try {
            const leiloes = await LeilaoService.findLeiloes();

            return res.json(leiloes);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createLeilao(req: Request, res: Response){
        try {
        const data: Prisma.LeilaoCreateInput = req.body;

        const newLeilao = await LeilaoService.createLeilao(data)

        return res.json(newLeilao);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deleteLeilao(req: Request, res: Response){
        try {
            const leilaoData: string = req.params.leilaoId;

            const leilao = await LeilaoService.deleteLeilao(leilaoData);

            res.json(leilao)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeilao(req: Request, res: Response){
        try {
            const leilaoId = req.params.leilaoId;
            const data: Prisma.LeilaoCreateInput = req.body;

            const leilao = await LeilaoService.updateLeilao(leilaoId, data);

            return res.json(leilao);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new LeilaoController();