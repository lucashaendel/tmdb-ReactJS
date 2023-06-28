import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/moviesAndTv.css";

const Movies = () => {
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "58c2574703eb959860a83eb6667a378a";
  const urlImage = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${apiUrl}/${type}/movie`, {
      params: {
        api_key: apiKey,
        query: searchKey,
      },
    });
    setMovies(results);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h2>Peliculas</h2>

      <form onSubmit={searchMovies} className="search">
        <input
          type="text"
          placeholder="buscar"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button>BUSCAR</button>
      </form>
      <div className="container">
        <div className="container-img">
          {movies.map((movie) => (
            <div key={movie.id} className="img">
              <img
                src={`${urlImage + movie.poster_path}`}
                alt=""
                width="55%"
                className="img-poster"
              />
              <div className="capa">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                {}

                <a href="/#" className="seeMore">
                  Ver mas...
                </a>
                <button type="submit" className="addToFavorites">
                  Agregar a favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
