import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  out: {
    margin: "3vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  toppic: {
    width: "95vw",
    minHeight: "85vh",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    borderRadius: "10px",
  },
  articlebody: {
    width: "80vw",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    zIndex: "3",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "5vh 2vw",
    marginTop: "-5vh",
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.2)",
  },
  intro: {
    width: "50vw",
    marginBottom: "5vh",
  },
  yearframe: {
    padding: "2vh 0vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55vw",
  },
  yearimage: {
    width: "20vw",
  },
  yeardesc: {
    flexDirection: "column",
    width: "30vw",
  },
  introduction: {
    padding: "2vh 8vw",
  },
});

export default function Events(props) {
  console.log(props);
  const classes = useStyles();
  const { event } = props.location.state;

  return (
    <main className={classes.out}>
      <div
        className={classes.toppic}
        style={{ backgroundImage: `url(${event.background})` }}
      ></div>
      <div className={classes.articlebody}>
        <h2>{event.title}</h2>
        <p className={classes.introduction}>{event.intro}</p>
        {event.years.map((e, index) => (
          <div key={index} className={classes.yearframe}>
            <img src={e.image} alt={index} className={classes.yearimage}></img>
            <div className={classes.yeardesc}>
              <h5>{e.year}</h5>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
