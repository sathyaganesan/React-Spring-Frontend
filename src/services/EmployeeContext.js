import React, {useState, createContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {

    const [employees, setEmployees] = useState([]);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

// To get employee list:
    const getEmployees = () => {
        return axios
        .get(`http://localhost:8080/api/v1/employees`)
        .then((res) => {
            console.log("Get Emp List", res.data);
            setEmployees(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

// To add new employee to the list:
    const newEmployee = {first_name, last_name, email};
    const addEmployee = (e) => {
        e.preventDefault();
        return axios
        .post(`http://localhost:8080/api/v1/employees`, newEmployee)
        .then((res) => {
            navigate('/');
            console.log("Add Employee", res.data);
        })
        .catch((err) => console.log(err));
    }

// To delete the employee from the list 
    const deleteEmployee = (item) => {
        axios
        .delete(`http://localhost:8080/api/v1/employees/${item}`)
        .then((res) => {
            console.log(res.data)
            getEmployees();
        })
        .catch((err) => console.log(err));
        console.log("Delete Employee", item);
    }

// To get employee by ID
    const getEmployeeById = (id) => {
        return axios
            .get(`http://localhost:8080/api/v1/employees/${id}`)
            .then((res) => {
                setFirst_name(res.data.first_name);
                setLast_name(res.data.last_name);
                setEmail(res.data.email);
                console.log("ID REQUEST", res.data)
             }).catch((err) => console.log(err));
    }

// To update the employee
    const updateEmployee = (id, newEmployee) => {
            return axios
            .put(`http://localhost:8080/api/v1/employees/${id}`, newEmployee)
            .then((res) => {
                console.log("PUT REQUEST", res.data)
                navigate('/');
            })
            .then(getEmployees)
            .catch((err) => console.log(err));
    }


    return (
        <EmployeeContext.Provider 
            value={{employees, setEmployees, getEmployees, first_name, setFirst_name, 
            last_name, setLast_name, email, setEmail, addEmployee, deleteEmployee, 
            updateEmployee, getEmployeeById, newEmployee}}>
                {props.children}
        </EmployeeContext.Provider>
    )
}