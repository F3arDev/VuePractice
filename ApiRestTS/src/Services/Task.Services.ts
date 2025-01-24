import { AppDataSource } from "../Configs/postgreSQL"; // Asegúrate de que la fuente de datos esté bien importada
import { TaskModel } from "../Models/TaskModel"; // Importa correctamente el modelo de la entidad
import { validateEntity } from "../utils/validateEntity"; // Importar el helper personalizado
import ITarea from "../Interfaces/Task.interface";

export const getTask = async () => {
	try {
		const Task = await AppDataSource.getRepository(TaskModel).find();
		return Task;
	} catch (error) {
		console.error("Error al obtener las tareas", error);
	}
};

export const insertTask = async (task: ITarea) => {
	const taskEntity = new TaskModel();
	Object.assign(taskEntity, task);
	try {
		await validateEntity(taskEntity);  
		const taskRepository = AppDataSource.getRepository(TaskModel);
		return await taskRepository.save(taskEntity);
	} catch (error) {
		throw error;
	}
};


