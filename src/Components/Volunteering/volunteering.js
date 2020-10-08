import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  TextField,
} from "@material-ui/core";
import { Accessibility } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    padding: "0em 1em 0em 1em",
    maxWidth: "800px",
  },
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    padding: "1em",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,25%)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "0.5vw",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#662992",
    color: "white",
  },
  bof: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  main: {
    maxWidth: "330px",
  },
}));

export default function Volunteering() {
  const classes = useStyles();

  return (
    <div className={classes.bof}>
      <h1 className={classes.title}>
        Humanitarian work is something everyone should experience this is why we
        give you the opportunity to be one of us and volunteer!
      </h1>

      <div className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Accessibility />
          </Avatar>
          <h3 className={classes.title}>Fill the form bellow</h3>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Tell us what you want to do"
                  label="Tell us what you want to do"
                  type="Text"
                  id="Text"
                  rowsMax={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Volunteer
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
