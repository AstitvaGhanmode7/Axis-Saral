import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeNavbar from "./EmployeeNavbar";
import HrSidebar from "./HrSidebar";

const Hr = () => {
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
        console.log(response1.data.emp_id);
        localStorage.setItem("emp_id", response1.data.emp_id);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleEmployees = () => {
    navigate(`/hr/employees/${empId}`);
  };

  const handleHrProjects = () => {
    console.log("working");
    navigate(`/hr/projects/${empId}`);
  };

  const handleStakeholders = () => {
    navigate(`/hr/stakeholders/${empId}`);
  };

  const handleOwners = () => {
    navigate(`/hr/owners/${empId}`);
  };

  return (
    <div>
      <HrSidebar />
    </div>
  );
};

export default Hr;

/*
<br></br>
      <h2>HR Dashboard</h2>
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
        <button className="btn btn-primary" onClick={handleHrProjects}>
          Projects
        </button>
        <button className="btn btn-primary" onClick={handleStakeholders}>
          StakeHolders
        </button>
        <button className="btn btn-primary" onClick={handleOwners}>
          Owners
        </button>
      </div>
      <br />
*/
