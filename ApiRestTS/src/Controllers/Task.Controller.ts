import { Request, Response } from "express";
import { handleHttp } from "../utils/Error.Handle";

export const getTasks = async (req: Request, res: Response) => {
	try {
		// const
	} catch (error) {
		handleHttp(res, "Error al obtener las tareas");
	}
};

export const postTask = async ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (error) {
		handleHttp(res, "Error al obtener las tareas");
	}
};
