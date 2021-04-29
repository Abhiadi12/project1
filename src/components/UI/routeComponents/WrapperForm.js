import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import useInput from "../../custom-hooks/useInput";
import TextFieldComponent from "./TextFieldComponent";
import ConfirmationModal from "./ConfirmationModal";
import * as emailjs from "emailjs-com";
import CircularProgress from "@material-ui/core/CircularProgress";
import MySnackBar from "./MySnackBar";

const useStyles = makeStyles((theme) => ({
  messageBox: {
    border: `2px solid ${theme.palette.arcBlue}`,
    borderRadius: "5px",
  },
  errorMessageBox: {
    border: "2px solid red",
    borderRadius: "5px",
  },
}));

function WrapperForm({
  bindName,
  nameError,
  bindEmail,
  emailError,
  bindPhone,
  phoneError,
  bindMessage,
  messageError,
  isConfirm,
  ...others
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [severity, setSeverity] = React.useState("success");
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  // get all reset functions
  const { resetName, resetEmail, resetMessage, resetPhone } = others;

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const sendEmail = () => {
    setLoading(true);
    let templateParams = {
      from_name: bindEmail.value,
      to_name: "abhisekmishra378@gmail.com",
      subject: `Your Query`,
      message: bindMessage.value,
    };
    emailjs
      .send(
        "service_84t74fb",
        "template_b80su9b",
        templateParams,
        "user_iqqTpW6bO6FhIVjYpV8S3"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSeverity("success");
        setOpenSnackBar(true);
        resetName();
        resetEmail();
        resetMessage();
        resetPhone();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setLoading(false);
        setSeverity("error");
        setOpenSnackBar(true);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // send email by emailjs
  const hanleEmailSend = () => {
    sendEmail();
    setOpen(false);
  };

  return (
    <div>
      <Grid item style={{ marginBottom: "0.5em" }}>
        <TextFieldComponent
          label="Name"
          id="name"
          bind={bindName}
          error={Boolean(nameError["name"])}
          helperText={nameError["name"] ? nameError["name"] : ""}
        />
      </Grid>

      <Grid item style={{ marginBottom: "0.5em" }}>
        <TextFieldComponent
          label="Email"
          id="email"
          fullWidth
          bind={bindEmail}
          error={Boolean(emailError["email"])}
          helperText={emailError["email"] ? emailError["email"] : ""}
        />
      </Grid>

      <Grid item style={{ marginBottom: "0.5em" }}>
        <TextFieldComponent
          label="Phone"
          id="phone"
          fullWidth
          bind={bindPhone}
          error={Boolean(phoneError["phone"])}
          helperText={phoneError["phone"] ? phoneError["phone"] : ""}
        />
      </Grid>

      <Grid item style={{ marginBottom: "0.5em" }}>
        <TextField
          InputProps={{ disableUnderline: true }}
          className={
            Boolean(messageError["message"])
              ? classes.errorMessageBox
              : classes.messageBox
          }
          multiline
          fullWidth
          rows={10}
          id="message"
          error={Boolean(messageError["message"])}
          helperText={messageError["message"] ? messageError["message"] : ""}
          {...bindMessage}
        />
      </Grid>
      {isConfirm || (
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            endIcon={loading ? undefined : <SendIcon />}
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
            onClick={handleClickOpen}
          >
            {loading ? <CircularProgress /> : "Send"}
          </Button>
        </Grid>
      )}
      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        hanleEmailSend={hanleEmailSend}
        bindName={bindName}
        nameError={nameError}
        bindEmail={bindEmail}
        emailError={emailError}
        bindPhone={bindPhone}
        phoneError={phoneError}
        bindMessage={bindMessage}
        messageError={messageError}
      />

      <MySnackBar
        open={openSnackBar}
        handleClose={handleCloseSnackBar}
        severity={severity}
      />
    </div>
  );
}

export default WrapperForm;
