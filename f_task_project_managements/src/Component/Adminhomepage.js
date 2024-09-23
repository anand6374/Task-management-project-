import { Link, Outlet } from "react-router-dom";
import './Adminhomepage.css';
function Adminhomepage(){
    return( 
        <div>
            
           <nav className="conatineradmin">
            <ul className="adminullist">
                <li className="homeadmin"><Link className="homeadmin" to="/adminpage/adminhome">Home</Link></li>
                <li className="adminaddtask"><Link className="adminaddtask" to="/adminpage/addemployeetask">Add Task</Link></li>
                <li className="adminalltask"><Link  className="adminalltask" to="/adminpage/alltask">View All Employee Task</Link></li>
                <li className="personaladmininfo"><Link className="personaladmininfo" to="/adminpage/personalinfo">personal info</Link></li>
                <li className="allemployeeadmin"><Link className="allemployeeadmin" to="/adminpage/allemployee">ALL Employee info</Link></li>
                <li className="logoutadmin"><Link  className="logoutadmin" to="/">Logout</Link></li>
            </ul>

           </nav>
           <Outlet/>
        </div>
    );
}
export default Adminhomepage;