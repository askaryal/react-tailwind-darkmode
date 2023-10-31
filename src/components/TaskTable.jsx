import TaskRow from "./TaskRow";

export default function TaskTable({
  tasks,
  toggleTask,
  showCompeted = false,
  title,
}) {
  const taskTableRows = () => {
    return tasks
      .filter((task) => task.done === showCompeted)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));
  };
  return (
    <table className=" dark:text-white">
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>{taskTableRows()}</tbody>
    </table>
  );
}
