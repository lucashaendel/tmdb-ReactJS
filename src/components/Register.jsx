import React, { useState } from "react";
import axios from "axios";
import "../assets/register.css";
// import { useSelector } from "react-redux";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleFullname = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { fullName, email, userName, country, year, password };
    axios.post("/api/users/register", user).then((user) => setUser(user));
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="container-regis">
        <div className="form-regis">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            onChange={handleFullname}
          />
          <input
            type="email"
            placeholder="Correo electronico"
            onChange={handleEmail}
          />
          <input type="text" placeholder="Usuario" onChange={handleUserName} />
          <input type="text" placeholder="Pais" onChange={handleCountry} />
          <input type="text" placeholder="Edad" onChange={handleYear} />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePassword}
          />
          <button type="submit">Registrarse</button>
        </div>
        <div className="options-regis">
          <h2>Formulario de registro</h2>
        </div>
      </form>
    </div>
  );
};

export default Register;
