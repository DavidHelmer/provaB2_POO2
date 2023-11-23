import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LeilaoService {
    constructor () {}

    async createLeilao(leilao: Prisma.LeilaoCreateInput) {
        try {
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findLeiloes(idLeilao?: string) {
        try {
          if (idLeilao){
            const leilao = await prisma.leilao.findUnique({
              where: { idLeilao }
            });
            return leilao;
          } else {
            const leiloes = await prisma.leilao.findMany();
            return leiloes; 
          }
        } catch (error) {
          console.error(error);
          return undefined; 
        }
      }

    async updateLeilao(idLeilao: string, newData: Prisma.LeilaoCreateInput){
        try {
            const leilaoUpdated = await prisma.leilao.update({
                where: {
                    idLeilao
                },
                data: {
                    datalimite: newData.datalimite,
                    dono: newData.dono,
                    lista_de_lances: newData.lista_de_lances,
                    preco: newData.preco,
                    produto: newData.produto
                }
            });
            return leilaoUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async deleteLeilao(idLeilao: string){
    try {
        if(!idLeilao){
            return console.log("ID is not optional.");
        }
        await prisma.leilao.delete({where: {idLeilao}});
        return "ok";
    }   catch(error){
        console.log("error");
        return null;
    }
    }
}

export default new LeilaoService;