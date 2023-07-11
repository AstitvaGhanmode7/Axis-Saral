import React, { useEffect, useState } from "react";
import EmployeeNavbar from "./EmployeeNavbar";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import HrSidebar from "./HrSidebar";

const HrOwners = () => {
  const [showAllOwn, setShowAllOwn] = useState(true);
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
                <a onClick={handleAllOwn}>All owners</a>
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
      </div>
    </div>
  );
};

export default HrOwners;
