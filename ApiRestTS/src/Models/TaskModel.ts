import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { IsInt, IsBoolean, Min, Max, IsDefined, IsNotEmpty } from 'class-validator';
import ITarea from "../Interfaces/Task.interface";
import { validateEntity } from "../utils/validateEntity";
import { MessageHandle } from '../utils/Message.Handle';
const msg = new MessageHandle();
@Entity("Task") // Nombre de la tabla en la BD
export class TaskModel implements ITarea {
	//PrimaryKey
	@PrimaryGeneratedColumn()
	id!: number;

	//Tarea
	@Column({ type: "varchar", length: 50, nullable: false })
	@IsDefined(msg.ErrorIsDefined('tarea')) // Campo requerido
	@IsNotEmpty(msg.ErrorIsNotEmpty('tarea')) // Campo no vacío
	tarea!: string;

	//Numero
	@Column({ type: "int", nullable: false })
	@IsDefined(msg.ErrorIsDefined('num')) // Campo requerido
	@IsInt(msg.ErrorIsInt('num')) // Debe ser un entero
	@Min(1, msg.ErrorMinValue('num', 1)) // Valor mínimo
	@Max(100, msg.ErrorMaxValue('num', 100)) // Valor máximo
	num!: number;

	//Estado
	@Column({ type: "boolean", nullable: false })
	@IsDefined(msg.ErrorIsDefined('estado')) // Campo requerido
	@IsBoolean(msg.ErrorIsBoolean('estado')) // Debe ser un booleano
	estado!: boolean;

	@BeforeInsert()
	@BeforeUpdate()
	async validated() {
		await validateEntity(this);
	}
}