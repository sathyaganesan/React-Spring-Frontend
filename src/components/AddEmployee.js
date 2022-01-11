import React, { useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { EmployeeContext } from '../services/EmployeeContext';

const AddEmployee = () => {

    const {first_name, setFirst_name, last_name, setLast_name, email, setEmail,
        addEmployee, getEmployeeById, updateEmployee, newEmployee} = useContext(EmployeeContext);

    const {id} = useParams(); 

    useEffect(() => {getEmployeeById(id)}, [id])

    return (
        <div>
            <br></br><br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {(id) ? <h2 className='text-center'> Update Employee</h2> : <h2 className='text-center'> Add Employee</h2>}

                        <div className='card-body'>
                            <form>

                                <div className='form-group mb-2'>
                                    <label className='form=label'> First Name</label>
                                    <input
                                        type="text"
                                        placeholder='First Name'
                                        className='form-control'
                                        value={(id) ? first_name : setFirst_name.first_name}
                                        onChange={(e) => setFirst_name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form=label'> Last Name</label>
                                    <input
                                        type="text"
                                        placeholder='Last Name'
                                        className='form-control'
                                        value={(id) ? last_name : setLast_name.last_name}
                                        onChange={(e) => setLast_name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form=label'> Email ID</label>
                                    <input
                                        type="email"
                                        placeholder='Email ID'
                                        className='form-control'
                                        value={(id) ? email : setEmail.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                {(id)? <button className='btn btn-success' onClick={(e) => { updateEmployee(id, newEmployee)}}> Update </button> :  
                                <button className='btn btn-success' onClick={(e) => {addEmployee(e)}}> Save </button>}
                                <Link to = "/" className='btn btn-danger mx-4' >Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default AddEmployee;
