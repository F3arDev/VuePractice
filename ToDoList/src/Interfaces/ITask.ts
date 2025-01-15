// Definimos la interfaz para una tarea
export interface ITask {
	id: number; // Campo único de identificación
	text: string; // Texto descriptivo de la tarea
	completed: boolean; // Estado de la tarea, si está completada o no
}
