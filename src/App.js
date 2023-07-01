import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Movies from "./commons/Movies";
import Series from "./commons/Series";
import Description from "./commons/Description";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((result) => dispatch(setUser(result.data.userName)));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>

        <Route path="/series" element={<Series />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/description" element={<Description />}></Route>
      </Routes>
    </div>
  );
};

export default App;
