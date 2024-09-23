import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./DisplayEmployeetask.css";
function DisplayEmployeetask() 
// props used    ... next
{
    //    const  {getname}=props;
    //    console.log("value manage",getname)
    const [tasks, setTasks] = useState([]);
   const register_name      =sessionStorage.getItem('rname');
    // const employee_name = getname; 
    const employee_name=sessionStorage.getItem('employeeName');
   
    useEffect(() => {
          const name=  register_name||employee_name;// or gate used

        if(name){
            fetchTasks(name); 
        }
      
    }, [employee_name,register_name]);
    
    const fetchTasks = async (name) => {
        try {
            const response = await axios.get(`http://localhost:8090/api/v1/task/employee/${name}`);
            setTasks(response.data);
            
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    return (
        <div className='container'>
            <h1 className='yourtask'>Your Task</h1>
            
                <table>
                    <thead>
                        <tr>
                            
                            <th>Project Name</th>
                            <th>Project Requirement</th>
                            <th>Client Name</th>
                            <th>Manager Name</th>
                            <th>Developer Name</th>
                            <th>Time Period</th>
                            <th>Start Date</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task}>
                            
                                <td>{task.projectname}</td>
                                <td>{task.projectrequirement}</td>
                                <td>{task.projectclientname}</td>
                                <td>{task.managername}</td>
                                <td>{task.developername}</td>
                                <td>{task.timeperiod}</td>
                                <td>{task.startdate}</td>
                                <td>{task.deadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           
        </div>
    );
}

export default DisplayEmployeetask;
