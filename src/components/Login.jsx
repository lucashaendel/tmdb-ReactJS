import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
// import "../assets/login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleUser = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const logger = { userName, password };
    axios
      .post("/api/users/login", logger)
      .then((user) => dispatch(setUser(user.data.userName)));
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="container-login">
        <div className="form-login">
          <input type="text" placeholder="Usuario" onChange={handleUser} />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePassword}
          />
          <button type="submit">Login</button>
          <Link to="">Forgot password?</Link>
        </div>
        <div className="options-login">
          <h3>Welcome</h3>
          <div className="reg-login">
            <p>If you don't have an account, register here.</p>
            <Link to="/register">CREATE AN ACCOUNT</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
