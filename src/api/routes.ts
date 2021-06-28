import { Router } from "express";
import { CreateTagController } from "../api/controllers/CreateTagController";
import { CreateUserController } from "../api/controllers/CreateUserController";
import { ensureAdmin } from "../api/middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController;
const createTagController = new CreateTagController;

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };