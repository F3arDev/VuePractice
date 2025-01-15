import { ref, type Ref } from "vue";
import type { ITask } from "../Interfaces"; // Asegúrate de importar la interfaz correctamente
// Asegúrate de importar la interfaz correctamente

export class TasksService {
	private Tasks: Ref<ITask[]>;

	constructor() {
		this.Tasks = ref([]); // Inicializamos Tasks como un array de objetos ITask
	}

	// Método para obtener todas las tareas
	public getTasks(): Ref<ITask[]> {
		return this.Tasks;
	}

	// Método para obtener tareas desde una API (por ejemplo, usando fetch)
	public async fetchAllTasks(): Promise<void> {
		try {
			const url = "/Tasks"; // URL de tu API
			const result = await (await fetch(url)).json();
			this.Tasks.value = result; // Asignamos las tareas obtenidas a la propiedad Tasks
		} catch (error) {
			console.error("Error al obtener las tareas:", error);
		}
	}

	// Método para agregar una nueva tarea (POST)
	public async postTask(newTask: ITask): Promise<void> {
		try {
			const url = "/Tasks"; // URL de la API
			const result = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTask),
			});

			// Aquí podrías manejar la respuesta y agregar la nueva tarea si se guardó correctamente
		} catch (error) {
			console.error("Error al agregar la tarea:", error);
		}
	}

	// Método para actualizar una tarea (PUT)
	public async putTask(updatedTask: ITask): Promise<void> {
		try {
			const url = `/Tasks/${updatedTask.id}`; // URL de la API, asumiendo que cada tarea tiene un id único
			const result = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedTask),
			});

			// Aquí podrías manejar la respuesta y actualizar la tarea si se guardó correctamente
		} catch (error) {
			console.error("Error al actualizar la tarea:", error);
		}
	}

	// Método para eliminar una tarea (DELETE)
	public async deleteTask(taskId: number): Promise<void> {
		try {
			const url = `/Tasks/${taskId}`; // URL de la API, usando el id de la tarea
			const result = await fetch(url, {
				method: "DELETE",
			});

			// Aquí podrías manejar la respuesta y eliminar la tarea de la lista local si fue eliminada correctamente
		} catch (error) {
			console.error("Error al eliminar la tarea:", error);
		}
	}
}
