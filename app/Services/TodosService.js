import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { BcwServer } from "./AxiosService.js";

class TodosService {
  async checkTodo(id) {
    let checkedTodo = appState.todos.find((c) => c.id == id);
    if (!checkedTodo) {
      throw new Error("bad id");
    }
    checkedTodo.completed = !checkedTodo.completed;
    const res = await BcwServer.put(
      `/${appState.user}/todos/${id}`,
      checkedTodo
    );

    checkedTodo.completed = res.data.completed;
    appState.emit("todos");
  }
  async removeTodo(id) {
    const res = await BcwServer.delete(`/${appState.user}/todos/` + id);
    // console.log(res.data);
    appState.todos = appState.todos.filter((t) => t.id !== id);
  }
  async addTodo(formData) {
    const res = await BcwServer.post(`/${appState.user}/todos`, formData);
    appState.todos = [...appState.todos, new Todo(res.data)];
    // console.log(res.data);
  }
  async getTodos() {
    const res = await BcwServer.get(`/${appState.user}/todos`);
    // console.log(res.data);
    appState.todos = res.data.map((t) => new Todo(t));
  }
  //
}
export const todosService = new TodosService();
