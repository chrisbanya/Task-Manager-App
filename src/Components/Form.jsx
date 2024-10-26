import { useRef } from "react";
import styles from "./Form.module.css";
export default function Form({ data, setData, task, setTask }) {
  const inputRef = useRef(null)
  function handleChange(e) {
    e.preventDefault();
    setTask({ name: e.target.value, isCompleted: false });
  }


  function handleAdd(e) {
    e.preventDefault();
    // my validations for empty spaces and single chars. add more later...
    if (task.name.trim() === "") {
      alert("Task cannot be empty");
      inputRef.current.focus()
      return;
    } else if (task.name.trim().length <= 1) {
      alert("Task too short");
      return;
    }
    const newTask = { ...task, id: Date.now() };
    setData([newTask, ...data]);
    setTask({ name: "", isCompleted: false });
  }
  
  return (
    <form className={styles.container}>
      <div className={styles.wrapperDiv}>
        <div className={styles.inputDiv}>
          <input
            className={styles.inputBox}
            placeholder="Enter task here..."
            type="text"
            value={task.name}
            onChange={handleChange}
            ref={inputRef}
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
