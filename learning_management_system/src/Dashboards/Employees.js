import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import "../EmpStyle.css";
import EmployeeSidebar from "./EmployeeSidebar";

const Employees = () => {
  const [projects, setProjects] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [empId, setEmpId] = useState(); // Add employee state
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  /** 
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Navigate the user back to the login page
    navigate("/");
  };
*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const name = localStorage.getItem("username");

        const response1 = await axios.get(
          `http://localhost:9100/employee/Employee/getbyname/${name}`,
          config
        );
        console.log(response1.data);
        setEmployee(response1.data);
        setEmpId(response1.data.emp_id);
        localStorage.setItem("emp_id", response1.data.emp_id);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleProject = () => {
    navigate("/projects");
  };
  const handleEmployeeDetails = () => {
    navigate("/employeedetails");
  };
  const handleDocuments = () => {
    navigate("/employeesdocuments");
  };

  return (
    <div>
      <div>
        <EmployeeSidebar />
      </div>
    </div>
  );
};

export default Employees;
