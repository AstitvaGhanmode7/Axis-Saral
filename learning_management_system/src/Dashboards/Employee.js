import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeNavbar from "./EmployeeNavbar";
import { json, useNavigate } from "react-router-dom";
import "../Style.css";

const Employee = () => {
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
    navigate("/employeedocuments");
  };

  return (
    <div>
      <EmployeeNavbar />
      <br></br>
      <h2>Employee Dashboard</h2>
      <br></br>
      {loading ? (
        <p>Loading employee details...</p>
      ) : (
        <div>
          <h3>Welcome,{employee.name}</h3>
        </div>
      )}

      <div className="employee-container">
        <button className="btn btn-primary" onClick={handleProject}>
          Projects
        </button>
        <button className="btn btn-primary" onClick={handleEmployeeDetails}>
          Employee Details
        </button>
        <button className="btn btn-primary" onClick={handleDocuments}>
          My Documents
        </button>
      </div>
      <br />
    </div>
  );
};

export default Employee;
