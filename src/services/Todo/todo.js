import Todos from "@/services/Todo/todos.js";
class Todo extends Todos {
  constructor(todos) {
    super();
    this.todos = todos;
  }
  getTodo(type) {
    return this.todos.filter((todo) => todo.status === type);
  }
}

export default Todo;
