import React, { useEffect, useState } from "react";
import "../EmpStyle.css";
import EmployeeService from "../Services/EmployeeService";
import EmployeeSidebar from "./EmployeeSidebar";

import Logo1 from "../gender/male.png";
import Logo2 from "../gender/female.png";

const EmployeeDetails = () => {
  const employeeService = new EmployeeService();
  const [showAllEmp, setShowAllEmp] = useState(false);
  const [empData, setempData] = useState([]);
  const [showIndEmp, setShowIndEmp] = useState(false);
  const [showAllManager, setShowAllmanager] = useState(false);
  const [showIndMan, setShowIndman] = useState(false);
  const [showAllHr, setShowAllHr] = useState(false);
  const [showIndHr, setShowIndHr] = useState(false);

  const [managerData, setManagerdata] = useState([]);
  const [hrData, setHrdata] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    employeeService.getAllEmployees().then((res) => {
      console.log(res.data);
      setempData(res.data);
    });
    employeeService.getAllManagers().then((res) => {
      setManagerdata(res.data);
    });

    employeeService.getAllHrs().then((res) => {
      setHrdata(res.data);
    });
  }, []);

  const handleAllEmployees = () => {
    setShowAllEmp(true);
    setShowAllmanager(false);
    setShowAllHr(false);
    setShowIndEmp(false);
    setShowIndman(false);
    setShowIndHr(false);
  };

  const handleAllManagers = () => {
    setShowAllmanager(true);
    setShowIndEmp(false);
    setShowAllHr(false);
    setShowAllEmp(false);
    setShowIndman(false);
    setShowIndHr(false);
  };

  const handleAllHrs = () => {
    setShowAllmanager(false);
    setShowIndEmp(false);
    setShowAllHr(true);
    setShowAllEmp(false);
    setShowIndman(false);
    setShowIndHr(false);
  };

  const handleEmpDetails = (id) => {
    setShowAllEmp(false);
    setShowAllmanager(false);
    setShowAllHr(false);
    setShowIndEmp(true);
    setShowIndman(false);
    setShowIndHr(false);
    console.log(id);
    const temp1 = empData.filter((res) => {
      return res.emp_id === id;
    });
    setTemp(temp1);
  };

  const handleManDetails = (id) => {
    setShowAllEmp(false);
    setShowAllmanager(false);
    setShowAllHr(false);
    setShowIndEmp(false);
    setShowIndman(true);
    setShowIndHr(false);
    const temp2 = empData.filter((res) => {
      return res.emp_id === id;
    });
    setTemp(temp2);
  };

  const handleHrDetails = (id) => {
    setShowAllEmp(false);
    setShowAllmanager(false);
    setShowAllHr(false);
    setShowIndEmp(false);
    setShowIndman(false);
    setShowIndHr(true);
    const temp3 = empData.filter((res) => {
      return res.emp_id === id;
    });
    setTemp(temp3);
  };

  return (
    <div>
      <EmployeeSidebar />
      <br />
      <br />

      <div className="window">
        <h2>Employee Details</h2>
        <br />
        <br />
        <br />
        <header>
          <div className="navbar">
            <ul className="links">
              <li>
                <a onClick={handleAllEmployees}> All Employees Detail</a>
              </li>

              <li>
                <a onClick={handleAllManagers}>Manager Details</a>
              </li>
              <li>
                <a onClick={handleAllHrs}>Hr Details</a>
              </li>
            </ul>
          </div>
        </header>

        {showAllEmp && (
          <>
            <div className="news-list">
              {empData.map((emp) => (
                <div className="news-card" key={emp.id}>
                  <div className="news-content">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        columnGap: "10px",
                      }}
                    >
                      {/* <img src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV  ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' className='news-image'/> */}
                      {/* <div className="news-image">
                    <i class="fa fa-user-tie fa-lg"></i>
                    </div>*/}
                      {emp.gender == "Male" ? (
                        <img src={Logo1} className="news-image1" />
                      ) : (
                        <img src={Logo2} className="news-image1" />
                      )}
                      <div>
                        <h4 className="news-description">
                          Id:{emp.emp_id}, Name:{emp.name}
                        </h4>
                        <h4 className="news-description">Email:{emp.email}</h4>
                        <h4 className="news-description">Role:{emp.role} </h4>
                        <h4 className="news-description">
                          Status:{emp.workingStatus}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleEmpDetails(emp.emp_id);
                      }}
                    >
                      <i className="fa-solid fa-eye" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {showAllManager && (
          <>
            <div className="news-list">
              {managerData.map((emp) => (
                <div className="news-card" key={emp.id}>
                  <div className="news-content">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        columnGap: "10px",
                      }}
                    >
                      {/* <img src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV  ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' className='news-image'/> */}
                      {/* <div className="news-image">
                    <i class="fa fa-user-tie fa-lg"></i>
                    </div>*/}
                      {emp.gender == "Male" ? (
                        <img src={Logo1} className="news-image1" />
                      ) : (
                        <img src={Logo2} className="news-image1" />
                      )}
                      <div>
                        <h4 className="news-description">
                          Id:{emp.emp_id}, Name:{emp.name}
                        </h4>
                        <h4 className="news-description">Email:{emp.email}</h4>
                        <h4 className="news-description">Role:{emp.role} </h4>
                        <h4 className="news-description">
                          Status:{emp.workingStatus}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      className="btn btn-success"
                      style={{ float: "right" }}
                      onClick={() => {
                        handleManDetails(emp.emp_id);
                      }}
                    >
                      <i className="fa-solid fa-eye" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/*{showAllHr && (
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
            {
                     hrData.map(emp=>(
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
                  ))           
            }
           </tbody>
        </table>
        </>
          )} */}
        {showAllHr && (
          <>
            <div className="news-list">
              {hrData.map((emp) => (
                <div className="news-card" key={emp.id}>
                  <div className="news-content">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        columnGap: "10px",
                      }}
                    >
                      {/* <img src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV  ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' className='news-image'/> */}
                      {/* <div className="news-image">
                    <i class="fa fa-user-tie fa-lg"></i>
                    </div>*/}
                      {emp.gender == "Male" ? (
                        <img src={Logo1} className="news-image1" />
                      ) : (
                        <img src={Logo2} className="news-image1" />
                      )}
                      <div>
                        <h4 className="news-description">
                          Id:{emp.emp_id}, Name:{emp.name}
                        </h4>
                        <h4 className="news-description">Email:{emp.email}</h4>
                        <h4 className="news-description">Role:{emp.role} </h4>
                        <h4 className="news-description">
                          Status:{emp.workingStatus}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      className="btn btn-success"
                      style={{ float: "right" }}
                      onClick={() => {
                        handleHrDetails(emp.emp_id);
                      }}
                    >
                      <i className="fa-solid fa-eye" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {showIndEmp && (
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
                {temp.map((emp) => (
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

        {showIndMan && (
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
                {temp.map((emp) => (
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

        {showIndHr && (
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
                {temp.map((emp) => (
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
    </div>
  );
};
/*

{showAllEmp && (
          <>
            <table className="table1-custom">
              <thead className="thead1">
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


 <div className="container container-pbutton">
          <button className="btn btn-primary" onClick={handleAllEmployees}>
            All Employees Detail
          </button>
          <button className="btn btn-primary">Manager Details</button>
          <button className="btn btn-primary">Hr Details</button>
        </div>
 
 
<div className="container container-project">
        <h2>Employee Details</h2>
        <br />
        <br />
        <br />
        <div className="container container-pbutton">
          <button className="btn btn-primary" onClick={handleAllEmployees}>
            All Employees Detail
          </button>
          <button className="btn btn-primary">Manager Details</button>
          <button className="btn btn-primary">Hr Details</button>
        </div>

        {showAllEmp && (
          <>
            <table className="table1-custom">
              <thead className="thead1">
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
*/

export default EmployeeDetails;
