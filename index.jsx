import React from "react";
import { Bouton } from "./Bouton";
import { ChevronRight } from "./ChevronRight";
import frame from "./frame.svg";
import group2 from "./group-2.png";
import group3 from "./group-3.png";
import group4 from "./group-4.png";
import group5 from "./group-5.png";
import group6 from "./group-6.png";
import group7 from "./group-7.png";
import group8 from "./group-8.png";
import group from "./group.png";
import image from "./image.png";
import image1 from "./image.svg";
import line12 from "./line-1-2.svg";
import line13 from "./line-1-3.svg";
import line1 from "./line-1.svg";
import line22 from "./line-2-2.svg";
import line23 from "./line-2-3.svg";
import line24 from "./line-2-4.svg";
import line2 from "./line-2.svg";
import line32 from "./line-3-2.svg";
import line33 from "./line-3-3.svg";
import line34 from "./line-3-4.svg";
import line3 from "./line-3.svg";
import logo from "./logo.png";
import rable1 from "./rable-1.png";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="element">
          <div className="overlap-group">
            <div className="ariane">
              <div className="ellipse" />

              <img className="line" alt="Line" src={line13} />

              <div className="ellipse" />

              <img className="line" alt="Line" src={line24} />

              <div className="ellipse" />

              <img className="line" alt="Line" src={line34} />

              <div className="ellipse-2" />
            </div>

            <Bouton
              acte="four"
              className="bouton-instance"
              icon={<ChevronRight className="chevron-right" color="#0E4D38" />}
              label="Découvrir"
              tat="default-2"
            />
            <div className="text-wrapper-2">Acte 4</div>

            <div className="titre-acte">
              <img className="group" alt="Group" src={group6} />

              <img className="img" alt="Group" src={group7} />

              <img className="group-2" alt="Group" src={group8} />
            </div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="ariane">
              <div className="ellipse" />

              <img className="line" alt="Line" src={line12} />

              <div className="ellipse" />

              <img className="line" alt="Line" src={line23} />

              <div className="ellipse-3" />

              <img className="line" alt="Line" src={line33} />

              <div className="ellipse" />
            </div>

            <Bouton
              acte="three"
              className="bouton-instance"
              icon={<ChevronRight className="chevron-right" color="#52B4CB" />}
              label="Découvrir"
              tat="default"
            />
            <div className="titre-acte-2">
              <img className="group-3" alt="Group" src={group4} />

              <img className="group-4" alt="Group" src={group5} />
            </div>

            <div className="text-wrapper-2">Acte 3</div>
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <div className="ariane">
              <div className="ellipse" />

              <img className="line" alt="Line" src={image1} />

              <div className="ellipse-4" />

              <img className="line" alt="Line" src={line22} />

              <div className="ellipse" />

              <img className="line" alt="Line" src={line32} />

              <div className="ellipse" />
            </div>

            <Bouton
              acte="two"
              className="bouton-instance"
              icon={<ChevronRight className="chevron-right" color="#FEC9CE" />}
              label="Découvrir"
              tat="default-2"
            />
            <div className="titre-acte-3">
              <img className="group-5" alt="Group" src={group2} />

              <img className="group-6" alt="Group" src={group3} />
            </div>

            <div className="text-wrapper-3">Acte 2</div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="overlap-3">
            <div className="ariane">
              <div className="ellipse-5" />

              <img className="line" alt="Line" src={line1} />

              <div className="ellipse" />

              <img className="line" alt="Line" src={line2} />

              <div className="ellipse" />

              <img className="line" alt="Line" src={line3} />

              <div className="ellipse" />
            </div>

            <Bouton
              acte="one"
              className="bouton-instance"
              icon={<ChevronRight className="chevron-right" color="#E5E2D0" />}
              label="Découvrir"
              tat="default"
            />
            <div className="titre-acte-4">
              <img className="group-7" alt="Group" src={group} />

              <img className="frame" alt="Frame" src={frame} />

              <img className="group-8" alt="Group" src={image} />
            </div>

            <div className="text-wrapper-3">Acte 1</div>
          </div>
        </div>

        <img className="rable" alt="Rable" src={rable1} />

        <footer className="footer">
          <p className="p">2025 - Fait avec ♥� par Camille -</p>

          <div className="text-wrapper-4">Mentions légales</div>
        </footer>

        <img className="logo" alt="Logo" src={logo} />
      </div>
    </div>
  );
};
