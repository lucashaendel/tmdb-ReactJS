import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../commons/Movies";
import "../assets/navbar.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";

const Navbar = () => {
  const login = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await axios.post("api/users/logout");
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <header className="container-navbar">
      <div className="logo-navbar">
        <Link to="/">
          <h1>Peliculon</h1>
        </Link>
      </div>
      <h2>{login}</h2>

      <div className="menu-navbar">
        <ul>
          <li>
            <Link to="/movies">Peliculas</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            {login != null ? (
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login" handle>
                Login/Register
              </Link>
            )}
            {/* <Link to="/login">{result}</Link> */}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
