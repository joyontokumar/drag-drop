import { ADD_TODO_TO_PROGRESS } from "../types/types";
// add to do
export const addToDoToProgress = (addTodoToProgressData: any) => {
  console.log("add to do to progress action", addTodoToProgressData);
  return {
    type: ADD_TODO_TO_PROGRESS,
    payload: addTodoToProgressData,
  };
};
