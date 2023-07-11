import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import EmployeeNavbar from "./EmployeeNavbar";
import EmployeeSidebar from "./EmployeeSidebar";

const Newsfeed = () => {
  const employeeService = new EmployeeService();
  const [newsData, setnewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    employeeService.getAllNewsFeed().then((res) => {
      console.log(res.data);
      setnewsData(res.data);
    });
  }, []);

  const handleGoBack = () => {
    const Role = localStorage.getItem("role");
    if (Role === "Manager") {
      navigate("/manager");
    } else if (Role === "Hr") {
      navigate("/hr");
    } else {
      navigate("/employee");
    }
  };

  return (
    <>
      <EmployeeSidebar />
      <br />
      <br />

      <div className="window">
        <h2 style={{ marginTop: "30px" }}>Newsfeed</h2>

        <br />
        <br />
        <br />
        <div className="news-list">
          {newsData.map((newsItem) => (
            <div className="news-card" key={newsItem.id}>
              <div className="news-content">
                <img
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  className="news-image2"
                />
                <h2 className="news-title">{newsItem.title}</h2>
                <h4 className="news-description">{newsItem.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Newsfeed;
