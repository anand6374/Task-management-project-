import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  "./Displaytask.css";
function Displaytask() {
  const [tasks, setTasks] = useState([]); 
  const [error, setError] = useState(""); 

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8090/api/v1/task/displaytask');
      setTasks(response.data); 
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'> 
      <h1 className='list'>Task List</h1>
      <table >
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Requirement</th>
            <th>Client Name</th>
            <th>Manager Name</th>
            <th>Developer Name</th>
            <th>Time Period</th>
            <th>Start Date</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((tasks, index) => (
            <tr key={index}>
              <td>{tasks.projectname}</td>
              <td>{tasks.projectrequirement}</td>
              <td>{tasks.projectclientname}</td>
              <td>{tasks.managername}</td>
              <td>{tasks.developername}</td>
              <td>{tasks.timeperiod}</td>
              <td>{tasks.startdate}</td>
              <td>{tasks.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Displaytask;
