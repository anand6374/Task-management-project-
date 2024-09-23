import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import Displayparticularemployee from "./Displayparticularemployee";
 import './Employeelogin.css';

// i will never give up
function Employeelogin() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();
//     const[getname,setgetname]=useState('');
//   const[getrole,setgetrole]=useState("");
    const roles = [
        'Admin',
        'Manager',
        'Developer'
    ];

   

    const handleLogin = async (e) => {
        
        e.preventDefault();
        console.log(name,role,password);
        const login = {
            name: name,
            role: role,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:8090/api/v1/employee/login', login, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
           
            if (response.data) {
                alert("Login successful");
                sessionStorage.setItem('employeeName',name);
                sessionStorage.setItem("employeeRole",role);
                // setgetname(name);
                // setgetrole(role);
                // navigate('/employee-tasks');
                
                if(role==="Manager"){
                    navigate('/managerpage/home');
                }
                else if(role==="Developer"){
                  navigate('/developerpage/developerhome');
                } 
                else if(role==="Admin"){
                    navigate('/adminpage/adminhome');
                  }
                setName('');
                setRole('');
                setPassword('');
            } 
        } catch (error) {
            alert('invalid name or password');
            console.error(error);
        }
    };

    return (
        <div>
            <h1 className="login">Employee Login</h1>
            <form className="container-login" onSubmit={handleLogin}>
                <div className="name">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="role">
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="" disabled>Select Role</option>
                        {roles.map((roleOption, index) => (
                            <option key={index} value={roleOption}>{roleOption}</option>
                        ))}
                    </select>
                </div>
                <div className="password">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="loginbutton" type="submit">Login</button>
                <button className="back" ><Link className="link" to="/">Back</Link></button>
            </form>
    {/* <Displayparticularemployee  getrole={getrole}  getname={getname}/> */}
        </div>
    );
   
}

export default Employeelogin;
