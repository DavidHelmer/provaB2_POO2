import { Request, Response } from "express"
import UserService from "../services/UserService"
import {Prisma} from "@prisma/client"

class UserController{
    constructor(){}

    async listUsers(req: Request, res: Response){
        try {
            const users = await UserService.findUsers();

            return res.json(users);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createUser(req: Request, res: Response){
        try {
        const data: Prisma.UserCreateInput = req.body;

        const newUser = await UserService.createUser(data)

        return res.json(newUser);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deleteUser(req: Request, res: Response){
        try {
            const userData: string = req.params.UserId;

            const user = await UserService.deleteUser(userData);

            return res.json(user)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(req: Request, res: Response){
        try {
            const userId = req.params.UserId;
            const data: Prisma.UserCreateInput = req.body;

            const user = await UserService.updateUser(userId, data);

            return res.json(user);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new UserController();