import { ADD_PROGRESS_TO_DONE } from "../types/types";
// add to do
export const addProgressToDone = (addProgressToData: any) => {
  return {
    type: ADD_PROGRESS_TO_DONE,
    payload: addProgressToData,
  };
};
