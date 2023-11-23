import { Router } from "express";
import LanceController from "../controllers/LanceController";

const LanceRouter = Router();

LanceRouter.get("/", LanceController.listLance);

LanceRouter.post("/create", LanceController.createLance);

LanceRouter.patch("/update/:lanceId", LanceController.updateLance);

LanceRouter.delete("/delete/:lanceId", LanceController.deleteLance);

export default LanceRouter;