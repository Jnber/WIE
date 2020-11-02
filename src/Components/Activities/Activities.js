import React from "react";
import "./Activities.css";
import ManyArticles from "../Frequently Used/manyArticles";
import { events, PinkOctober, Star, SheSolves } from "../../shared/data";
import { ArrowDownward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imagedialogue: {
    width: "50%",
  },
  up: {
    display: "flex",
    flexWrap: "wrap",
  },
  say: {
    color: "#43cac3",
    width: "50%",
    padding: "0vh 1vw",
    alignSelf: "center",
    textAlign: "center",
  },
  arttitle: {
    fontSize: "xxx-large",
    textAlign: "center",
    fontFamily: '"Quicksand", sans-serif',
  },
  browsers: {
    backgroundColor: "#43cac3",
    textDecoration: "none",
    color: "white",
    borderRadius: "0.25rem",
    textAlign: "center",
    display: "inline-block",
  },
  browserslink: {
    color: "white",
  },
  description: {
    inlineSize: "3",
  },
  winelbutton: {
    width: "100%",
    padding: "1vh 1.5vw",
    justifyContent: "flex-end",

    display: "flex",
  },
  goback: {
    whiteSpace: "pre-wrap",
  },
  espace: {
    minWidth: "40vw",
  },
}));

export default function Activities() {
  const classes = useStyles();
  return (
    <main className="wrapper">
      <div className="hero">
        <h1>Curious about what we achieved already?</h1>
        <div className={classes.espace}></div>
      </div>
      <div className="goingdown">
        <a href="#p" className="coloraman">
          <ArrowDownward></ArrowDownward>
        </a>
      </div>
      <h2 className="soon" id="p">
        Our Main Events
      </h2>
      <section className="breweries" id="breweries">
        <ul>
          <li key={PinkOctober.title}>
            <figure>
              <img src={PinkOctober.background} alt={PinkOctober.title}></img>
              <figcaption>
                <h3>{PinkOctober.title}</h3>
              </figcaption>
            </figure>
            <p className={classes.description}>{PinkOctober.intro}</p>
            <div className={classes.winelbutton}>
              <Button className={classes.browsers}>
                <Link
                  className={classes.browserslink}
                  to={{ pathname: "/Events", state: { event: PinkOctober } }}
                >
                  Show more
                </Link>
              </Button>
            </div>
          </li>
          <li key={Star.title}>
            <figure>
              <img src={Star.background} alt={Star.title}></img>
              <figcaption>
                <h3>{Star.title}</h3>
              </figcaption>
            </figure>
            <p className={classes.description}>{Star.intro}</p>
            <div className={classes.winelbutton}>
              <Button className={classes.browsers}>
                <Link
                  className={classes.browserslink}
                  to={{ pathname: "/Events", state: { event: Star } }}
                >
                  Show more
                </Link>
              </Button>
            </div>
          </li>
          <li key={SheSolves.title}>
            <figure>
              <img src={SheSolves.background} alt={SheSolves.title}></img>
              <figcaption>
                <h3>{SheSolves.title}</h3>
              </figcaption>
            </figure>
            <p className={classes.description}>{SheSolves.intro}</p>
            <div className={classes.winelbutton}>
              <Button className={classes.browsers}>
                <Link
                  className={classes.browserslink}
                  to={{ pathname: "/Events", state: { event: SheSolves } }}
                >
                  Show more
                </Link>
              </Button>
            </div>
          </li>
        </ul>
      </section>
      <h2 className="soon" id="p">
        Our other Events
      </h2>
      <ManyArticles events={events}></ManyArticles>
    </main>
  );
}
