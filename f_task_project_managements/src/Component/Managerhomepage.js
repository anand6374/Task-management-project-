import { Link, Outlet } from "react-router-dom";

import './Managerhomepage.css';
function Managerhomepage(){

    return(
        <div>
            <nav className="container-m">
                <ul className="navmanger">
                    <li  className="home"><Link className="home" to="/managerpage/home">Home</Link></li>
                    <li className="task"><Link className="task" to="/managerpage/addtask">Add Task</Link></li>
                    <li className="info"><Link className="info" to="/managerpage/Managerinfo">Person info</Link></li>
                    <li className="view"><Link className="view" to="/managerpage/allemployeeinfo">View Employee Info</Link></li>
                    <li className="vt"><Link className="vt" to="/managerpage/yourtask">View Task</Link></li>
                    <li className="viewall"><Link  className="viewall" to="/managerpage/allemployeetask" >View All Employee Task</Link></li>
                    <li className="gmail-m"><Link className="gmail-m" to="/managerpage/managergmail">Gmail</Link></li>
                    <li className="out"><Link className="out" to="/">Logout</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );

}
export default Managerhomepage;