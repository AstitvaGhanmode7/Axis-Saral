import React, { useEffect, useState } from "react";
import "../EmpStyle.css";
import axios from "axios";
import EmployeeService from "../Services/EmployeeService";
import EmployeeSidebar from "./EmployeeSidebar";

const EmployeeProjects = () => {
  const [projects, setProjects] = useState([]);
  const [showMyProjects, setshowMyProjects] = useState(false);
  const [showMyProjectDetails, setshowMyProjectDetails] = useState(false);
  const [showAllProjects, setshowAllProjects] = useState(false);
  const [projectId, setProjectId] = useState();
  const [projData, setProjdata] = useState([]);
  const [empData, setEmpdata] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const employeeService = new EmployeeService();
  useEffect(() => {
    const fetchData = async () => {
      try {
        /* const token = localStorage.getItem("token");
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }; */
        const empId = localStorage.getItem("emp_id");

        // const response = await axios.get(
        // `http://localhost:8080/employee/getProjByEmp/${empId}`,
        // config
        // );
        employeeService.getProjByEmp(empId).then((res) => {
          console.log(res.data);
          setProjects(res.data);
        });
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleMyProjects = () => {
    setshowMyProjects(true);
    setshowMyProjectDetails(false);
    setshowAllProjects(false);
  };

  const handleProjectDetails = (id) => {
    setshowMyProjects(false);
    setshowMyProjectDetails(true);
    setshowAllProjects(false);
    //const newArray=patients.filter((patient)=>{return (patient.name.toLowerCase()===searchInput.toLowerCase())});
    const prodata = projects.filter((res) => {
      return res.project.proj_id === id;
    });
    // console.log(projData);
    setProjdata(prodata);
    //const empData=axios.get(`http://localhost:8080/employee/getEmpByProjId/${id}`)

    //console.log(empData);
    employeeService.getEmpByProjId(id).then((res) => {
      console.log(res.data);
      setEmpdata(res.data.emp_list);
    });

    // setEmpdata(empData);
  };
  const handleAllProjects = () => {
    setshowMyProjects(false);
    setshowMyProjectDetails(false);
    setshowAllProjects(true);

    employeeService.getAllProjects().then((res) => {
      console.log(res.data);
      setAllProjects(res.data);
    });
  };

  return (
    <div>
  <EmployeeSidebar />
  <br />
  <br />
  <div className="window">
    <h2 className="employeeproject">Employee Projects</h2>
    <br />
    <br />
    <br />
    <header>
      <div className="navbar">
        <ul className="links">
          <li>
            <a onClick={handleMyProjects}>My Projects</a>
          </li>

          <li>
            <a onClick={handleAllProjects}>All Projects</a>
          </li>
        </ul>
      </div>
    </header>
    <div className="container container-pbutton"></div>
    {showMyProjects && (
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-header">
              <h3>{project.project.title}</h3>
            </div>
            <div className="card-body">
              <p>{project.project.description}</p>
              <p>Manager: {project.project.manager.name}</p>
              <p>Start Date: {project.project.startDate}</p>
              <p>End Date: {project.project.endDate}</p>
              <p>Status: {project.project.status}</p>
              <button
                className="btn btn-success btn-button"
                onClick={() => handleProjectDetails(project.project.proj_id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
    {showMyProjectDetails && (
      <>
        <h3
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: "12rem",
            left: "10rem",
          }}
        >
          Project Details
        </h3>
        <table className="table1-custom">
          <thead className="thead-dark thead1">
            <tr>
              <th>Project ID</th>
              <th>Project Title</th>
              <th>Project Description</th>
              <th>Manager ID</th>
              <th>Manager Name</th>
              <th>Manager MailId</th>
              <th>Hr Id</th>
              <th>Hr Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projData.map((pro) => (
              <tr key={pro.id}>
                <td>{pro.project.proj_id}</td>
                <td>{pro.project.title}</td>
                <td>{pro.project.description}</td>
                <td>{pro.project.manager.emp_id}</td>
                <td>{pro.project.manager.name}</td>
                <td>{pro.project.manager.email}</td>
                <td>{pro.project.hr.emp_id}</td>
                <td>{pro.project.hr.name}</td>
                <td>{pro.project.startDate}</td>
                <td>{pro.project.endDate}</td>
                <td>{pro.project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: "26rem",
            left: "10rem",
          }}
        >
          Employees Details
        </h3>
        <table className="table2-custom">
          <thead className="thead-dark thead1">
            <tr>
              <th>Serial NO</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((emp, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td>{emp.address}</td>
                <td>{emp.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}
    {showAllProjects && (
      <>
        <table className="table1-custom">
          <thead className="thead-dark thead1">
            <tr>
              <th>Project ID</th>
              <th>Project Title</th>
              <th>Project Description</th>
              <th>Manager ID</th>
              <th>Manager Name</th>
              <th>Manager MailId</th>
              <th>Hr Id</th>
              <th>Hr Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.proj_id}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.manager.emp_id}</td>
                <td>{project.manager.name}</td>
                <td>{project.manager.email}</td>
                <td>{project.hr.emp_id}</td>
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

export default EmployeeProjects;

/*
<button className="btn btn-primary btn-1" onClick={handleMyProjects}>
            My Projects
          </button>
          <button className="btn btn-primary" onClick={handleAllProjects}>
            All Projects
          </button>
 */
