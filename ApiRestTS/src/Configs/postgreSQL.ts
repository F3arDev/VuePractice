import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";
import { TaskModel } from "../Models/TaskModel";

// Carga las variables de entorno desde el archivo .env
configDotenv();

// Obtén las variables de entorno
const DB_URL = process.env.DB_URL;

if (!DB_URL) {
	throw new Error("DB_URL is not defined in environment variables");
}

// Configuración del DataSource
export const AppDataSource = new DataSource({
	type: "postgres",
	url: DB_URL,
	synchronize: false, // Evita cambios automáticos en la base de datos
	logging: true, // Muestra las consultas en la consola
	entities: [TaskModel],
	// migrations: [],
});

export async function dbConnect(): Promise<void> {
	if (!DB_URL) {
		throw new Error("DB_URL is not defined in environment variables");
	}
	AppDataSource.initialize()
		.then(() => {
			console.log("Inicializacion Exitosa");
		})
		.catch((err) => {
			console.error("Error durante la inizializacion:", err);
		});
}
