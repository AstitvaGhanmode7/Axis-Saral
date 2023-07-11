import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EmployeeNavbar from "./EmployeeNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ManagerSidebar from "./ManagerSidebar";

const Manager = () => {
  const [projects, setProjects] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [empId, setEmpId] = useState(); // Add employee state
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleEmployees = () => {
    navigate(`/manager/employees/${empId}`);
  };

  const handleManagerProjects = () => {
    navigate(`/manager/projects/${empId}`);
  };

  const handleStakeholders = () => {
    navigate(`/manager/stakeholders/${empId}`);
  };

  const handleOwners = () => {
    navigate(`/manager/owners/${empId}`);
  };

  const handleAssign = () => {
    navigate(`/manager/projectAssign/${empId}`);
  };

  return (
    <div>
      <ManagerSidebar />
      <br></br>
      <div className="window"></div>
    </div>
  );
};

export default Manager;
/*
<h2>Manager Dashboard</h2>
      <br></br>
      {loading ? (
        <p>Loading manager details...</p>
      ) : (
        <div>
          <h3>Welcome,{employee.name}</h3>
        </div>
      )}

      <div className="employee-container">
        <button className="btn btn-primary" onClick={handleEmployees}>
          Employees
        </button>
        <button className="btn btn-primary" onClick={handleManagerProjects}>
          Projects
        </button>
        <button className="btn btn-primary" onClick={handleStakeholders}>
          StakeHolders
        </button>
        <button className="btn btn-primary" onClick={handleOwners}>
          Owners
        </button>
        <button className="btn btn-primary" onClick={handleAssign}>
          Assign Project to Employee
        </button>
      </div>
      <br />
*/
