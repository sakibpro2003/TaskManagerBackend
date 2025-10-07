import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);

export const UserRoutes = router;
