import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import EmployeeNavbar from "./EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import HrSidebar from "./HrSidebar";

import Logo1 from "../gender/male.png";
import Logo2 from "../gender/female.png";

const HrEmployees = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [date_of_birth, setdateOfBirth] = useState();
  const [role, setRole] = useState();
  const [gender, setGender] = useState();
  const [salary, setSalary] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [employee, setEmployee] = useState(null);
  const [showAllEmp, setShowAllEmp] = useState(true);
  const [showAddEmp, setshowAddEmp] = useState(false);
  const [showIndEmp, setshowIndEmp] = useState(false);
  const [showUpdEmp, setShowUpdEmp] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [empData, setempData] = useState([]);
  const [empId, setEmpId] = useState(); // Add employee state
  const [loading, setLoading] = useState(true);

  const employeeService = new EmployeeService();
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllEmployees().then((res) => {
      console.log(res.data);
      setempData(res.data);
    });
  }, []);

  const handleAllEmp = () => {
    setShowAllEmp(true);
    setshowAddEmp(false);
    setshowIndEmp(false);
  };

  const handleAddEmp = () => {
    setshowAddEmp(true);
    setShowAllEmp(false);
    setshowIndEmp(false);
  };

  const handleEmpDetails = (id) => {
    setshowIndEmp(true);
    setshowAddEmp(false);
    setShowAllEmp(false);

    const temp = empData.filter((res) => {
      return res.emp_id === id;
    });
    setTempData(temp);
  };

  const handleSubmit = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(date_of_birth);
    console.log(role);
    console.log(salary);
    console.log(gender);
    console.log(address);
    console.log(contact);
    if (
      !name ||
      !email ||
      !password ||
      !date_of_birth ||
      !role ||
      !gender ||
      !salary ||
      !contact ||
      !address
    ) {
      alert("Please Enter All Fields");
    } else {
      employeeService
        .register(
          name,
          email,
          password,
          date_of_birth,
          role,
          gender,
          salary,
          contact,
          address
        )
        .then((res) => {
          console.log(res.data);
          alert("Added Succesfully");
          setName("");
          setEmail("");
          setPassword("");
          setdateOfBirth("");
          setRole("");
          setGender("");
          setSalary("");
          setAddress("");
          setContact("");
        });
    }
  };

  const handleGoBack = () => {
    navigate("/hr");
  };

  const handleEdit = (emp) => {
    setEmployee(emp);
    navigate(`/editform/${emp.emp_id}`);
  };

  const handleDelete = (id) => {
    employeeService.deleteEmp(id).then((res) => {
      console.log(res.data);
      alert("Updated Successfully");
    });
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
                <a onClick={handleAllEmp}>All Employees</a>
              </li>
              <li>
                <a onClick={handleAddEmp}> Add Employee</a>
              </li>
            </ul>
          </div>
        </header>

        <div className="employee-container"></div>

        {/* {showAllEmp && (
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
                     empData.map(emp=>(
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
          )}  */}

        {showAllEmp && (
          <>
            <div className="news-list">
              {empData.map((emp) => (
                <div className="news-card" key={emp.id}>
                  <div className="news-content">
                    <div
                      style={{
                        display: "flex",
                        columnGap: "10px",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {/* <img src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV  ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' className='news-image'/> */}
                      {/* <div className="news-image">
                    <i class="fa fa-user-tie fa-lg"></i>
                    </div>*/}
                      <div>
                        {emp.gender == "Male" ? (
                          <img src={Logo1} className="news-image1" />
                        ) : (
                          <img src={Logo2} className="news-image1" />
                        )}
                      </div>
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
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(emp)}
                    >
                      <i className="fas fa-edit" />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(emp.emp_id)}
                    >
                      <i className="fa-solid fa-trash" />
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
                  <th>Employee Salary</th>
                  <th>Employee Address</th>
                  <th>Employee Contact</th>
                  <th>Employee Status</th>
                </tr>
              </thead>
              <tbody>
                {tempData.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.emp_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.date_of_birth}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.role}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.address}</td>
                    <td>{emp.contact}</td>
                    <td>{emp.workingStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {showAddEmp && (
          <>
            <h3 className="text-center">Add Employee</h3>
            <div className="d-flex justify-content-center align-items-center 100-w">
              <div className="form-container rounded bg-white">
                <form>
                  <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder="Enter Name"
                      required
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="Email"
                      placeholder="Enter Email"
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="Password"
                      placeholder="Enter password"
                      required
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="role">Role</label>
                    <select
                      class="form-control"
                      id="Role"
                      placeholder="Enter Role"
                      required
                      value={role}
                      onChange={(event) => {
                        setRole(event.target.value);
                      }}
                    >
                      <option value="">--Select Role--</option>
                      <option value="Development">Development</option>
                      <option value="Support">Support</option>
                      <option value="Testing">Testing</option>
                      <option value="QA">QA</option>
                      <option value="Hr">HR</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                </form>
                <form>
                  <br></br>
                  <br></br>
                  <div className="mb-2">
                    <label htmlFor="date_of_birth">Date Of Birth</label>
                    <input
                      type="date"
                      class="form-control"
                      id="Date of birth"
                      placeholder="Enter Date Of Birth"
                      required
                      value={date_of_birth}
                      onChange={(event) => {
                        setdateOfBirth(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="gender">Gender</label>
                    <select
                      type="text"
                      class="form-control"
                      id="Gender"
                      placeholder="Select Gender"
                      required
                      value={gender}
                      onChange={(event) => {
                        setGender(event.target.value);
                      }}
                    >
                      <option value="">--Select Gender--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="salary">Salary</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Salary"
                      placeholder="Enter Salary"
                      required
                      value={salary}
                      onChange={(event) => {
                        setSalary(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="contact">Contact</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Contact"
                      placeholder="Enter Contact"
                      required
                      value={contact}
                      onChange={(event) => {
                        setContact(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Address"
                      placeholder="Enter Address"
                      required
                      value={address}
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="d-grid">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Add Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
        <br />
      </div>
    </div>
  );
};

export default HrEmployees;
