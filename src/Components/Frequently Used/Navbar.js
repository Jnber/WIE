import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About Us/AboutUs";
import Activities from "./Components/Activities/Activities";
import Footer from "./Components/Frequently Used/Footer";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Logo from "./Images/LogoColor.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Article from "./Components/Activities/Article";
import Humanitarian from "./Components/Humanitarian/Humanitarian";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  button: {
    color: "white",
    fontWeight: "bold",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(90, 0, 116)",
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  html: {
    width: "fit-content",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.html}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          id="Appbar"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              id="menuicon"
            >
              <MenuIcon />
            </IconButton>
            <Grid item xs={9} className="Buttons">
              {[
                "Home",
                "About Us",
                "Activities",
                "Humanitarian",
                "Members",
                "Contact",
              ].map((value) => (
                <Link
                  key={value}
                  value={value.toString()}
                  to={"/" + value.toString()}
                  id="Button"
                  className={classes.button}
                  label={value.toString()}
                >
                  {value.toString()}
                </Link>
              ))}
            </Grid>
            <Grid item xs={10} className="logoplace">
              <img src={Logo} alt="logo" className="Logoimg"></img>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              "Home",
              "About Us",
              "Activities",
              "Humanitarian",
              "Members",
              "Contact",
            ].map((text, index) => (
              <ListItem button key={text}>
                <Link
                  key={text}
                  value={"/" + text.toString()}
                  to={text.toString()}
                  id="Button"
                  className={classes.button}
                  label={text.toString()}
                >
                  {text.toString()}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
}
