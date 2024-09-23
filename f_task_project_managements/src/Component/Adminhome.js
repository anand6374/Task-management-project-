import "./Adminhome.css";
function Adminhome() {
    const register_name = sessionStorage.getItem('rname');
    const login_name = sessionStorage.getItem('employeeName');
    const name = register_name || login_name;

    return (
        <div>
            <h1 className="admin-name">Welcome, Admin {name}</h1>
            <div className="admin-content">
                <p className="para-task">As an admin, you can manage the following tasks:</p>
                <ul className="task-list">
                    <li className="assign-task"><strong>Assign Tasks:</strong> Assign tasks to employees and track their progress.</li>
                    <li className="view-employee"><strong>View Employee Tasks:</strong> Monitor all tasks assigned to employees and view their status.</li>
                    <li className="view-information"><strong>View Employee Information:</strong> Access detailed information about all employees.</li>
                    <li className="email"><strong>Send Emails:</strong> Send notifications and important updates to employees via email.</li>
                </ul>
            </div>
        </div>
    );
}

export default Adminhome;
