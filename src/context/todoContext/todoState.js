import {
  DELETE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  CROSS_NOTE,
  DISPLAY_TODOS,
} from "../types.js";
import React, { useReducer, createContext } from "react";
import todoReducer from "./todoReducer";
import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext();
const { Provider } = TodoContext;
function TodoState(props) {
  const initialState = [];
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addNote = (text) => {
    const id = uuidv4();
    dispatch({
      type: ADD_NOTE,
      payload: {
        text: text,
        id: id,
      },
    });
  };
  const deleteNote = (id) => {
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  };
  const editNote = (text, id) => {
    dispatch({
      type: EDIT_NOTE,
      payload: {
        text,
        id,
      },
    });
  };
  const setCrossed = (id) => {
    dispatch({
      type: CROSS_NOTE,
      payload: id,
    });
  };
  const displayTodos = () => {
    dispatch({
      type: DISPLAY_TODOS,
    });
  };

  return (
    <Provider
      value={{
        todos: state,
        addNote,
        deleteNote,
        editNote,
        setCrossed,
        displayTodos,
      }}
    >
      {props.children}
    </Provider>
  );
}

export default TodoState;
