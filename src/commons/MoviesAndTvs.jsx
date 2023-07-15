import React, { useState, useEffect } from "react";
import axios from "axios";
import Unico from "./Home";
import { Link, Navigate } from "react-router-dom";
import Aos from "aos";
import Loading from "./Loading";

const MoviesAndTvs = () => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // useEffect(() => {

  // }, []);

  return prop === "" ? (
    <div className="container-header">
      <div className="container-btn">
        <button onClick={() => handleAlgo()}>Peliculas</button>
        <button onClick={() => handleAlgo2()}>Series</button>
      </div>
      <Unico />
    </div>
  ) : loading ? (
    <Loading />
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
          <button>
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z"
                  fill="#3800d3"
                ></path>
              </g>
            </svg>
          </button>
        </form>
      </div>
      <div className="container">
        {moviesAndTvs.map((movieAndTv) => (
          <div className="container-general" data-aos="fade-down">
            <div className="dataMovie">
              <h3>{movieAndTv.name ? movieAndTv.name : movieAndTv.title}</h3>
            </div>

            <div key={movieAndTv.id} className="img">
              <Link
                to={{
                  pathname: `/description/${movieAndTv.id}`,
                }}
                state={movieAndTv}
              >
                <img
                  src={`${urlImage + movieAndTv.poster_path}`}
                  className="img-poster"
                />
              </Link>
              <div className="vote">
                <p>{movieAndTv.vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesAndTvs;
