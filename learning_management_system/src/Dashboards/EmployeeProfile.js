import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeSidebar from "./EmployeeSidebar";
import EmployeeService from "../Services/EmployeeService";

const EmployeeProfile = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const employeeService = new EmployeeService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const name = localStorage.getItem("username");
        employeeService.getEmpByName(name).then((res) => {
          console.log(res.data);
          setEmployee(res.data);
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  /* <p class="text-muted font-size-sm">{employee.address}</p> */

  return (
    <div>
      <EmployeeSidebar />
      <br />
      <br />
      <h2 class="profile">PROFILE</h2>
      {employee && (
        <>
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  style={{ width: "150px" }}
                />
                <div class="mt-3">
                  <h4>{employee.name}</h4>
                  <p class="text-secondary mb-1">ID: {employee.emp_id}</p>
                  <p class="text-secondary mb-1">{employee.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="details">
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{employee.name}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{employee.email}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {employee.contact}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Date of Birth</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {employee.date_of_birth}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{employee.gender}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {employee.address}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                      <a
                        class="btn btn-info "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeProfile;
