import { Router } from "express";
import { CreateTagController } from "../api/controllers/CreateTagController";
import { CreateUserController } from "../api/controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticationUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "../api/middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController;
const createTagController = new CreateTagController;
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

export { router };