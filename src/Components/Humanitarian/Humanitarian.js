import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ManyArticles from "../Frequently Used/manyArticles";
import { events as Humanitarianevents } from "../../shared/data";
import Happy from "../Images/Happy.jpg";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    padding: "0.5em 5em",
  },
  para: {
    textAlign: "center",
    color: "black",
    fontSize: "large",
    padding: "0.2em 10em",
  },
  happy: {
    backgroundImage: `url(${Happy})`,
    height: "80vh",
    display: "flex",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function Humanitarian() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.happy}>
        <h1 className={classes.title}>
          Humanitarian work is something everyone should experience
        </h1>

        <p className={classes.para}>
          As the WIE Affinity group in INSAT, we decided to dedicate a huge part
          of our efforts to help those in need and make people happy
        </p>
      </div>
      <ManyArticles events={Humanitarianevents}></ManyArticles>
    </div>
  );
}
