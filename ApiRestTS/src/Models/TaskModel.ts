import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import {
	IsInt,
	IsBoolean,
	Min,
	Max,
	IsDefined,
	IsNotEmpty

} from 'class-validator';
import ITarea from "../Interfaces/Task.interface";
import { validateEntity } from "../utils/validateEntity";

@Entity("Task") // Nombre de la tabla en la BD
export class TaskModel implements ITarea {
	[key: string]: any;
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "varchar", length: 50, nullable: false })
	@IsDefined({ message: "La tarea es requerida." }) // Campo requerido
	@IsNotEmpty({ message: "La tarea no puede estar vacía." }) // Campo no vacío
	tarea!: string;

	@Column({ type: "int", nullable: false })
	@IsDefined({ message: "El número es requerido." }) // Campo requerido
	@IsInt({ message: "El número debe ser un entero." })
	@Min(1, { message: "El número debe ser al menos 1." })
	@Max(100, { message: "El número no puede exceder 100." })
	num!: number;

	@Column({ type: "boolean", nullable: false })
	@IsDefined({ message: "El estado es requerido." }) // Campo requerido
	@IsBoolean({ message: "El estado debe ser un valor booleano (true o false)." })
	estado!: boolean;

	@BeforeInsert()
	@BeforeUpdate()
	async validated() {

		await validateEntity(this);
	}
}