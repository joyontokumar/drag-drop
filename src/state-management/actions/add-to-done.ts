import { ADD_TODO_TO_DONE } from "../types/types";
// add to do
export const addToDoToDone = (addTodoToDoneData: any) => {
  return {
    type: ADD_TODO_TO_DONE,
    payload: addTodoToDoneData,
  };
};
