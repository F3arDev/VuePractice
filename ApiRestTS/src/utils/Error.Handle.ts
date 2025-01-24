import { Response } from "express";

const handleHttp = (res: Response, error: any, errorRaw?: any) => {
	const statusCode = res.statusCode || 500; // Usamos 500 como valor predeterminado si no está definido
	const currentDate = new Date().toISOString(); // Fecha actual en formato ISO

	try {
		const parsedError = typeof error === 'string' ? JSON.parse(error) : error;
		const response = parsedError.Errors || {
			Estatus: statusCode.toString(),
			Errors: parsedError,
			Fecha: currentDate,
		};
		res.status(statusCode).json(response);
	} catch (parseError) {
		res.status(500).json({
			Estatus: "500",
			Errors: [{ message: 'Ocurrió un error al procesar la respuesta' }],
			Fecha: currentDate,
		});
	}
};



export { handleHttp };	
