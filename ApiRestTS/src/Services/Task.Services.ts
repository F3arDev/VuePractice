import { AppDataSource } from "../Configs/postgreSQL"; // Asegúrate de que la fuente de datos esté bien importada
import { TaskSchema } from "../Models/Task.Entity"; // Importa correctamente el modelo de la entidad
import ITarea from "../Interfaces/Task.interface";
import { validateAgainstEntity } from "../utils/validateJSON";

export const insertTask = async (task: ITarea) => {
	try {
		// Start a transaction
		// Validar el JSON contra la entidad
		validateAgainstEntity(task, TaskSchema);

		const result = await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

			const taskRepository = transactionalEntityManager.getRepository(TaskSchema);
			await taskRepository.save(task);
			return task;
		});

		// Return the result if successful
		return result;
	} catch (error) {
		// Handle error and provide feedback if needed
		console.error('Error during task insertion:', error);
		throw new Error('Failed to insert task. Transaction rolled back.');
	}
};


export const getTask = async () => {
	try {
		const Task = await AppDataSource.getRepository(TaskSchema).find();
		return Task;
	} catch (error) {
		console.error("Error al insertar la tarea", error);
	}
};
