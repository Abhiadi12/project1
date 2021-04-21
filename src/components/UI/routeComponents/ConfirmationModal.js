import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import WrapperForm from "./WrapperForm";

function ConfirmationModal({ open, handleClose, hanleEmailSend, ...others }) {
  const {
    bindName,
    nameError,
    bindEmail,
    emailError,
    bindPhone,
    phoneError,
    bindMessage,
    messageError,
  } = others;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Please Confirm Your Submission
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          We will get back to you as soon as possible
        </DialogContentText>
        <WrapperForm
          bindName={bindName}
          nameError={nameError}
          bindEmail={bindEmail}
          emailError={emailError}
          bindPhone={bindPhone}
          phoneError={phoneError}
          bindMessage={bindMessage}
          messageError={messageError}
          isConfirm={open}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={hanleEmailSend}
          disabled={
            !(
              !Boolean(nameError["name"]) &&
              Boolean(bindName.value) &&
              !Boolean(emailError["email"]) &&
              Boolean(bindEmail.value) &&
              !Boolean(phoneError["phone"]) &&
              Boolean(bindPhone.value) &&
              !Boolean(messageError["phone"]) &&
              Boolean(bindMessage.value)
            )
          }
          color="secondary"
        >
          Proceed
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationModal;
