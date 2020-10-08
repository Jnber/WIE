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

export default function ManyArticles(props) {
  const { events } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [t, ti] = React.useState("");
  const [d, de] = React.useState("");
  const [p, pa] = React.useState("");
  const [i, im] = React.useState("");

  function handleClickOpen(e) {
    ti(e.titlee);
    de(e.desc);
    pa(e.paragraph2);
    im(e.img);
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
            <p>{e.desc}</p>

            <Button
              variant="outlined"
              color="primary"
              className="browsers"
              onClick={() => handleClickOpen(e)}
            >
              Show more
            </Button>
          </li>
        ))}
      </ul>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{t}</DialogTitle>
        <DialogContent>
          <DialogContentText>
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
