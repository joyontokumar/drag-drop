import { ADD_TODO } from "../types/types";
const initialState = {
  todos: [],
  localTodos: [],
};

export const addTodo = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        // ...state,
        todos: [...state.todos, action.payload],
        localTodos: localStorage.setItem(
          "todos",
          JSON.stringify([...state.todos, action.payload])
        ),
      };
    }
    default:
      return state;
  }
};
