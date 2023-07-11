import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../HrStyle.css";

const HrSidebar = () => {
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
    navigate(`/hr/employees/${empId}`);
  };

  const handleHrProjects = () => {
    navigate(`/hr/projects/${empId}`);
  };

  const handleStakeholders = () => {
    navigate(`/hr/stakeholders/${empId}`);
  };

  const handleOwners = () => {
    navigate(`/hr/owners/${empId}`);
  };
  const handleNewsfeed = () => {
    navigate(`/hr/newsfeed/${empId}`);
  };
  const handleJobs = () => {
    navigate(`/hr/jobs/${empId}`);
  };
  const handleFiles = () => {
    navigate(`/hr/files/${empId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to login page
  };

  return (
    <div>
      <nav id="sidebar" style={{ background: "white", color: "black" }}>
        <div
          className="sidebar-header"
          style={{ background: "white", color: "black" }}
        >
          <h2 className="sidebar-heading">Learning Management System</h2>
        </div>
        {employee && (
          <ul
            className="list-unstyled components"
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Dashboard</h1>

            <li>
              <Link
                className="custom-link"
                to={"/hr"}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={"/hrprofile"}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={`/hr/projects/${empId}`}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={`/hr/employees/${empId}`}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                EmployeeDetails
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={`/hr/stakeholders/${empId}`}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Stakeholder
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={`/hr/owners/${empId}`}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Owner
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={`/hr/jobs/${empId}`}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Job Vacancy
              </Link>
            </li>

            <li>
              <Link
                className="custom-link"
                to={`/hr/files/${empId}`}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                File Upload
              </Link>
            </li>

            <li>
              <Link
                className="custom-link"
                to={"/"}
                onClick={handleLogout}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ddd";
                  e.target.style.color = "black";
                }}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Logout
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default HrSidebar;
