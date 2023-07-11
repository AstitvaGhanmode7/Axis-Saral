import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import "../Style.css";
import EmployeeNavbar from "./EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ManagerSidebar from "./ManagerSidebar";

const ProjectAssign = () => {
  const [empData, setEmpdata] = useState([]);
  const [projId, setProjId] = useState();
  const [showAllEmp, setShowAllEmp] = useState(true);
  const [selectEmpIds, setselectEmpIds] = useState([]);
  const employeeService = new EmployeeService();
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllEmployees().then((res) => {
      console.log(res.data);
      setEmpdata(res.data);
    });
  }, []);

  const handleGoBack = () => {
    navigate("/manager");
  };

  const handleSelect = (opti) => {
    const selectIds = opti ? opti.map((opt) => opt.value) : [];
    setselectEmpIds(selectIds);
    console.log(selectIds);
  };

  const options = empData.map((emp) => ({
    value: emp.emp_id,
    label: `${emp.emp_id}` + " " + emp.name.toString(),
  }));
  return (
    <div>
      <ManagerSidebar />
      <br></br>
      <div className="window">
        <h2 className="employeeproject">Employee Projects</h2>
        <br />
        <br />
        <br />
        <header>
          <div className="navbar">
            <ul className="links">
              <li>
                <a>All Projects</a>
              </li>

              <li>
                <a>Add Project</a>
              </li>
            </ul>
          </div>
        </header>
        <form className="project-assigned">
          {}
          <div className="mb-2">
            <label
              htmlFor="selected"
              style={{
                color: "black",
              }}
            >
              Selected emp_list
            </label>
            <div
              className="dropdown-container"
              style={{
                color: "black",
              }}
            >
              {empData.length > 0 ? (
                <Select
                  onChange={handleSelect}
                  options={options}
                  value={options.filter((opt) =>
                    selectEmpIds.includes(opt.value)
                  )}
                  style={{
                    color: "black",
                  }}
                  isSearchable={true}
                  isClearable={true}
                  isMulti
                />
              ) : (
                <p>Loading Employees</p>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="Project id"
              style={{
                color: "black",
              }}
            >
              Contact
            </label>
            <input
              class="form-control"
              type="text"
              required
              value={projId}
              placeholder="Enter Project Id"
              onChange={(event) => {
                setProjId(event.target.value);
              }}
              style={{
                background: "white",
                borderColor: "black",
              }}
            ></input>
            <br></br>
            <div>
              <button className="btn btn-primary">Assign Project</button>
              <br />
            </div>
          </div>
        </form>

        {showAllEmp && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Employees ID</th>
                  <th>Employee Name</th>
                  <th>Employee MailId</th>
                  <th>Employee DOB</th>
                  <th>Employee Gender</th>
                  <th>Employee Role</th>
                  <th>Employee Address</th>
                  <th>Employee Contact</th>
                  <th>Employee Status</th>
                </tr>
              </thead>
              <tbody>
                {empData.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.emp_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.date_of_birth}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.role}</td>
                    <td>{emp.address}</td>
                    <td>{emp.contact}</td>
                    <td>{emp.workingStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default ProjectAssign;
/*
 <button
        style={{ marginLeft: "20px" }}
        onClick={handleGoBack}
        id="button-addon2"
        type="button"
        className="btn btn-primary"
      >
        {/* <i className="fas fa-paper-plane"></i> }
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <h2>Manager Dashboard</h2>
      <br></br>
      <h3 className="text-center">Assign Project</h3>
      <div className="d-flex justify-content-center align-items-center 100-w">
        <div className="form-container rounded bg-white">
          <form>
            {}
            <div className="mb-2">
              <label htmlFor="selected">Selected emp_list</label>
              <div className="dropdown-container">
                {empData.length > 0 ? (
                  <Select
                    onChange={handleSelect}
                    options={options}
                    value={options.filter((opt) =>
                      selectEmpIds.includes(opt.value)
                    )}
                    isSearchable={true}
                    isClearable={true}
                    isMulti
                  />
                ) : (
                  <p>Loading Employees</p>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="Project id">Contact</label>
              <input
                class="form-control"
                type="text"
                required
                value={projId}
                placeholder="Enter Project Id"
                onChange={(event) => {
                  setProjId(event.target.value);
                }}
              ></input>
              <br></br>
              <div>
                <button className="btn btn-primary">Assign Project</button>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
      {showAllEmp && (
        <>
          <table>
            <thead>
              <tr>
                <th>Employees ID</th>
                <th>Employee Name</th>
                <th>Employee MailId</th>
                <th>Employee DOB</th>
                <th>Employee Gender</th>
                <th>Employee Role</th>
                <th>Employee Address</th>
                <th>Employee Contact</th>
                <th>Employee Status</th>
              </tr>
            </thead>
            <tbody>
              {empData.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.emp_id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.date_of_birth}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.role}</td>
                  <td>{emp.address}</td>
                  <td>{emp.contact}</td>
                  <td>{emp.workingStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
 
 */
