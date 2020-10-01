import React from "react";
import { awards } from "../../shared/data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: "center",
  },
  title: {
    color: "#662992",
    padding: "1em",
  },
}));

export default function Awards() {
  const classes = useStyles();

  return (
    <main className={classes.wrapper}>
      <h1 className={classes.title}>Awards</h1>
    </main>
  );
}
