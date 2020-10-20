import React from "react";
import "./Activities.css";
import { Soon } from "../../shared/data";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowDownward } from "@material-ui/icons";

const useStyles = makeStyles({
  wrapper: {},
  hero: {
    backgroundImage: 'url("../Images/soon2.png")',
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "90vh",
    padding: "3rem 1.5rem",
    /* grid styles */
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    alignItems: "center",
  },
});

export default function Events(props) {
  const classes = useStyles();
  const { event } = props;
  return (
    <main className={classes.wrapper}>
      <div className="hero">
        <h1>{event.title}</h1>
        <article>
          <a href="/Activities" className="browsers">
            All Events
          </a>
        </article>
      </div>
      <div className="goingdown">
        <a href="#p" className="coloraman">
          <ArrowDownward></ArrowDownward>
        </a>
      </div>
    </main>
  );
}
