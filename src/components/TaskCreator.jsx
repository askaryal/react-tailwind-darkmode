import { useState } from "react";

export default function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter a new task"
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900">
            Save Task
          </button>
        </div>
      </form>
    </>
  );
}
