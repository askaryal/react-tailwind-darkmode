export default function VisibilityControl({
  isChecked = true,
  setShowCompeted,
  cleanTasks,
}) {
  const handleDelete = () => {
    if (window.confirm("Are you sure ypu want to delete it?")) {
      cleanTasks();
    }
  };
  return (
    <div className=" dark:text-white">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompeted(e.target.checked)}
      />
      <label> Show tasks Done </label>
      <button
        className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-red-600 dark:text-white dark:hover:bg-red-500"
        onClick={handleDelete}
      >
        Clear
      </button>
    </div>
  );
}
