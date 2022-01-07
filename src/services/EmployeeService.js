import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/employees";

const EmployeeService = () => {
   const getAllEmployees = () => {
       return axios.get(BASE_URL);
   }
}

export default EmployeeService;
