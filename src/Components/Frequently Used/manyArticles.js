import React from "react";
import "../Activities/Activities.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function ManyArticles(props) {
  const classes = useStyles();
  const { events } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [t, ti] = React.useState("");
  const [d, de] = React.useState("");
  const [p, pa] = React.useState("");
  const [i, im] = React.useState("");
  const [s, sa] = React.useState("");

  function handleClickOpen(e) {
    ti(e.titlee);
    de(e.desc);
    pa(e.paragraph2);
    im(e.img);
    sa(e.saying);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section className="breweries" id="breweries">
      <ul>
        {events.map((e) => (
          <li key={e.titlee}>
            <figure>
              <img src={e.img} alt={e.titlee}></img>
              <figcaption>
                <h3>{e.titlee}</h3>
              </figcaption>
            </figure>
            <p className={classes.description}>{e.desc}</p>
            <div className={classes.winelbutton}>
              <Button
                className={classes.browsers}
                onClick={() => handleClickOpen(e)}
              >
                Show more
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={classes.arttitle}>
          {t}
        </DialogTitle>
        <DialogContent>
          <div className={classes.up}>
            <img src={i} alt="t" className={classes.imagedialogue}></img>
            <h4 className={classes.say}>{s}</h4>
          </div>
          <DialogContentText className={classes.goback}>
            <br></br>
            <br></br>
            {d}
            {p}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
