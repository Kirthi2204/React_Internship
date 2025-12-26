import './TaskList.css';
function TaskList(){
  const tasks = [
    {
      id : 1,
      title : "Learn React",
      description : "Basis of the react by using components, props, and the functions",
      status : "completed",
    },
    {
      id : 2,
      title : "Practice Coding",
      description : "Create some tasks related to the above tasks",
      status : "completed",
    },
    {
      id : 3,
      title : "Map Concept and event handling",
      description : "In the concept rendering map and the event handling their required tasks",
      status : "in-progress",
    },
    {
      id : 4,
      title : "Assignment Task",
      description : "Assignment task where complete before the time duration process",
      status : "pending",
    }
  ];

  return (
    <div classname = "container">
    <h1 className='container'>Task List</h1>
    {tasks.map((task) => (
        <div key={task.id} className={`task-card ${task.status}`}>
          <h3 className="task-title">{task.title}</h3>
          <p className="task-desc">{task.description}</p>

          <p className="task-status">
            Status:
            <b>
              {task.status === "completed" && " Completed "}
              {task.status === "in-progress" && " In Progress "}
              {task.status === "pending" && " Pending "}
            </b>
          </p>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
