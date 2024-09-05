import './App.css';
import React, { useState } from "react";
import TagComponent from './TagComponent';


const TaskComponent = () => {

  const [taskData, setData] = useState({
    task: "",
    status: "todo",
    tags:[]
  });


  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;


    setData(prev => {
      return {...prev,[name]: value };
    })
  }
  
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(taskData);
    
  }

  return (
    <div>
      <header className="app_header">

        <form onSubmit={handleSubmission}>
          <input type="text" name ="task" className="app_input" placeholder="Input Task" onChange={handleChange} />
          <div className="input_task">
          <TagComponent name = 'JAVA'/>
          <TagComponent name = 'C++'/>
          <TagComponent name = 'DESIGN'/>
          <TagComponent name = 'OTHER'/>

            <select className='task_status' name ='status'onChange={handleChange}>
              <option value="todo">TO DO</option>
              <option value="indev">IN DEVELOPMENT</option>
              <option value="complete">COMPLETE</option>
            </select>
            <button type='submit' className='enter_task'>ADD TASK</button>
          </div>
        </form>
      </header>



    </div>

  );
}

export default TaskComponent;
