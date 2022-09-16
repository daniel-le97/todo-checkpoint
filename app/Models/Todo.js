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
        <input type="checkbox" name="" id="" onchange="app.todosController.checkTodo('${
          this.id
        }')" ${this.completed ? "checked" : ""} />
        <span>${this.description}</span>
        <i class="mdi mdi-delete-forever" onclick="app.todosController.removeTodo('${
          this.id
        }')"></i>
      </div>
    </li>
    `;
  }

  TodoData() {
    {
      `
    "_id": "60d3edfad95a9f0015f8aaa1",
    "completed": false,
    "description": "toggle time",
    "user": "daniel",
    "createdAt": "2021-06-24T02:29:14.273Z",
    "updatedAt": "2022-04-07T02:13:56.954Z",
    "__v": 0,
    "id": "60d3edfad95a9f0015f8aaa1"`;
    }
  }
}
