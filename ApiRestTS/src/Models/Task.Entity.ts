
import { EntitySchema } from "typeorm";
import ITarea from "../Interfaces/Task.interface";

export const TaskSchema = new EntitySchema<ITarea>({
	name: "Task", // Nombre de la entidad
	tableName: "Task", // Nombre de la tabla en la BD
	columns: {
		id: {
			type: "int",
			primary: true,
			generated: true,
		},
		num: {
			type: "int",
			nullable: false,
		},
		tarea: {
			type: "varchar",
			length: 5,
			nullable: false,
		},
		estado: {
			type: "boolean",
			nullable: false,
		},
	},
});


// // entities/Task.ts
// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import ITarea from "../Interfaces/Task.interface";

// @Entity("Task") // Nombre de la tabla en la BD
// export class TaskModel implements ITarea {
// 	@PrimaryGeneratedColumn()
// 	id!: number;

// 	@Column({ type: "varchar", length: 50, nullable: false })
// 	tarea!: string;

// 	@Column({ type: "boolean", nullable: false, default: true })
// 	estado!: boolean;
// }

// entities/TaskSchema.ts