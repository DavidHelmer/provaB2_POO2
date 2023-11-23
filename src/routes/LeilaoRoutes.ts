import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";

const LeilaoRouter = Router();

LeilaoRouter.get("/", LeilaoController.listLeiloes);

LeilaoRouter.post("/create", LeilaoController.createLeilao);

LeilaoRouter.patch("/update/:leilaoId", LeilaoController.updateLeilao);

LeilaoRouter.delete("/delete/:leilaoId", LeilaoController.deleteLeilao);

export default LeilaoRouter;