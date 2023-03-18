import { combineReducers } from "redux";
import { addProgressToDone } from "./add-progress-to-done";
import { addToDoToDone } from "./add-to-done";
import { addTodo } from "./add-todo";
import { addToDoToProgress } from "./add-todo-to-progress";
const rootReducer = combineReducers({
  addTodo,
  addToDoToProgress,
  addToDoToDone,
  addProgressToDone,
});

export default rootReducer;
