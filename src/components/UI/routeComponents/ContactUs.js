import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import phone from "../../../assets/phone.svg";
import email from "../../../assets/email.svg";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../../assets/background.jpg";
import mobileBackground from "../../../assets/mobileBackground.jpg";
import useInput from "../../custom-hooks/useInput";
import WrapperForm from "./WrapperForm";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2em 0",
  },
  estimateImage: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  buttonStyle: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "2em",
  },
}));
function ContactUs() {
  const classes = useStyles();

  const { reset: resetName, error: nameError, ...bindName } = useInput("");
  const { reset: resetEmail, error: emailError, ...bindEmail } = useInput("");
  const { reset: resetPhone, error: phoneError, ...bindPhone } = useInput("");
  const { reset: resetMessage, error: messageError, ...bindMessage } = useInput(
    ""
  );

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid
          item
          container
          direction="column"
          md={5}
          lg={4}
          style={{ padding: "16px" }}
        >
          <Grid item>
            <Typography variant="h4">Contact Us</Typography>

            <Typography variant="subtitle1">We're waiting</Typography>
          </Grid>

          <Grid item>
            <img src={phone} alt="phoneIcon" />
            <a
              href="tel:5555555555"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              (555) 555-5555
            </a>
          </Grid>

          <Grid item style={{ marginBottom: "0.5em" }}>
            <img src={email} alt="emailIcon" />
            <a
              href="mailto:zachary@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              abhisekmishra378@gmail.com
            </a>
          </Grid>

          <WrapperForm
            bindName={bindName}
            nameError={nameError}
            bindEmail={bindEmail}
            emailError={emailError}
            bindPhone={bindPhone}
            phoneError={phoneError}
            bindMessage={bindMessage}
            messageError={messageError}
            resetName={resetName}
            resetEmail={resetEmail}
            resetMessage={resetMessage}
            resetPhone={resetPhone}
          />
        </Grid>
        <Grid
          item
          container
          md={7}
          lg={8}
          className={classes.estimateImage}
          style={{ padding: "16px" }}
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="column">
              <Typography variant="h4" color="secondary">
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ color: "white" }}>
                Take advantage of the 21st century
              </Typography>
              <br />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.buttonStyle}
              color="primary"
            >
              Free Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
