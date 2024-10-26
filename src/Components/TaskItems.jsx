import Tasks from "./Tasks";

export default function TaskItems({ data, setData }) {
  console.time("sort")
  const sortedTasks = data.slice().sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
  console.timeEnd("sort")
  return (
    <div>
      {sortedTasks.map((tasks) => (
        <Tasks key={tasks.id} tasks={tasks} data={data} setData={setData}/>
      ))}
    </div>
  );
}
