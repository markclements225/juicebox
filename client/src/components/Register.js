import React, { useState } from "react";
import { useHistory } from "react-router";

const Register = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      const response = await fetch(`api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          name,
          location,
        }),
      });
      const data = await response.json();

      window.localStorage.setItem("token", data.token);

      if (response.ok === true) {
        setIsLoggedIn(true);
        setSuccessMessage("Thanks for registering!");
        setTimeout(() => {
          history.push("/");
        }, 1500);
      } else {
        setErrorMessage(data.message);
      }
    }
  };

  return (
    <>
      <h2>Register for Juicebox</h2>
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      {successMessage ? <h4>{successMessage}</h4> : null}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            minLength="4"
            name="name"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            minLength="6"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            minLength="6"
            name="password"
            placeholder="CONFIRM PASSWORD"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            minLength="3"
            name="name"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            minLength="2"
            name="location"
            placeholder="LOCATION"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default Register;
