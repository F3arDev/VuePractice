import { Router } from "express";
import { readdirSync } from "fs";
import { dbConnect } from "../Configs/postgreSQL";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
	const file = filename.split(".").shift();
	return file;
};

dbConnect().then(() => console.log("iniciando DB"));

readdirSync(PATH_ROUTER).filter((filename) => {
	const cleanName = cleanFileName(filename);
	if (cleanName !== "index") {
		import(`./${cleanName}`).then((moduleRouter) => {
			console.log(`Se esta cargando las rutas..... /${cleanName}`);
			router.use(`/${cleanName}`, moduleRouter.router);
		});
	}
});

export { router };
