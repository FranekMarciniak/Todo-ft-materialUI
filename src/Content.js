import React, { useContext, useEffect } from "react";
import List from "@material-ui/core/List";
import Item from "./Item";
import { TodoContext } from "./context/todoContext/todoState";

function Content() {
  const todoContext = useContext(TodoContext);
  const { todos, displayTodos } = todoContext;
  useEffect(() => {
    const allTodos = JSON.stringify(todos);
    if (!localStorage.todos) {
      localStorage.setItem("todos", allTodos);
    } else {
      displayTodos();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <List>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id}></Item>
      ))}
    </List>
  );
}

export default Content;
