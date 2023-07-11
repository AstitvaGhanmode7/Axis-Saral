import React, { useState } from "react";
import EmployeeNavbar from "./EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeService from "../Services/EmployeeService";
import HrSidebar from "./HrSidebar";

const HrFilesUpload = () => {
  const [emp_id, setEmpId] = useState();
  const [selectFile, setSelectFile] = useState(null);
  const [filename, setfilename] = useState();
  const navigate = useNavigate();
  const employeeService = new EmployeeService();

  const handleFileChange = (event) => {
    setSelectFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const tok = localStorage.getItem("token");
    console.log(tok);

    console.log(emp_id);
    console.log(filename);

    const id = emp_id;
    const name = filename;
    const formData = new FormData();
    formData.append("file", selectFile);
    console.log(formData);
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    axios
      .post(
        `http://localhost:8080/employee/uploadFile/${id}/${name}`,
        formData,
        employeeService.getConfig()
      )
      .then((res) => {
        alert("Uploaded Succesfully");
      })
      .catch((error) => {
        console.error(error);
      });
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
            <ul className="links"></ul>
          </div>
        </header>

        <h3 className="text-center">Add Files for Employees</h3>
        <div
          className="d-flex justify-content-center align-items-center 100-w"
          style={{ marginTop: "30px" }}
        >
          <div className="form-container rounded bg-white">
            <form>
              <div className="mb-2">
                <label htmlFor="Emp Id">Employee Id</label>
                <input
                  type="text"
                  class="form-control"
                  id="Employee Id"
                  placeholder="Enter Employee Id"
                  required
                  value={emp_id}
                  onChange={(event) => {
                    setEmpId(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="mb-2">
                <label htmlFor="file">File</label>
                <input
                  type="file"
                  class="form-control"
                  id="File"
                  placeholder="Choose File"
                  onChange={handleFileChange}
                />
              </div>
              <br></br>
              <div className="mb-2">
                <label htmlFor="file name">File Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="File Name"
                  placeholder="Enter Filename"
                  required
                  value={filename}
                  onChange={(event) => {
                    setfilename(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrFilesUpload;
