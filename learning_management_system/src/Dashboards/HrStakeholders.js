import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import EmployeeNavbar from "./EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import HrSidebar from "./HrSidebar";

const HrStakeholders = () => {
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
                <a onClick={handleAllSh}> All StakeHolders</a>
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
      </div>
    </div>
  );
};

export default HrStakeholders;
