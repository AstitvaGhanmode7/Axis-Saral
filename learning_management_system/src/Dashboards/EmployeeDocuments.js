import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import EmployeeSidebar from "./EmployeeSidebar";

const EmployeeDocuments = () => {
  const [docdata, setdocData] = useState([]);
  const employeeService = new EmployeeService();
  useEffect(() => {
    const empId = localStorage.getItem("emp_id");
    employeeService.getDocById(empId).then((res) => {
      console.log(res.data);
      setdocData(res.data);
    });
  }, []);

  const handleDownload = (doc_id, doc_type) => {
    const empId = localStorage.getItem("emp_id");
    employeeService.getDownloadById(empId, doc_id).then((res) => {
      console.log(res.data);
      if ("image/png" === doc_type) {
        doc_type = "png";
      }
      if ("image/jpeg" === doc_type) {
        doc_type = "jpeg";
      }
      console.log(doc_type);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `file.${doc_type}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  return (
    <div>
      <EmployeeSidebar />
      <br />
      <br />
      <div className="window">
        <h2>My Documents</h2>
        <table className="table3-custom">
          <thead className="thead1">
            <tr>
              <th>Serial NO</th>
              <th>Document Name</th>
              <th>Document type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {docdata.map((emp, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.type}</td>
                <button
                  className="btn btn-success"
                  onClick={() => handleDownload(emp.doc_id, emp.type)}
                >
                  Download
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDocuments;
