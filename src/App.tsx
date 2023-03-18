import { useState } from "react";
import { connect } from "react-redux";
import { addProgressToDone } from "./state-management/actions/add-progress-to-done";
import { addToDo } from "./state-management/actions/add-to-do";
import { addToDoToDone } from "./state-management/actions/add-to-done";
import { addToDoToProgress } from "./state-management/actions/add-todo-to-progress";
const App = ({
  addToDo,
  addToDoToProgress,
  addToDoToDone,
  addProgressToDone,
}: any) => {
  // get local storage data
  const todos = JSON.parse(localStorage.getItem("todos") as any);
  const progress = JSON.parse(localStorage.getItem("progress") as any);
  const done = JSON.parse(localStorage.getItem("done") as any);
  const [todoItemName, setTodoItemName] = useState<string>("");
  const addTodoItems = () => {
    if (todoItemName !== "") {
      addToDo({
        item: todoItemName,
        id: (Math.random() + 1).toString(36).substring(7),
        type: "todo",
      });
      setTodoItemName("");
    }
  };

  // todo drag start
  const dragStart = (e: any) => {
    e?.dataTransfer?.setData("text", e?.target?.id);
    e?.dataTransfer?.setData("todo_to_progress", 12);
    e?.dataTransfer?.setData("todo_to_done", 14);
    e?.dataTransfer?.setData("progress_to_todo", 15);
    e?.dataTransfer?.setData("done_to_todo", 16);
    e?.dataTransfer?.setData("progress_to_done", 17);
  };
  const dragOver = (e: any) => {
    e.preventDefault();
  };
  // todo to progress
  const todoToProgress = (e: any, textValue: any) => {
    e?.preventDefault();
    let sedd = e?.dataTransfer.getData("todo_to_progress");
    if (textValue === "todotoprogress" && sedd === "12") {
      let dropedTodoId = e?.dataTransfer.getData("text");
      let todosLocalData = JSON?.parse(localStorage.getItem("todos") as any);
      let progressData = JSON.parse(localStorage.getItem("progress") as any);
      // eslint-disable-next-line
      let exitsTodos = todosLocalData?.filter((single: any) => {
        if (single?.id !== dropedTodoId) {
          return single;
        }
        // todo ta k progress er morday add

        if (single?.id === dropedTodoId) {
          if (progressData) {
            localStorage.setItem(
              "progress",
              JSON.stringify([
                ...progressData,
                {
                  item: single.item,
                  id: single.id,
                  type: "progress",
                },
              ])
            );
          } else {
            addToDoToProgress({
              item: single.item,
              id: single.id,
              type: "progress",
            });
          }
        }
      });
      localStorage.setItem("todos", JSON.stringify(exitsTodos));
      var data = e?.dataTransfer?.getData("text");
      e?.target?.appendChild(document?.getElementById(data));
    }
  };

  //  todo to done
  const todoDropDone = (e: any, textValue: any) => {
    e?.preventDefault();
    let sedd = e?.dataTransfer.getData("todo_to_done");
    if (textValue === "todotodone" && sedd === "14") {
      let dropedTodoId = e?.dataTransfer.getData("text");
      let todosLocalData = JSON?.parse(localStorage.getItem("todos") as any);
      let doneLocalData = JSON.parse(localStorage.getItem("done") as any);
      // eslint-disable-next-line
      let exitsTodos = todosLocalData?.filter((single: any) => {
        if (single?.id !== dropedTodoId) {
          return single;
        }
        // todo ta k progress er morday add

        if (single?.id === dropedTodoId) {
          if (doneLocalData) {
            localStorage.setItem(
              "done",
              JSON.stringify([
                ...doneLocalData,
                {
                  item: single.item,
                  id: single.id,
                  type: "done",
                },
              ])
            );
          } else {
            addToDoToDone({
              item: single.item,
              id: single.id,
              type: "done",
            });
          }
        }
      });
      localStorage.setItem("todos", JSON.stringify(exitsTodos));
      var data = e?.dataTransfer?.getData("text");
      e?.target?.appendChild(document?.getElementById(data));
    }
  };

  // progress to todo
  const dropProgressTodo = (e: any, textValue: any) => {
    e?.preventDefault();
    const uniqueValue = e?.dataTransfer.getData("progress_to_todo");
    if (textValue === "progresstotodo" && uniqueValue === "15") {
      let dropedTodoId = e?.dataTransfer.getData("text");
      let progressLocalData = JSON?.parse(
        localStorage.getItem("progress") as any
      );
      let todosData = JSON.parse(localStorage.getItem("todos") as any);
      // eslint-disable-next-line
      let exitsProgress = progressLocalData?.filter((single: any) => {
        if (single?.id !== dropedTodoId) {
          return single;
        }
        // progress thake todo te add
        if (single?.id === dropedTodoId) {
          localStorage.setItem(
            "todos",
            JSON.stringify([
              ...todosData,
              {
                item: single.item,
                id: single.id,
                type: "todo",
              },
            ])
          );
        }
      });
      localStorage.setItem("progress", JSON.stringify(exitsProgress));
      var data = e?.dataTransfer?.getData("text");
      e?.target?.appendChild(document?.getElementById(data));
    }
  };

  // done to todo
  const dropDoneToDo = (e: any, textValue: any) => {
    e?.preventDefault();
    const uniqueValue = e?.dataTransfer.getData("done_to_todo");
    if (textValue === "donetotodo" && uniqueValue === "16") {
      let dropedTodoId = e?.dataTransfer.getData("text");
      let doneLocalData = JSON?.parse(localStorage.getItem("done") as any);
      let todosData = JSON.parse(localStorage.getItem("todos") as any);
      // eslint-disable-next-line
      let exitsDone = doneLocalData?.filter((single: any) => {
        if (single?.id !== dropedTodoId) {
          return single;
        }
        // done thake todo te add
        if (single?.id === dropedTodoId) {
          localStorage.setItem(
            "todos",
            JSON.stringify([
              ...todosData,
              {
                item: single.item,
                id: single.id,
                type: "todo",
              },
            ])
          );
        }
      });
      localStorage.setItem("done", JSON.stringify(exitsDone));
      var data = e?.dataTransfer?.getData("text");

      e?.target?.appendChild(document?.getElementById(data));
    }
  };

  // progress to done
  const dropProgressToDone = (e: any, textValue: any) => {
    e?.preventDefault();
    const uniqueValue = e?.dataTransfer.getData("progress_to_done");
    if (textValue === "progresstodone" && uniqueValue === "17") {
      let dropedTodoId = e?.dataTransfer.getData("text");
      let progressLocalData = JSON?.parse(
        localStorage.getItem("progress") as any
      );
      let doneLocalData = JSON.parse(localStorage.getItem("done") as any);
      // eslint-disable-next-line
      let exitsProgress = progressLocalData?.filter((single: any) => {
        if (single?.id !== dropedTodoId) {
          return single;
        }
        if (single?.id === dropedTodoId) {
          if (doneLocalData) {
            localStorage.setItem(
              "done",
              JSON.stringify([
                ...doneLocalData,
                {
                  item: single.item,
                  id: single.id,
                  type: "done",
                },
              ])
            );
          } else {
            addProgressToDone({
              item: single.item,
              id: single.id,
              type: "done",
            });
          }
        }
      });
      localStorage.setItem("progress", JSON.stringify(exitsProgress));
      var data = e?.dataTransfer?.getData("text");
      e?.target?.appendChild(document?.getElementById(data));
    }
  };

  return (
    <div className="tasks-page">
      <div className="container">
        <div className="add-task">
          <input
            onChange={(e: any) => {
              setTodoItemName(e?.target?.value);
            }}
            type="text"
            placeholder="Write your task..."
          />
          <button className="add-btn" onClick={addTodoItems}>
            Add
          </button>
        </div>
        <div className="task-group-wrapper">
          <div className="single-task-group">
            <h5 className="sub-title">To Do</h5>
            <div
              className="single-task-wrapper to-do"
              onDragOver={(event) => {
                dragOver(event);
              }}
              onDrop={(event: any) => {
                dropProgressTodo(event, "progresstotodo");
                dropDoneToDo(event, "donetotodo");
              }}
              draggable={true}
            >
              {todos?.length > 0
                ? todos?.map((todo: any, index: any) => (
                    <div
                      className="single-todo-task"
                      key={index}
                      draggable="true"
                      id={todo?.id}
                      onDragStart={(event: any) => {
                        dragStart(event);
                      }}
                    >
                      <h4>{todo?.item}</h4>
                    </div>
                  ))
                : undefined}
            </div>
          </div>
          <div className="single-task-group">
            <h5 className="sub-title">In Progress</h5>
            <div
              className="single-task-wrapper in-progress"
              onDragOver={(event) => {
                dragOver(event);
              }}
              onDrop={(event: any) => {
                todoToProgress(event, "todotoprogress");
              }}
            >
              {progress?.length > 0
                ? progress?.map((progress: any, index: any) => (
                    <div
                      className="single-todo-task"
                      key={index}
                      draggable="true"
                      id={progress?.id}
                      onDragStart={(event: any) => {
                        dragStart(event);
                      }}
                    >
                      <h4>{progress?.item}</h4>
                    </div>
                  ))
                : undefined}
            </div>
          </div>

          <div className="single-task-group">
            <h5 className="sub-title">Done</h5>
            <div
              className="single-task-wrapper done"
              onDragOver={(event) => {
                dragOver(event);
              }}
              onDrop={(event: any) => {
                todoDropDone(event, "todotodone");
                dropProgressToDone(event, "progresstodone");
              }}
              draggable={true}
            >
              {done?.length > 0
                ? done?.map((done: any, index: any) => (
                    <div
                      className="single-todo-task"
                      key={index}
                      draggable="true"
                      id={done?.id}
                      onDragStart={(event: any) => {
                        dragStart(event);
                      }}
                    >
                      <h4>{done?.item}</h4>
                    </div>
                  ))
                : undefined}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addToDo: (data: any) => dispatch(addToDo(data)),
    addToDoToProgress: (data: any) => dispatch(addToDoToProgress(data)),
    addToDoToDone: (data: any) => dispatch(addToDoToDone(data)),
    addProgressToDone: (data: any) => dispatch(addProgressToDone(data)),
  };
};
export default connect(null, mapDispatchToProps)(App);
