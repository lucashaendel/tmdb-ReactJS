import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MoviesAndTvs from "./commons/MoviesAndTvs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import Unico from "./commons/Home";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((result) => dispatch(setUser(result.data.userName)));
  }, []);

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<MoviesAndTvs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes> */}
      <MoviesAndTvs />
    </div>
  );
};

export default App;
