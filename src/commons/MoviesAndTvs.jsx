import React, { useState, useEffect } from "react";
import axios from "axios";
import Unico from "./Home";

const MoviesAndTvs = () => {
  const [prop, setProp] = useState("");
  const handleAlgo2 = () => {
    setProp("series");
  };
  const handleAlgo = () => {
    setProp("Peliculas");
  };
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "58c2574703eb959860a83eb6667a378a";
  const urlImage = "https://image.tmdb.org/t/p/original";

  const [moviesAndTvs, setMoviesAndTvs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchResult = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const series = prop === "Peliculas" ? "movie" : "tv";

    const {
      data: { results },
    } = await axios.get(`${apiUrl}/${type}/${series}`, {
      params: {
        api_key: apiKey,
        query: searchKey,
      },
    });
    setMoviesAndTvs(results);
  };

  const searchResult = (e) => {
    e.preventDefault();
    fetchResult(searchKey);
  };

  useEffect(() => {
    fetchResult();
  }, [prop]);

  return prop === "" ? (
    <div className="container-header">
      <div className="container-btn">
        <button onClick={() => handleAlgo()}>Peliculas</button>
        <button onClick={() => handleAlgo2()}>Series</button>
      </div>
      <Unico />
    </div>
  ) : (
    <div>
      <div className="container-header">
        <div className="container-btn">
          <button onClick={() => handleAlgo()}>Peliculas</button>
          <button onClick={() => handleAlgo2()}>Series</button>
        </div>
        <h2>{prop}</h2>
        <form onSubmit={searchResult} className="search">
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button>&#128270;</button>
        </form>
      </div>
      <div className="container">
        {moviesAndTvs.map((movieAndTv) => (
          <>
            <div className="dataMovie">
              <h3>{movieAndTv.name ? movieAndTv.name : movieAndTv.title}</h3>
            </div>

            <div key={movieAndTv.id} className="img">
              <img
                src={`${urlImage + movieAndTv.poster_path}`}
                className="img-poster"
              />
              <div className="vote">
                <p>{movieAndTv.vote_average.toFixed(1)}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MoviesAndTvs;
