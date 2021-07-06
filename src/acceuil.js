import "./App.css";
import ButtonAppBar from "./Components/appBar";
import React from "react";
import FadeIn from "react-fade-in";
import sc from "./assets/sc.png";

function Acceuil() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  return (
    <div className="App">
      <ButtonAppBar
        prevOpen={prevOpen}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
        open={open}
        setOpen={setOpen}
      ></ButtonAppBar>
      {!open ? (
        <div className="title-sec">
          <FadeIn>
            {" "}
            <div className="mItem">
              <li>Acceuil</li>
            </div>
          </FadeIn>
        </div>
      ) : (
        <div></div>
      )}
      <div className="acceuil-content">
        <div className="innerAcceuil">
          <div className="content-title">
            <p>LEARNIFY</p>
          </div>

          <p>
            C’est une application interactive répondant aux défis de
            l’e-Apprentissage pour améliorer l'accessibilité et l'acquisition
            des connaissances de l’enfant en offrant des ressources et des
            outils afin de promouvoir ce type de Learning dans un contexte
            éducatif.
          </p>
          <br />
          <img src={sc} alt="" />
          <p>Learnify permet de : </p>
          <br />
          <p>
            1. Développer la capacité de concentration, précision d’observation
            et mémorisation des informations.
          </p>
          <br />
          <p>
            2.Offrir un moyen de collaborer et développer des compétences
            sociales.{" "}
          </p>
          <br />
          <p>3.Offrir des moments de divertissement d’une manière amusante.</p>
          <br />
          <p>
            4.Prendre en considération le comportement, voire l’état émotionnel
            d’un enfant en situation d’apprentissage.
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
