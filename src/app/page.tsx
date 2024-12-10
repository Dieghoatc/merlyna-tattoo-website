"use client";
import React from "react";
import { useEffect } from "react";

import "./header.css";
import "./components/footer/footer.css";
import "./components/main/main.css";
import "./components/artist/artist.css";
import merlynaLogo from "../assets/merlyna-logo.png";
import merlynaBateria from "../assets/merlyna-bateria.jpg";
import merlynaProfile from "../assets/merlyna-profile.jpg";
import arrowDown from "../assets/arrow-down-white.png";
import { BrushPattern } from "./components/header/BrushPattern";
import BrushPatternMobile from "./components/header/BrushPatternMobile";
import Tattos from "./components/tattos/Tattos";

import instagram from "../assets/instagram-50.png";

export default function Home() {
  const [isMobile, setIsmobile] = React.useState(false);

  useEffect(() => {
    const height = window.innerWidth;
    if (height < 426) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  }, []);

  return (
    <div>
      <header>
        <div className="hero-container">
          <div className="brush-pattern">
            {isMobile ? <BrushPatternMobile /> : <BrushPattern />}
          </div>
          <nav className="nav-container">
            <div className="list-left">
              <ul className="text-right">
                <li>
                  <a href="/Home">Inicio</a>
                </li>
              </ul>
            </div>
            <div className="logo-container">
              <div className="logo">
                <img src={merlynaLogo.src} alt="Merlyna Logo" />
              </div>
            </div>
            <div className="list-right">
              <ul className="text-left">
                <li>
                  <a href="/about">Acerca de mi</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="down-bottom">
            <a href="#main">
              <img src={arrowDown.src} alt="arrow down" />{" "}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="main" className="main">
          <div className="description">
            <h1 className="title">Merlyna Tattoo</h1>
            <p>
              Ubicada en <span className="color-text">Bogotá D.C. </span>Con
              profundo amor por <span className="color-text">Medellin</span> mi
              segunda casa. Tatuando desde <b>Agosto de 2023</b>{" "}
              <q className="color-text">Amor por el Arte siempre.</q>
            </p>
            <p>
              Merlyna Tattoo es el reflejo de una pasión inquebrantable por el
              arte. Aquí, cada línea y cada trazo se dibujan con respeto, amor y
              el compromiso de entregar piezas únicas que conecten con tus
              emociones y estilo. Tanto si amas los diseños darks llenos de
              misterio, como los tatuajes llenos de color y vida, este es el
              lugar donde tus ideas cobran vida.
            </p>
            <p>
              Impulsada por la energía del rock, la vibra del hip hop y la
              adrenalina del skate, Merlyna plasma sus pasiones en cada pieza,
              creando tatuajes que cuentan historias auténticas.
            </p>
            <p>
              Desde Bogotá hasta Medellín, agradecemos a nuestros clientes por
              su confianza y aguante. ¡Tu piel es nuestro{" "}
              <span className="color-text">lienzo</span> y cada{" "}
              <span className="color-text">tatuaje</span> es es una nueva
              oportunidad de hacerlo aún mejor!
            </p>
            <p>
              Ven, vive la experiencia de transformar tus ideas en arte con
              Merlyna Tattoo.
              <strong>
                <q>Cada día es una nueva oportunidad de hacerlo aún mejor</q>
              </strong>
              .
            </p>
          </div>
          <div className="description-image">
            <img src={merlynaBateria.src} alt="Merlyna en la bateria" />
          </div>
        </section>

        <section className="artists">
          <article>
            <h2 className="subtitle">Artistas</h2>
            <div className="artist">
              <h3 className="artist-name">Merlyna</h3>
              <div className="artist-image">
                <img src={merlynaProfile.src} alt="Merlyna" />
              </div>
            </div>
          </article>
        </section>

        <section>
          <Tattos />
        </section>
      </main>
      <footer className="footer-container">
        <div>
          <a href="https://www.instagram.com/merlinkna/">
            <img src={instagram.src} alt="Instagram" />
          </a>
        </div>
        <div>
          <p>© 2025 Merlyna Tattoo - <a href="http://www.dieghoatc.com" className="link-dieghoatc">Dieghoatc.com</a></p>
        </div>
      </footer>
    </div>
  );
}
