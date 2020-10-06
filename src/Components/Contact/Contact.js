import React from "react";
import "./Contact.css";
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home, Mail, Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  Up: {
    width: "100%",
    marginRight: "2em",
  },
  talk: {
    margin: "5em",

    fontSize: "xxx-large",
  },
  grid: {
    /* grid styles */
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    alignItems: "center",
    flexWrap: "wrap",
    overflow: "hidden",
    margin: "2em 5em",
    gridGap: "1em",
  },
  soustit: {
    color: "#43cac3",
    fontWeight: "400",
    padding: "1em",
  },
  info: {
    padding: "2em",
  },
  para: {
    fontSize: "small",
  },
  form: {
    width: "80%",
    textAlign: "center",
  },
  contactem: {
    marginLeft: "2em",
    marginBottom: "1em",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.Up}>
      <h1 className={classes.talk} id="talk">
        Let's Talk
      </h1>
      <div className={classes.grid} id="supise">
        <div className={classes.info}>
          <p>
            If you want to contact us, have any question or proposition, here is
            what you need
          </p>
          <h6 className={classes.soustit}>ADDRESSE</h6>
          <p>
            <Home></Home> Institut National Des Sciences Appliquées et de la
            Technologie.
            <br></br>
            Centre Urbain Nord.
            <br></br>
            1053 Tunis
          </p>
          <h6 className={classes.soustit}>EMAIL</h6>
          <p>
            <Mail></Mail> Contact@wie.ieee.tn
          </p>
          <h6 className={classes.soustit}>TELEPHONES</h6>
          <p>
            Aya Jeaidi: Chair
            <br></br>
            <Phone></Phone> +216 98 33 82 81
          </p>
          <p>
            Manel Ghrima: Ressources Humaines
            <br></br>
            <Phone></Phone> +216 98 38 20 28
          </p>
          <p>
            Nawel Bouaziz: Vice Chair
            <br></br>
            <Phone></Phone> +216 70 294 962
          </p>
        </div>
        <div>
          <h2 className={classes.contactem}>Directly Contact Us</h2>
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
                  autoFocus
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
                  id="phone"
                  label="Phone Number"
                  name="Phone Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Message"
                  label="Message"
                  type="Text"
                  id="Text"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <p className={classes.para}>
              Vos données sont bien protegées avec nous.
              <br></br>
              On vous recontactera le plus tôt possible
            </p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Contact
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
