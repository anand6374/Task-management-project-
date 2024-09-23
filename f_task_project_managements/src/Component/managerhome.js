import React from 'react';
import './managerhome.css';

const Managerhome = () => {
  const register_name  =sessionStorage.getItem('rname');
  const login_name  =sessionStorage.getItem('employeeName');
  const name = register_name || login_name;

  return (
    <div className="manager-homepage">
      <h1 className="manager-name">Welcome, Manager {name}</h1>
      <p className="para-manager">
        On this page, you can manage your team efficiently. Below are the key functionalities available to you:
      </p>
      <ul className="ul-list">
        <li className="view-your"><strong>View your task:</strong>Time period of project and then project domain and then you will assign task to developer</li>
        <li className="view-empoyee"><strong>View Employee Projects:</strong> Access detailed reports of your team's work, including progress updates and milestones achieved.</li>
        <li className="send-email"><strong>Send Emails:</strong> Use the communication tools to send important notifications or updates to the team members.</li>
        <li className="manage-process"><strong>Manage Processes:</strong> Oversee and streamline workflow processes by tracking progress, resolving bottlenecks, and ensuring tasks are completed in a timely manner.</li>
        <li className="assign-project"><strong>Assign Projects:</strong> Assign projects to developers, define tasks, and allocate resources to ensure timely delivery.</li>
      </ul>
      <p className="para-start">
        To get started, select the appropriate option from the navigation bar. Use the project overview section to monitor ongoing tasks and ensure project completion on time. As you manage the processes, keep track of all team activities to guarantee efficiency.
      </p>
    </div>
  );
};

export default Managerhome;
