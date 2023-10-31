export default function TaskRow({ task, toggleTask }) {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox"
          value={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}
