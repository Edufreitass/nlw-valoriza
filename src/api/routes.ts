import { Router } from "express";
import { CreateTagController } from "../api/controllers/CreateTagController";
import { CreateUserController } from "../api/controllers/CreateUserController";
import { ensureAdmin } from "../api/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticationUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController;
const createTagController = new CreateTagController;
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };