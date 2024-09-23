import axios from "axios";
import { useEffect, useState } from "react";
import "./Displayparticularemployee.css";

function Displayparticularemployee() {
    const register_name = sessionStorage.getItem('rname');
    const register_role = sessionStorage.getItem('rrole');
    
    const employee_name = sessionStorage.getItem('employeeName');
    const employee_role = sessionStorage.getItem('employeeRole');
    const [getemployee, setEmployeeData] = useState([]);

    const displayParticularEmployee = async (name, role) => {
        try {
            const response = await axios.get(`http://localhost:8090/api/v1/employee/getparticularemployee/${name}/${role}`);
            setEmployeeData(response.data);
        } catch (error) {
            console.log("Error fetching employee data:", error);
        }
    };

    useEffect(() => {
        const name = employee_name || register_name;  
        const role= employee_role || register_role;
        
        if (name && role) {
            displayParticularEmployee(name, role);
        } else {
            console.log("Name or Role not found in session storage");
        }
    }, [employee_name, register_name, employee_role, register_role]);
  
    return (
        <div className="container">
            <h1 className="employeeinfo">Employee Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {getemployee.length > 0 ? (
                        getemployee.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.email}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.age}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.street}</td>
                                <td>{employee.city}</td>
                                <td>{employee.pincode}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No employee data found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Displayparticularemployee;
