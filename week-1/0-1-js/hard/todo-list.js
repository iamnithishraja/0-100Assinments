/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  result;
  constructor() {
    this.result = [];
  }
  add(item) {
    this.result.push(item);
  }
  remove(idx) {
    if (idx >= 0 && idx < this.result.length)
      this.result = [...this.result.slice(0, idx), ...this.result.slice(idx + 1, this.result.length)]
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.result.length)
      this.result[index] = updatedTodo;
  }
  getAll() {
    return this.result;
  }
  get(indexOfTodo) {
    if (indexOfTodo>=this.result.length) {
      return null;
    }
    return this.result[indexOfTodo];
  }
  clear() {
    this.result = [];
  }
}
let todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
console.log(todoList.get(0));
module.exports = Todo;
