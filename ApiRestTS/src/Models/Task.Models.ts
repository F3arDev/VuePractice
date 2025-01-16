import { DataTypes, Model } from "sequelize";
import sequelize from "../Configs/postgreSQL"; // Importa tu instancia de Sequelize configurada previamente
import { ITaskInstance } from "../Interfaces/Task.interface";
// Definir el modelo de Task con Sequelize

ITaskInstance.init(
	{
		id: {
			// Clave primaria con prefijo 'cod' y en mayúscula, según tus preferencias
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		tarea: {
			type: DataTypes.STRING,
			allowNull: false, // No permite valores nulos
		},
		estado: {
			type: DataTypes.BOOLEAN,
			allowNull: false, // No permite valores nulos
		},
	},
	{
		sequelize, // Conexión de la base de datos
		modelName: "Task", // Nombre lógico de la entidad
		tableName: "Tasks", // Nombre físico en la base de datos
		timestamps: true, // Agrega createdAt y updatedAt automáticamente
	}
);

export default TaskModel;
