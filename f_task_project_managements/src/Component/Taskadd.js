import { useState } from "react";
import axios from 'axios';
import "./taskadd.css";
function Task() {
  const [pname, setpname] = useState('');
  const [prequirement, setprequirement] = useState('');
  const [clientname, setclientname] = useState('');
  const [manager, setmanagername] = useState('');
  const [developer, setdeveloper] = useState('');
  const [timeperiod, settimeperiod] = useState('');
  const [startdate, setstartdate] = useState('');
  const [deadline, setdeadline] = useState('');

  const handletask = async (e) => {
    e.preventDefault();
    const task = {
      projectname: pname,
      projectrequirement: prequirement,
      projectclientname: clientname,
      managername: manager,
      developername: developer,
      timeperiod: timeperiod,
      startdate: startdate,
      deadline: deadline,
    };

    try {
      const response = await axios.post('http://localhost:8090/api/v1/task/savetask', task, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data) {
        alert("Task added successfully");
        setpname("");
   setprequirement("");
   setclientname("");
   setmanagername("");
   setdeveloper("");
   settimeperiod("");
   setstartdate("");
    setdeadline("");
      } else {
        alert('Error task adding process');
      }
      console.log('Task saved successfully:', response.data);
    } catch (error) {
      console.error('There was an error saving the task:', error);
    }
  };

  return (
    <div>
      <h1 className="createtask">Create Task</h1>
      <form className="container">
        <div className="project_name">
          <label>Project Name:</label>
          <input
            type="text"
            value={pname}
            onChange={(e) => setpname(e.target.value)}
          />
        </div>

        <div className="project_requirement">
          <label>Project Requirement:</label>
          <input
            type="text"
            value={prequirement}
            onChange={(e) => setprequirement(e.target.value)}
          />
        </div>

        <div className="Client_name">
          <label>Client Name:</label>
          <input
            type="text"
            value={clientname}
            onChange={(e) => setclientname(e.target.value)}
          />
        </div>

        <div className="manager_name">
          <label>Manager Name:</label>
          <input
            type="text"
            value={manager}
            onChange={(e) => setmanagername(e.target.value)}
          />
        </div>

        <div className="developer_name">
          <label>Developer Name:</label>
          <input
            type="text"
            value={developer}
            onChange={(e) => setdeveloper(e.target.value)}
          />
        </div>

        <div className="time_period">
          <label>Time Period:</label>
          <input
            type="text"
            value={timeperiod}
            onChange={(e) => settimeperiod(e.target.value)}
          />
        </div>

        <div className="start_date">
          <label>Start Date:</label>
          <input
            type="date"
            value={startdate}
            onChange={(e) => setstartdate(e.target.value)}
          />
        </div>
        
        <div className="dead_line">
          <label>Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setdeadline(e.target.value)}
          />
        </div>

        <button className="button" onClick={ handletask}>Create Task</button>
      </form>
    </div>
  );
}

export default Task;
