<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card shadow-sm">
					<div class="card-header bg-primary text-white">
						<h3 class="mb-0 text-center">To-Do List</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="addTask" class="d-flex mb-3">
							<input type="text" v-model="newTask" class="form-control me-2"
								placeholder="Escribe una tarea" />
							<button class="btn btn-primary" type="submit">Agregar</button>
						</form>
						<ul class="list-group">
							<li v-for="(task, index) in tasks" :key="task.id"
								class="list-group-item d-flex justify-content-between align-items-center">
								<div v-if="editIndex !== index">
									<input type="checkbox" v-model="task.completed" class="form-check-input me-2" />
									<span :class="{
										'text-decoration-line-through text-muted': task.completed,
									}">
										{{ task.id }} - {{ task.text }}
									</span>
								</div>
								<div v-else>
									<input type="text" v-model="task.text" class="form-control me-2" />
								</div>
								<div>
									<button v-if="editIndex !== index" class="btn btn-secondary btn-sm me-2"
										@click="editTask(index)">
										Editar
									</button>
									<button v-else class="btn btn-success btn-sm me-2" @click="saveTask">
										Guardar
									</button>
									<button class="btn btn-danger btn-sm" @click="removeTask(task.id)">
										Eliminar
									</button>
								</div>
							</li>
							<li v-if="tasks.length === 0" class="list-group-item text-center">
								No hay tareas pendientes.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { type Ref, ref, onMounted } from "vue";
import type { ITask } from "../Interfaces";
// Cargar las tareas al montar el componente
onMounted(() => {
	loadTasks();
});

let Task: Ref<ITask> = ref({
	id: '',  // Agregamos un campo de id único
	text: '',
	completed: false,
});

const tasks: Ref<Task[]> = ref([]);
const newTask: Ref<string> = ref("");
const editIndex: Ref<number | null> = ref(null);

// Cargar tareas desde LocalStorage
const loadTasks = (): void => {
	const savedTasks = localStorage.getItem("tasks");
	if (savedTasks) {
		tasks.value = JSON.parse(savedTasks);
	}
};

// Guardar tareas en LocalStorage
const saveTasks = (): void => {
	localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const addTask = (): void => {
	if (newTask.value.trim() !== "") {
		// Generamos un id único para cada tarea
		const newId = tasks.value.length > 0 ? Math.max(...tasks.value.map(task => task.id)) + 1 : 1;
		tasks.value.push({
			id: newId,
			text: newTask.value.trim(),
			completed: false,
		});
		newTask.value = "";
		saveTasks(); // Guardar tareas después de agregar una nueva
	}
};

const removeTask = (id: number): void => {
	tasks.value = tasks.value.filter(task => task.id !== id);
	saveTasks(); // Guardar tareas después de eliminar una
};

const editTask = (index: number): void => {
	editIndex.value = index;
};

const saveTask = (): void => {
	editIndex.value = null; // Finaliza el modo de edición
	saveTasks(); // Guardar tareas después de editar
};
</script>

<style scoped>
body {
	background-color: #f0f0f0bd;
}

.text-decoration-line-through {
	text-decoration: line-through;
}
</style>
