import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
  let template = "";
  appState.todos.forEach((t) => (template += t.TodoTemplate));
  setHTML("todos-list", template);
}

export class TodosController {
  constructor() {
    this.getTodos();
    appState.on("todos", _drawTodos);
  }

  async checkTodo(id) {
    try {
      await todosService.checkTodo(id);
    } catch (error) {
      console.error("[checkTodo]", error);
      Pop.error(error);
    }
  }

  async removeTodo(id) {
    try {
      if (await Pop.confirm("are you done with this ToDo?")) {
        await todosService.removeTodo(id);
      }
      Pop.toast("deleted");
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }

  async addTodo(formData) {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      await todosService.addTodo(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      console.error("[getTodos]", error);
      Pop.error(error);
    }
  }
}
