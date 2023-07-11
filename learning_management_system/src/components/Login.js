import React, { useState } from "react";
import "../login.css";
import Navbar from "./Navbar";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:9100/login", {
        username,
        password,
      });

      //const { token, role } = response.data;
      const token = response.data.jwttoken;
      const role = response.data.role;
      const authenticatedUsername = username;

      /** 
       * // JWT Decode library
       * import jwt from 'jwt-decode' // import dependency
...
// some logic
axios.post(`${axios.defaults.baseURL}/auth`, { email, password })
    .then(res => {
      const token = res.data.token;
      const user = jwt(token); // decode your token here
      localStorage.setItem('token', token);
      dispatch(actions.authSuccess(token, user));
    })
    .catch(err => {
      dispatch(actions.loginUserFail());
  }); */

      console.log(token);
      console.log(authenticatedUsername);

      localStorage.setItem("token", token);
      //localStorage.setItem("token", JSON.stringify(token)); //store the token
      localStorage.setItem("username", authenticatedUsername);

      // Debug: Check if the token is stored correctly
      console.log(
        "Token stored in localStorage:",
        localStorage.getItem("token")
      );

      if (role === "Development") {
        navigate("/employees");
      } else if (role === "Manager") {
        navigate("/manager");
      } else if (role === "Hr") {
        navigate("/hr");
      } else if(role === "Admin") {
        navigate("/admin")
      } else{
        setError("Invalid role received");
      }
      //navigate("/employee"); // Replace "/dashboard" with your desired route
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Navbar />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h3 className="loginName">Login Here</h3>

        <label className="username" for="username">
          Username
        </label>
        <input
          type="email"
          placeholder="Email"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label className="password" for="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
