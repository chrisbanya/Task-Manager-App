import styles from "./Form.module.css";
export default function Form({ data, setData, task, setTask }) {
  function handleChange(e) {
    e.preventDefault();
    setTask({ name: e.target.value, isCompleted: false });
  }

  function handleAdd(e) {
    e.preventDefault();
    if (task.name.trim() === "" ) {
      alert("Task cannot be empty");
      return;
  }
  else if (task.name.length <= 1) {
    alert("Task too short");
    return;
  }
    const newTask = { ...task, id: Date.now() };
    setData([...data, newTask]);
    // setData([...data, task]);
    setTask({ name: "", isCompleted: false });
  }
  return (
    <form className={styles.container}>
      <div className={styles.wrapperDiv}>
        <div>
          <input
            className={styles.inputBox}
            placeholder="Enter task here..."
            type="text"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className={styles.addBtn} onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
