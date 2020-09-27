import React from 'react'
import 'axios'

const Tasks = ({ tasks }) => {
  return (
    <div>
      <center><h1>Task List</h1></center>
      {tasks.map((task, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{task.title.rendered}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{task.task_status}</h6>
            <p className="card-text" dangerouslySetInnerHTML={{__html:task.content.rendered}}></p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Tasks;
