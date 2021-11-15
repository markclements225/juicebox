import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    window.localStorage.setItem("token", data.token);

    if (response.ok === true) {
      setIsLoggedIn(true);
      setSuccessMessage("Welcome back!");
      setTimeout(() => {
        history.push("/");
      }, 1500);
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <>
      <h2>Login to Juicebox</h2>
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      {successMessage ? <h4>{successMessage}</h4> : null}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="ENTER USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
      <h3>
        Not a member yet? <NavLink to="/register">Register today.</NavLink>
      </h3>
    </>
  );
};

export default LoginForm;
