 import "./Developerhome.css";
function Developerhome() {
    const register_name = sessionStorage.getItem('rname');
    const login_name = sessionStorage.getItem('employeeName');
    const name = register_name || login_name;

    return (
        <div>
            <div className="developer-conatiner"> 
            <h1 className="developer-name">Welcome, Developer {name}</h1>
            <p className="developer-task">As a developer, you can manage the following tasks:</p>
            <ul className="instruction">
                <li className="li-1">View the tasks assigned to you and their status.</li>
                <li className="li-2">Check and update your personal information.</li>
                <li className="li-3">Send emails regarding your work updates or queries to management.</li>
            </ul>

            <p className="follow">Use the navigation to access the following:</p>
            <ul className="task-collection">
                <li className="view-dtask">View Assigned Tasks: Get a detailed view of all tasks assigned to you, along with deadlines and status.</li>
                <li className="view-info">Personal Information: View or update your personal details like email, address, and contact information.</li>
                <li className="Email-element">Send Email: Communicate directly with the admin or your manager regarding task updates or queries.</li>
            </ul>
            </div>
        </div>
    );
}

export default Developerhome;
