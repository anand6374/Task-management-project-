import { Link, Outlet } from "react-router-dom";
import './Developerhomepage.css';
function Developerhomepage(){
    return(
  
        <div>
            
            <nav className="containerdeveloper">
               <Link className="developerhome" to="/developerpage/developerhome">Home</Link> 
                <Link className="linkview" to="/developerpage/developertask">view task</Link>
            <Link className="linkinfo" to="/developerpage/developerinfo">your person info</Link>
            <Link className="Gmail-Developer" to="/developerpage/developergmail">Gmail</Link>
                <Link className="linkout" to="/">Logout</Link>
            </nav>
            <Outlet/>
        </div>
    );
}
export default Developerhomepage;