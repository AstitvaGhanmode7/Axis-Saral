import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import EmployeeNavbar from "./EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import ManagerSidebar from "./ManagerSidebar";

const ManagerStakeHolders = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [showAllSh, setShowAllSh] = useState(true);
  const [showAddSh, setShowAddSh] = useState(false);
  const [shData, setShData] = useState([]);
  const employeeService = new EmployeeService();
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllStakeHolders().then((res) => {
      setShData(res.data);
    });
  }, []);

  const handleAllSh = () => {
    setShowAllSh(true);
    setShowAddSh(false);
  };
  const handleAddSh = () => {
    setShowAllSh(false);
    setShowAddSh(true);
  };

  const handleSubmit = () => {
    if (!name || !email || !contact) {
      alert("Please enter all fields");
    } else {
      employeeService.addStakeHolder(name, email, contact).then((res) => {
        console.log(res.data);
        alert("Added Successfully");
      });
    }
  };

  const handleGoBack = () => {
    navigate("/manager");
  };

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
                <a onClick={handleAllSh}>All Stakeholder</a>
              </li>

              <li>
                <a onClick={handleAddSh}>Add Stakeholder</a>
              </li>
            </ul>
          </div>
        </header>

        {showAllSh && (
          <>
            <table>
              <thead>
                <tr>
                  <th>StakeHolder ID</th>
                  <th>StakeHolder Name</th>
                  <th>StakeHolder MailId</th>
                  <th>StakeHolder Contact</th>
                </tr>
              </thead>
              <tbody>
                {shData.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.sh_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {showAddSh && (
          <>
            <h3 className="text-center">Add StakeHolder</h3>
            <div className="d-flex justify-content-center align-items-center 100-w">
              <div className="form-container rounded bg-white">
                <form>
                  <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
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
                  <br></br>
                  <div className="d-grid">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Add StakeHolder
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

export default ManagerStakeHolders;

/*
 <h2>Manager Dashboard</h2>
      <br></br>

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
        <button className="btn btn-primary" onClick={handleAllSh}>
          All StakeHolders
        </button>
        <button className="btn btn-primary" onClick={handleAddSh}>
          Add StakeHolder
        </button>
      </div>

      {showAllSh && (
        <>
          <table>
            <thead>
              <tr>
                <th>StakeHolder ID</th>
                <th>StakeHolder Name</th>
                <th>StakeHolder MailId</th>
                <th>StakeHolder Contact</th>
              </tr>
            </thead>
            <tbody>
              {shData.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.sh_id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {showAddSh && (
        <>
          <h3 className="text-center">Add StakeHolder</h3>
          <div className="d-flex justify-content-center align-items-center 100-w">
            <div className="form-container rounded bg-white">
              <form>
                <div className="mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
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
                <br></br>
                <div className="d-grid">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Add StakeHolder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
*/
