import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../assets/moviesAndTv.css";

const Series = () => {
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "58c2574703eb959860a83eb6667a378a";
  const urlImage = "https://image.tmdb.org/t/p/original";

  const [series, setSeries] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchSeries = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${apiUrl}/${type}/tv`, {
      params: {
        api_key: apiKey,
        query: searchKey,
      },
    });
    setSeries(results);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchSeries(searchKey);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div>
      <h2>Series</h2>

      <form onSubmit={searchMovies} className="search">
        <input
          type="text"
          placeholder="buscar"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button>&#128270;</button>
      </form>
      <div className="container mt-3">
        <div className="container-img">
          {series.map((serie) => (
            <div key={serie.id} className="img">
              <img
                src={`${urlImage + serie.poster_path}`}
                alt=""
                width="55%"
                className="img-poster"
              />
              <div className="capa">
                <h3>{serie.name}</h3>
                <p>{serie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
