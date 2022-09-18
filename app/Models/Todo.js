export class Todo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed || false;
    this.description = data.description;
    this.user = data.user;
  }

  get TodoTemplate() {
    return /*html*/ `
    
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <input type="checkbox" name="" id="" onchange="app.todosController.checkTodo('${this.id}')" ${this.completed ? "checked" : ""} />
        <div class=" d-flex flex-wrap">
        <span>${this.description}</span>
        </div>
        <i class="mdi mdi-delete-forever" onclick="app.todosController.removeTodo('${this.id}')"></i>
      </div>
    </li>
    `;
  }
}

