import { Router, Request, Response } from "express";
import { getTasks, postTask } from "../Controllers/Task.Controller";
import { logMiddleware } from "../Middlewares/log";
const router = Router();

router.get("/", logMiddleware, getTasks);

router.post("/", logMiddleware, postTask);

export { router };
