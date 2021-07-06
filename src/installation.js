import "./App.css";
import ButtonAppBar from "./Components/appBar";
import React from "react";
import FadeIn from "react-fade-in";
import apk from "./assets/app-release.apk";
function Installation() {
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
              <li>Lien et guide d'installation</li>
            </div>
          </FadeIn>
        </div>
      ) : (
        <div></div>
      )}
      <div className="install-content">
        <div className="download-button">
          <div className="mItem">
            <li>
              <a href={apk} download>
                Télécharger
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;
