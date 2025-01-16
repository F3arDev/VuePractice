import { Router, Request, Response } from "express";
import { getTasks, postTask } from "../Controllers/Task.Controller";
const router = Router();

router.get("/", getTasks);

router.post("/", postTask);

export { router };
