import axios from "axios";
import { useEffect, useState } from "react";
import './Displayparticularemployee';
function Displayallworker() {
    const [employeedata, setemployeedata] = useState([]);
    const [error, seterror] = useState('');

    const fetchEmployee = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/v1/employee/displayemployee');
            setemployeedata(response.data);
        } catch (error) {
            seterror(error.message);
        }
    };
    useEffect(() => {
        fetchEmployee();
    }, [])
    return (
        <div className="container">
            <h1 className="allemployee">All Employee </h1>
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
                    {employeedata.map((employeedata, index) => (
                        <tr key={index}>
                            <td>{employeedata.name}</td>
                            <td>{employeedata.role}</td>
                            <td>{employeedata.email}</td>
                            <td>{employeedata.gender}</td>
                            <td>{employeedata.age}</td>
                            <td>{employeedata.mobile}</td>
                            <td>{employeedata.street}</td>
                            <td>{employeedata.city}</td>
                            <td>{employeedata.pincode}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <p>{error}</p>
        </div>
    );
}
export default Displayallworker;