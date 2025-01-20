import express from "express";
import cors from "cors";
import "dotenv/config";
import "reflect-metadata";
import { router } from "./Routes";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
