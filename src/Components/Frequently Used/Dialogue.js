import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const Dialogue = ({ desc, onCloseModal, openModal, titlee }) => (
  <Dialog
    open={openModal}
    onClose={onCloseModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{titlee}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {desc}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCloseModal} color="primary">
        Okay
      </Button>
    </DialogActions>
  </Dialog>
);

Dialogue.propTypes = {
  desc: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  titlee: PropTypes.string.isRequired,
};

export default Dialogue;
