import styles from "./Tasks.module.css";
export default function Tasks({ tasks, data, setData }) {
  function handleDel(tasks) {
    setData(data.filter((value) => value.id !== tasks));
  }
  function handleToggle(name) {
    setData(
      data.map((todoData) =>
        todoData.id === name
          ? { ...todoData, isCompleted: !todoData.isCompleted }
          : todoData
      )
    );
    console.log(data);
  }
  const completed = tasks.isCompleted ? styles.strikeThrough : "";

  return (
    <>
      <div className={styles.container}>
        <div className={completed} onClick={() => handleToggle(tasks.id)}>
          {tasks.name}
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
