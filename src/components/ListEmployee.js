import React, { useEffect, useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { EmployeeContext } from "../services/EmployeeContext";

const ListEmployee = () => {

    const { employees, getEmployees, deleteEmployee} = useContext(EmployeeContext);

    const navigate = useNavigate();

    useEffect(() => {getEmployees()}, []);

    return (
        <div className="container">
            <h2 className="text-center"> Employees List </h2>
            <Link to = '/add-emp' className="btn btn-primary mb-2"> Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    {/* <th>Emp ID</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(item => 
                            <tr key={item.emp_id}>
                                {/* <td>{item.emp_id}</td> */}
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className = "btn btn-info" onClick={() => {navigate(`/edit-emp/${item.emp_id}`)}}> Edit </button>
                                    <Link to = "/" className="btn btn-danger mx-4" onClick={() => deleteEmployee(item.emp_id)}> Delete</Link>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee;


