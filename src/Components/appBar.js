import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({
  handleClose,
  handleListKeyDown,
  handleToggle,
  anchorRef,
  open,
  hide,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="myBar">
        <nav position="static">
          <Toolbar>
            <IconButton
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <div className="menuIcon">
                {" "}
                <svg
                  width="25"
                  height="15"
                  viewBox="0 0 40 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.2437 23.0768C26.5559 23.0764 26.8569 23.1659 27.0875 23.3278C27.3182 23.4897 27.4617 23.7122 27.4899 23.9515C27.5181 24.1908 27.4289 24.4295 27.2399 24.6207C27.0509 24.8119 26.7757 24.9417 26.4686 24.9845L26.2437 24.9999H1.26626C0.951577 25.0033 0.646847 24.915 0.413021 24.7529C0.179194 24.5907 0.0335091 24.3666 0.00510135 24.1253C-0.0233064 23.884 0.067658 23.6433 0.259802 23.4514C0.451945 23.2595 0.731103 23.1306 1.04144 23.0903L1.26626 23.0749H26.2462L26.2437 23.0768ZM38.7337 11.5519C39.0484 11.5486 39.3532 11.6368 39.587 11.799C39.8208 11.9611 39.9665 12.1853 39.9949 12.4266C40.0233 12.6679 39.9323 12.9085 39.7402 13.1004C39.5481 13.2923 39.2689 13.4213 38.9586 13.4615L38.7337 13.4769H1.26876C0.954074 13.4803 0.649345 13.392 0.415519 13.2299C0.181693 13.0677 0.0360069 12.8436 0.00759917 12.6023C-0.0208086 12.361 0.0701558 12.1203 0.262299 11.9284C0.454443 11.7365 0.733601 11.6076 1.04394 11.5673L1.26876 11.5519H38.7337V11.5519ZM28.7442 9.19305e-05C29.0589 -0.00325651 29.3637 0.0849746 29.5975 0.247139C29.8313 0.409303 29.977 0.633446 30.0054 0.874739C30.0338 1.11603 29.9428 1.35669 29.7507 1.54857C29.5586 1.74046 29.2794 1.86943 28.9691 1.90969L28.7442 1.92315H1.26626C0.951577 1.9265 0.646847 1.83827 0.413021 1.67611C0.179194 1.51394 0.0335091 1.2898 0.00510135 1.04851C-0.0233064 0.807214 0.067658 0.566559 0.259802 0.374673C0.451945 0.182787 0.731103 0.0538157 1.04144 0.0135533L1.26626 9.19305e-05H28.7442Z"
                    fill="#3A1D0D"
                  />
                </svg>
              </div>
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <div className="menuList">
                        {" "}
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <FadeIn>
                            {" "}
                            <div className="mItem">
                              <li onClick={handleClose}>
                                <Link to="/acceuil">Acceuil</Link>
                              </li>
                            </div>
                          </FadeIn>
                          <FadeIn>
                            {" "}
                            <div className="mItem">
                              <li onClick={handleClose}>
                                <Link to="/description">
                                  Description du jeu
                                </Link>
                              </li>
                            </div>
                          </FadeIn>
                          <FadeIn>
                            {" "}
                            <div className="mItem">
                              <li onClick={handleClose}>
                                <Link to="/installation">
                                  {" "}
                                  Lien et guide d'installation
                                </Link>
                              </li>
                            </div>
                          </FadeIn>
                          <FadeIn>
                            {" "}
                            <div className="mItem">
                              <li onClick={handleClose}>
                                <Link to="/comment-jouer">Comment jouer?</Link>
                              </li>
                            </div>
                          </FadeIn>
                          <FadeIn>
                            {" "}
                            <div className="mItem">
                              <li onClick={handleClose}>
                                <Link to="/a-propos">A propos</Link>
                              </li>
                            </div>
                          </FadeIn>
                        </MenuList>
                      </div>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Typography variant="h6" className={classes.title}>
              <div className="title">Learnify</div>
            </Typography>
          </Toolbar>
        </nav>
      </div>
    </div>
  );
}
