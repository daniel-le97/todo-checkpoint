import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
  let template = "";
  appState.todos.forEach((t) => (template += t.TodoTemplate));
  setHTML("todos-list", template);
  let completed = appState.todos.filter((t) => t.completed == false);

  setText("count", completed.length);
}
function _drawTodoCard() {
  let template = "";
  template += /*html*/ `
    <div class="card glass w-100 " >
      <div class="card-header d-flex justify-content-between">
        <div class="text-shadow">ToDo Tasks</div>
        <div><span id="count" class="text-shadow"></span> left</div>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush overflow-auto height"  id="todos-list">
          <!-- drawing todos here STUB -->
          
        </ul>
      </div>
      <div class="card-footer ">
        <form onsubmit="app.todosController.addTodo()">
          <div class="col-md-12 d-flex justify-content-evenly">
            <input
              type="text "
              class="w-auto"
              name="description"
              maxlength=""
              required />
            <button class="btn btn-primary" type="submit">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
    
    
    
    `;
  setHTML("todo-card", template);
}

export class TodosController {
  constructor() {
    _drawTodoCard();
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
        Pop.toast("deleted");
      }
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }

  async addTodo(formData) {
    try {
      window.event.preventDefault();

      if (appState.todos.length >= 10) {
        await Pop.toast(
          "Work on completing some todos before adding more!",
          "warning",
          "center",
          5000,
          true
        );
        return;
      }

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
