import { useState } from "react";
import TodoAdder from "./components/todo_adder/TodoAdder";
import TodoItem from "./components/todo_item/TodoItem";

function App() {
  const [todoItems, todoItemsSetter] = useState([]);
  const [currTitle, setCurrTitle] = useState("");
  const [currDesc, setCurrDesc] = useState("");

  return (
    <div>
      <TodoAdder
        title={currTitle}
        description={currDesc}
        AddListItem={(data) => {
          todoItemsSetter((prev) => [...prev, data]);
        }}
      />
      {todoItems.map((item) => (
        <TodoItem
          id={item.id}
          title={item.title}
          description={item.description}
          deleteItem={(idx) => {
            todoItemsSetter((prevTodos) =>
              prevTodos.filter((prevTodo) => prevTodo.id != idx)
            );
          }}
        />
      ))}
    </div>
  );
}

export default App;
