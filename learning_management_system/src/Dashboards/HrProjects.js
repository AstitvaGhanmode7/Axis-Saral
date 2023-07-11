import React, { useEffect, useState } from "react";
import EmployeeNavbar from "./EmployeeNavbar";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import HrSidebar from "./HrSidebar";

const HrProjects = () => {
  const [projData, setAllProjdata] = useState([]);
  const [showAllProj, setShowAllProj] = useState(true);
  const employeeService = new EmployeeService();
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllProjects().then((res) => {
      setAllProjdata(res.data);
    });
  }, []);

  const handleAllProjects = () => {
    setShowAllProj(true);
  };

  const handleGoBack = () => {
    navigate("/hr");
  };

  return (
    <div>
      <HrSidebar />

      <br></br>
      <div className="window">
        <h2 className="employeeproject">HR Projects</h2>
        <br />
        <br />
        <br />
        <header>
          <div className="navbar">
            <ul className="links">
              <li>
                <a onClick={handleAllProjects}>All Projects</a>
              </li>
            </ul>
          </div>
        </header>

        {showAllProj && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Project ID</th>
                  <th>Project Title</th>
                  <th>Project Description</th>
                  <th>Manager Name</th>
                  <th>Manager MailId</th>
                  <th>Hr Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {projData.map((project) => (
                  <tr key={project.id}>
                    <td>{project.proj_id}</td>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>{project.manager.name}</td>
                    <td>{project.manager.email}</td>
                    <td>{project.hr.name}</td>
                    <td>{project.startDate}</td>
                    <td>{project.endDate}</td>
                    <td>{project.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default HrProjects;
