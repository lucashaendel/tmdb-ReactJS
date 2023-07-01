import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/moviesAndTv.css";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

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
        <button>&#128270;</button>
      </form>
      <div className="container">
        <div className="container-img">
          {movies.map((movie) => (
            <>
              <div className="dataMovie">
                <h3>{movie.title}</h3>
              </div>

              <div key={movie.id} className="img">
                <img
                  src={`${urlImage + movie.poster_path}`}
                  className="img-poster"
                />
                <div className="vote">
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;

/* <div className="capa">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Valoracion: {movie.vote_average}</p>
                <p>Fecha: {movie.release_date}</p>
                {/* <Link to={`/description`} params={movie} className="seeMore"> */
/*  <Link
                  to={`/description/`}
                  className="seeMore"
                  peli={movie.title}
                >
                  <p>Ver mas...</p>
                </Link>
                <button type="submit" className="addToFavorites">
                  Agregar a favoritos
                </button>
              </div> */
