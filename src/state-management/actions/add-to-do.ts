import { ADD_TODO } from "../types/types";

// add to do
export const addToDo = (addTodoData: any) => {
  console.log("get add todo action", addTodoData);
  return {
    type: ADD_TODO,
    payload: addTodoData,
  };
};
