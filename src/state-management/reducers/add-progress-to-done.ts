import { ADD_PROGRESS_TO_DONE } from "../types/types";
const initialState = {
  progressToDones: [],
  localProgressToDoneData: [],
};

export const addProgressToDone = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case ADD_PROGRESS_TO_DONE: {
      return {
        ...state,
        progressToDones: [...state.progressToDones, action.payload],
        localProgressToDoneData: localStorage.setItem(
          "done",
          JSON.stringify([...state.progressToDones, action.payload])
        ),
      };
    }
    default:
      return state;
  }
};
