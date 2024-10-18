import Form from "./Components/Form";
import TaskItems from "./Components/TaskItems";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [task, setTask] = useState({ name: "", isCompleted: false });
  const [data, setData] = useState([]);
  const completedTasks = data.filter((val) => val.isCompleted).length;
  const totalTasks = data.length;

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setData(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(data));
    }
  }, [data]);
  return (
    <>
      <Header />
      <Form data={data} setData={setData} task={task} setTask={setTask} />
      <TaskItems data={data} setData={setData} />
      <Footer completedTasks={completedTasks} totalTasks={totalTasks} />
    </>
  );
}
