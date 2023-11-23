import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get("/", UserController.listUsers);

UserRouter.post("/create", UserController.createUser);

UserRouter.patch("/update/:userId", UserController.updateUser);

UserRouter.delete("/delete/:userId", UserController.deleteUser);

export default UserRouter;