import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UserService {
    constructor() { }

    async createUser(user: Prisma.UserCreateInput) {
        try {
            const newuser = await prisma.user.create({
                data: user
            });
            return newuser;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findUsers(idUser?: string): Promise<Prisma.UserCreateInput[] | Prisma.UserCreateInput | undefined | null> {
        try {
            if (idUser) {
                const user = await prisma.user.findUnique({
                    where: {
                        idUser
                    }
                })
                return user;
            }
            else {
                const users = await prisma.user.findMany();
                return users;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateUser(idUser: string, newData: Prisma.UserUpdateInput){
        try{
            const userUpdated = await prisma.user.update({
                where : {
                    idUser
                },
                data: {
                    nome: newData.nome,
                    email: newData.email,
                    lance: newData.lance,
                    leilao: newData.leilao,
                }
            });
            return userUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(idUser: string){
        try{
            if(!idUser){
                return console.log("ID is not optional.");
            }
            await prisma.user.delete({where: {idUser}});
            return "ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();