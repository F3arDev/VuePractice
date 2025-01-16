import { Model } from "sequelize";

// Define una interfaz para los atributos de la tarea
export interface ITaskAttributes {
	id: number; // Prefijo 'cod', según tus preferencias
	tarea: string;
	estado: boolean;
}

// Define una interfaz que extienda de Model con los atributos
export interface ITaskInstance
	extends Model<ITaskAttributes>,
		ITaskAttributes {}
