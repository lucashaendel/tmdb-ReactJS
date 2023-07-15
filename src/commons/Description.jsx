import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Aos from "aos";
import Loading from "./Loading";

export const Description = () => {
  const [loading, setLoading] = useState(true);
  const id = useParams();
  const result = useLocation().state;
  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="container-description">
      <div className="card-description">
        <img
          src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          alt="backdrop"
          className="backdrop"
          data-aos="fade-down"
        />
        <img
          src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          alt="poster"
          className="poster"
          data-aos="fade-down"
        />
        <div className="data-description" data-aos="fade-up">
          <h2 data-aos="fade-right">
            {result.name ? result.name : result.title}
          </h2>
          <p data-aos="fade-up">{result.overview}</p>
          <p>
            <span>Valoracion: </span>
            {result.vote_average}
          </p>
          <div className="data-datos">
            <p>
              <span>Idioma:</span> {result.original_language.toUpperCase()}
            </p>
            <p>
              <span>Fecha: </span>
              {result.release_date}
            </p>
          </div>
        </div>
        <div className="data-play">
          <button>
            <svg
              width="89px"
              height="89px"
              viewBox="-1.92 -1.92 27.84 27.84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
                transform="translate(4.08,4.08), scale(0.66)"
              >
                <rect
                  x="-1.92"
                  y="-1.92"
                  width="27.84"
                  height="27.84"
                  rx="13.92"
                  fill="#3800d3"
                  strokewidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.048"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Media / Play_Circle">
                  {" "}
                  <g id="Vector">
                    {" "}
                    <path
                      d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                      stroke="#f0f0f0"
                      stroke-width="0.8160000000000001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M10 15V9L15 12L10 15Z"
                      stroke="#f0f0f0"
                      stroke-width="0.8160000000000001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
