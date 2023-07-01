import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container-home">
      {/* <h2>asd</h2> */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/5ef05158-f865-42ca-806b-f79cb52ea54b/AR-es-20230626-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="img_back"
      />
      <div className="capa">
        <div className="slogan">
          <h3>Peliculas y series </h3>
          <h3>En un solo lugar </h3>
        </div>
        <div className="suscription">
          <p>
            ¿Queres estar al tanto de todo lo nuevo? Ingresa tu email para
            suscribirte y empezá a recibir todas las novedades que Peliculon
            tiene para vos.
          </p>
          <form action="form" className="formulario-Suscripcion">
            <input type="email" placeholder="Ingresa tu mail" />
            <button type="submit">Comenzar ahora </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
