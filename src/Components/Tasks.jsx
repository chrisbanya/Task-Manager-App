import styles from "./Tasks.module.css";
export default function Tasks({ tasks, data, setData }) {
  function handleDel(id) {
    const updatedData = data.filter((value) => value.id !== id);
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  }
  function handleToggle(id) {
    setData(
      data.map((taskData) =>
        taskData.id === id
          ? { ...taskData, isCompleted: !taskData.isCompleted }
          : taskData
      )
    );
  }

  const completed = tasks.isCompleted ? styles.strikeThrough : "";

  return (
    <>
      <div className={styles.container}>
        <div>
          <input
            type="checkbox"
            onClick={() => handleToggle(tasks.id)}
            className={styles.checkBox}
          />
          <span className={completed}>{tasks.name}</span>
        </div>
        <div>
          <button className={styles.delBtn} onClick={() => handleDel(tasks.id)}>
            Del
          </button>
        </div>
      </div>
      <hr className={styles.cBanya} />
    </>
  );
} 
