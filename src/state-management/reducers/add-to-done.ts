import { ADD_TODO_TO_DONE } from "../types/types";
const initialState = {
  dones: [],
  localDoneData: [],
};

export const addToDoToDone = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case ADD_TODO_TO_DONE: {
      return {
        ...state,
        dones: [...state.dones, action.payload],
        localDoneData: localStorage.setItem(
          "done",
          JSON.stringify([...state.dones, action.payload])
        ),
      };
    }
    default:
      return state;
  }
};
