import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import EmployeeNavbar from "./EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import ManagerSidebar from "./ManagerSidebar";

const ManagerOwners = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [showAllOwn, setShowAllOwn] = useState(true);
  const [showAddOwn, setShowAddOwn] = useState(false);
  const [ownerData, setOwnerData] = useState([]);
  const employeeService = new EmployeeService();
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllOwners().then((res) => {
      setOwnerData(res.data);
    });
  }, []);

  const handleAllOwn = () => {
    setShowAllOwn(true);
    setShowAddOwn(false);
  };
  const handleAddOwn = () => {
    setShowAllOwn(false);
    setShowAddOwn(true);
  };

  const handleSubmit = () => {
    if (!name || !email || !contact) {
      alert("Please enter all fields");
    } else {
      employeeService.addOwner(name, email, contact).then((res) => {
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
                <a onClick={handleAllOwn}>All Owners</a>
              </li>

              <li>
                <a onClick={handleAddOwn}>Add Owner</a>
              </li>
            </ul>
          </div>
        </header>
        {showAllOwn && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Owner ID</th>
                  <th>Owner Name</th>
                  <th>Owner MailId</th>
                  <th>Owner Contact</th>
                </tr>
              </thead>
              <tbody>
                {ownerData.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.o_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {showAddOwn && (
          <>
            <h3 className="text-center">Add Owner</h3>
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
                      Add Owner
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

export default ManagerOwners;

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
        <button className="btn btn-primary" onClick={handleAllOwn}>
          All owners
        </button>
        <button className="btn btn-primary" onClick={handleAddOwn}>
          Add Owners
        </button>
      </div>

      {showAllOwn && (
        <>
          <table>
            <thead>
              <tr>
                <th>Owner ID</th>
                <th>Owner Name</th>
                <th>Owner MailId</th>
                <th>Owner Contact</th>
              </tr>
            </thead>
            <tbody>
              {ownerData.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.o_id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {showAddOwn && (
        <>
          <h3 className="text-center">Add Owner</h3>
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
                    Add Owner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
*/
