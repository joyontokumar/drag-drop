import { ADD_TODO_TO_PROGRESS } from "../types/types";
const initialState = {
  progress: [],
  localProgressData: [],
};

export const addToDoToProgress = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case ADD_TODO_TO_PROGRESS: {
      return {
        ...state,
        progress: [...state.progress, action.payload],
        localProgressData: localStorage.setItem(
          "progress",
          JSON.stringify([...state.progress, action.payload])
        ),
      };
    }
    default:
      return state;
  }
};
