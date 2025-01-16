import { Router } from "express";
import { readdirSync } from "fs";
import db from "../Configs/postgreSQL";
import exp from "constants";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

db().then(() => console.log("Conexion a la base de datos exitosa"));

const cleanFileName = (filename: string) => {
	const file = filename.split(".").shift();
	return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
	const cleanName = cleanFileName(filename);
	if (cleanName !== "index") {
		import(`./${cleanName}`).then((moduleRouter) => {
			console.log(
				`Se esta cargando las rutas..... /${cleanName}`
			);
			router.use(`/${cleanName}`, moduleRouter.router);
		});
	}
});

export { router };
