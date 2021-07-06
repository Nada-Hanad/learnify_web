import "./App.css";
import ButtonAppBar from "./Components/appBar";
import sc from "./assets/sc.png";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Acceuil from "./acceuil";
import Description from "./description.js";
import installation from "./installation";
import How from "./how";
import Apropos from "./apropos";

function App() {
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
    <Router>
      <Switch>
        <Route exact path="/">
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
            <div className="content">
              <div className="Container">
                {/* <div className="content-image"></div> */}
                <img src={sc} alt="Not found" />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/acceuil" component={Acceuil} />
        <Route path="/description" component={Description} />
        <Route path="/installation" component={installation} />
        <Route path="/comment-jouer" component={How} />
        <Route path="/a-propos" component={Apropos} />
        /installation Description
      </Switch>
    </Router>
  );
}

export default App;
