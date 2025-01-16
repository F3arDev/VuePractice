import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";
// Carga las variables de entorno desde el archivo .env
configDotenv();

// Obtén las variables de entorno
// const NODE_ENV = process.env.NODE_ENV;
const DB_URL = process.env.DB_URL;

async function dbConnect(): Promise<void> {
	if (!DB_URL) {
		throw new Error(
			"DB_URL is not defined in environment variables"
		);
	}

	// Inicializa Sequelize con la URL de conexión
	const sequelize = new Sequelize(DB_URL, {
		dialect: "postgres", // Cambia esto si estás usando otro tipo de base de datos
		logging: false, // Deshabilita los logs de consultas SQL (opcional)
	});

	// try {
	// 	await pool.connect();
	// 	console.log("Conexión a la base de datos exitosa");
	// } catch (error) {
	// 	console.error("Error al conectar a la base de datos", error);
	// } finally {
	// 	await pool.end();
	// }
}

export default dbConnect;
