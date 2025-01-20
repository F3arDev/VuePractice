import { Request, Response } from "express";
import { handleHttp } from "../utils/Error.Handle";
import { insertTask, getTask } from "../Services/Task.Services";

export const getTasks = async (req: Request, res: Response) => {
	try {
		const ResponseTask = await getTask();
		res.send(ResponseTask);
	} catch (error) {
		handleHttp(res, "Error al obtener las tareas", error);
	}
};

export const postTask = async ({ body }: Request, res: Response) => {
	try {
		const ResponseTask = await insertTask(body);
		res.send(ResponseTask);
	} catch (error) {
		handleHttp(res, "Error al insertar un dato", error);
	}
};
