import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  CROSS_NOTE,
  DISPLAY_TODOS,
} from "../types.js";

export default (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          text: action.payload.text,
          crossed: false,
          id: action.payload.id,
        },
      ];

    case DELETE_NOTE:
      return [...state.filter((item) => item.id !== action.payload)];
    case EDIT_NOTE:
      return [
        ...state.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
      ];
    case CROSS_NOTE:
      return [
        ...state.map((item) =>
          item.id === action.payload
            ? { ...item, crossed: item.crossed === true ? false : true }
            : item
        ),
      ];
    case DISPLAY_TODOS:
      const todosFromLS = JSON.parse(localStorage.getItem("todos"));
      return [...todosFromLS];
  }
};
