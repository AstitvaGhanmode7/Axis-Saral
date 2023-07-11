import React, { useEffect, useState } from "react";
import EmployeeNavbar from "./EmployeeNavbar";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import ManagerSidebar from "./ManagerSidebar";

const ManagerProjects = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [shId, setShId] = useState();
  const [oId, setOId] = useState();
  const [managerId, setManagerId] = useState();
  const [hrId, setHrId] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [status, setStatus] = useState();
  const [projData, setAllProjdata] = useState([]);
  const [showAllProj, setShowAllProj] = useState(true);
  const [showAddProj, SetShowAddProj] = useState(false);
  const employeeService = new EmployeeService();
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllProjects().then((res) => {
      setAllProjdata(res.data);
    });
  }, []);

  const handleAllProjects = () => {
    setShowAllProj(true);
    SetShowAddProj(false);
  };

  const handleAddProject = () => {
    setShowAllProj(false);
    SetShowAddProj(true);
  };

  const handleSubmit = () => {};

  const handleGoBack = () => {
    navigate("/manager");
  };
  return (
    <div>
      <ManagerSidebar />
      <br></br>
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
                <a onClick={handleAllProjects}>All Projects</a>
              </li>

              <li>
                <a onClick={handleAddProject}>Add Project</a>
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

        {showAddProj && (
          <>
            <h3 className="text-center">Add Project</h3>
            <div className="d-flex justify-content-center align-items-center 100-w">
              <div className="form-container rounded bg-white">
                <form>
                  <div className="mb-2">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Title"
                      placeholder="Enter Title"
                      required
                      value={title}
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Description"
                      placeholder="Enter Description"
                      required
                      value={description}
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="manager id">Manager Id</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Manager Id"
                      placeholder="Enter Manager Id"
                      required
                      value={managerId}
                      onChange={(event) => {
                        setManagerId(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="hr id">Hr Id</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Hr Id"
                      placeholder="Enter Hr Id"
                      required
                      value={hrId}
                      onChange={(event) => {
                        setHrId(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="sh id">StakeHolder Id</label>
                    <input
                      type="text"
                      class="form-control"
                      id="StakeHolder Id"
                      placeholder="Enter StakeHolder Id"
                      required
                      value={shId}
                      onChange={(event) => {
                        setShId(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="owner id">Owner Id</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Owner id"
                      placeholder="Enter Owner Id"
                      required
                      value={oId}
                      onChange={(event) => {
                        setOId(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                </form>
                <form>
                  <div className="mb-2">
                    <label htmlFor="start date">Start Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="Start Date"
                      placeholder="Enter Start date"
                      required
                      value={startDate}
                      onChange={(event) => {
                        setStartDate(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="end date">End Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="End Date"
                      placeholder="Enter End date"
                      required
                      value={endDate}
                      onChange={(event) => {
                        setEndDate(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Status"
                      placeholder="Enter Status"
                      required
                      value={status}
                      onChange={(event) => {
                        setStatus(event.target.value);
                      }}
                      style={{
                        background: "white",
                        borderColor: "black",
                      }}
                    />
                  </div>
                  <br />
                  <div className="d-grid">
                    <button
                      className="btn btn-primary expand"
                      onClick={handleSubmit}
                    >
                      Add Project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManagerProjects;
/*
<div className="employee-container">
        <button
          onClick={handleGoBack}
          id="button-addon2"
          type="button"
          className="btn btn-primary"
        >
          {/* <i className="fas fa-paper-plane"></i> }
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button className="btn btn-primary" onClick={handleAllProjects}>
          All Projects
        </button>
        <button className="btn btn-primary" onClick={handleAddProject}>
          Add Project
        </button>
      </div>

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

      {showAddProj && (
        <>
          <h3 className="text-center">Add Project</h3>
          <div className="d-flex justify-content-center align-items-center 100-w">
            <div className="form-container rounded bg-white">
              <form>
                <div className="mb-2">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Title"
                    placeholder="Enter Title"
                    required
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Description"
                    placeholder="Enter Description"
                    required
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="manager id">Manager Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Manager Id"
                    placeholder="Enter Manager Id"
                    required
                    value={managerId}
                    onChange={(event) => {
                      setManagerId(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="hr id">Hr Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Hr Id"
                    placeholder="Enter Hr Id"
                    required
                    value={hrId}
                    onChange={(event) => {
                      setHrId(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="sh id">StakeHolder Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="StakeHolder Id"
                    placeholder="Enter StakeHolder Id"
                    required
                    value={shId}
                    onChange={(event) => {
                      setShId(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="owner id">Owner Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Owner id"
                    placeholder="Enter Owner Id"
                    required
                    value={oId}
                    onChange={(event) => {
                      setOId(event.target.value);
                    }}
                  />
                </div>
              </form>
              <form>
                <div className="mb-2">
                  <label htmlFor="start date">Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="Start Date"
                    placeholder="Enter Start date"
                    required
                    value={startDate}
                    onChange={(event) => {
                      setStartDate(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="end date">End Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="End Date"
                    placeholder="Enter End date"
                    required
                    value={endDate}
                    onChange={(event) => {
                      setEndDate(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="status">Status</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Status"
                    placeholder="Enter Status"
                    required
                    value={status}
                    onChange={(event) => {
                      setStatus(event.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="d-grid">
                  <button
                    className="btn btn-primary expand"
                    onClick={handleSubmit}
                  >
                    Add Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
*/
