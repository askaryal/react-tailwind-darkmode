import { useEffect, useState } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-colors-sheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompeted, setShowCompeted] = useState(false);
  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    console.log(task);
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };
  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompeted(false);
  };
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <>
      <div className="h- h-screen flex justify-center items-center dark:bg-neutral-900">
        <div className="absolute top-0 left-0">
          <button
            className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
            onClick={handleChangeTheme}
          >
            Change Theme
          </button>
        </div>
        <div className="pt-6">
          <div className="pb-8 flex justify-center items-center">
            <TaskCreator createNewTask={createNewTask} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <TaskTable
                tasks={tasksItems}
                toggleTask={toggleTask}
                run
                title="Tareas pendientes"
              />
            </div>
            <div>
              <VisibilityControl
                isChecked={showCompeted}
                setShowCompeted={(checked) => setShowCompeted(checked)}
                cleanTasks={cleanTasks}
              />
            </div>
            <div>
              {showCompeted === true && (
                <TaskTable
                  tasks={tasksItems}
                  toggleTask={toggleTask}
                  showCompeted={showCompeted}
                  title="Tareas realizadas"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
