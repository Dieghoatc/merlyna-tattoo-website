import React from "react";

import "./tattos.css";

import carHandTatto from "../../../assets/gallery/cat-hand-tatto.jpg";
import dragonLegTatto from "../../../assets/gallery/dragon-leg-tatto.jpg";
import girlArmTatto from "../../../assets/gallery/girl-arm-tattoo.jpg";

const tattosList = [
  {
    id: 1,
    artist: "Merlyna",
    image: `${carHandTatto.src} `,
    description:
      "Hace rato quería hacer una manito Muy feliz con este tattoo, lo hicimos en una sola sesión para Camila.",
  },
  {
    id: 2,
    artist: "Merlyna",
    image: `${dragonLegTatto.src} `,
    description:
      "Hace mucho quería hacer esta pieza como parte de mi entrenamiento, un año ya aprendiendo este lindo arte, con mucho respeto y amor. Así como amo mis piezas darks, también me gusta demasiado el color.",
  },
  {
    id: 3,
    artist: "Merlyna",
    image: `${girlArmTatto.src} `,
    description:
      "Una trasnochadita haciendo esa pieza. Gracias Chipi por el aguante",
  },
];

export default function Tattos() {
  return (
    <div className="tattoos">
      <h3 className="tattoo-title">Tattos Recientes</h3>
      <div className="tattoos-card">
        {tattosList.map((tattoo) => (
          <div className="tattos-item" key={tattoo.id}>
            <img src={tattoo.image} alt="tattoo" />
          </div>
        ))}
      </div>
    </div>
  );
}
