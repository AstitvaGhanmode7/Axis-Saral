import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../EmpStyle.css";

const EmployeeSidebar = () => {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // Redirect to login page
    } else {
      const fetchData = async () => {
        try {
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
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [navigate]);

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
                to={"/home"}
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
                to={"/employeeprofile"}
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
                to={"/projects"}
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
                to={"/employeedetails"}
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
                to={"/employeedocuments"}
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
                Documents
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={"/newsfeed"}
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
                Newsfeeds
              </Link>
            </li>
            <li>
              <Link
                className="custom-link"
                to={"/employeejobvacany"}
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

export default EmployeeSidebar;
