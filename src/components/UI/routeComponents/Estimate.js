import React, { useState } from "react";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Alert from "@material-ui/lab/Alert";
import TextFieldComponent from "./TextFieldComponent";
import check from "../../../assets/check.svg";
import send from "../../../assets/send.svg";
import software from "../../../assets/software.svg";
import mobile from "../../../assets/mobile.svg";
import website from "../../../assets/website.svg";
import backArrow from "../../../assets/backArrow.svg";
import frontArrow from "../../../assets/forwardArrow.svg";
import backArrowDisabled from "../../../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../../../assets/forwardArrowDisabled.svg";
import camera from "../../../assets/camera.svg";
import upload from "../../../assets/upload.svg";
import person from "../../../assets/person.svg";
import info from "../../../assets/info.svg";
import bell from "../../../assets/bell.svg";
import users from "../../../assets/users.svg";
import iphone from "../../../assets/iphone.svg";
import gps from "../../../assets/gps.svg";
import customized from "../../../assets/customized.svg";
import data from "../../../assets/data.svg";
import android from "../../../assets/android.svg";
import globe from "../../../assets/globe.svg";
import biometrics from "../../../assets/biometrics.svg";
import people from "../../../assets/people.svg";
import estimateAnimation from "../../../animations/estimateAnimation/data.json";
import { makeStyles, withTheme } from "@material-ui/styles";
import useInput from "../../custom-hooks/useInput";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3em 0",
    padding: "1em",
  },
  animation: {
    width: "500px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    "@media (max-width: 400px)": {
      width: "250px",
    },
  },
  iconImg: {
    maxWidth: "12em",
    height: "200px",
    marginTop: "2em",
  },
  estimateBtn: {
    ...theme.typography.estimate,
    color: "white",
    borderRadius: "20px",
    marginTop: "2em",
  },
  selectedService: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const defaultServiceOptions = [
  {
    id: 1,
    title: "Which service are you interested in ?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floationg screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultServiceOptions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: person,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultServiceOptions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

function Estimate() {
  const classes = useStyles();
  const theme = useTheme();

  const [questions, setQuestions] = useState(defaultServiceOptions);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { reset: resetName, error: nameError, ...bindName } = useInput("");
  const { reset: resetEmail, error: emailError, ...bindEmail } = useInput("");
  const { reset: resetPhone, error: phoneError, ...bindPhone } = useInput("");
  const { reset: resetMessage, error: messageError, ...bindMessage } = useInput(
    ""
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailSend = () => {
    // we can integrate emailjs send email feature

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setOpen(false);
    setShowAlert(true);
    setTimeout(closeAlert, 4000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  // id -> id of the individual service
  // questionId -> question id for which options are render

  const selectServiceHandler = (id, questionId) => {
    console.log(id);
    console.log(questionId);
    if (
      id === 1 &&
      questions[questionId - 1].options[id - 1].title ===
        "Custom Software Development"
    )
      setQuestions(softwareQuestions);
    else if (
      id === 2 &&
      questions[questionId - 1].options[id - 1].title ===
        "iOS/Android App Development"
    )
      setQuestions(softwareQuestions);
    else if (
      id === 3 &&
      questions[questionId - 1].options[id - 1].title === "Website Development"
    )
      setQuestions(websiteQuestions);
    else {
      const deepCopy = cloneDeep(questions);
      const activeQuestion = deepCopy.filter((question) => question.active);

      if (activeQuestion[0].subtitle === "Select all that apply.") {
        deepCopy[activeQuestion[0].id - 1].options[
          id - 1
        ].selected = !activeQuestion[0].options[id - 1].selected;
      } else {
        deepCopy[activeQuestion[0].id - 1].options = deepCopy[
          activeQuestion[0].id - 1
        ].options.map((service) => {
          service.selected = service.id === id ? !service.selected : false;
          return service;
        });
      }

      setQuestions(deepCopy);
    }
  };

  const nextArrowDisableHelper = () => {
    const activeQuestion = questions.filter((question) => question.active);
    const flag = activeQuestion[0].id === questions[questions.length - 1].id;
    if (flag) return true;
    else return false;
  };

  const previousArrowDisableHelper = () => {
    const activeQuestion = questions.filter((question) => question.active);
    if (activeQuestion[0].id === 1) return true;
    else return false;
  };

  const moveNext = () => {
    const deepCloneQuestions = cloneDeep(questions);
    const activeQuestion = deepCloneQuestions.filter(
      (question) => question.active
    );
    const nextActiveId = activeQuestion[0].id;
    console.log(nextActiveId);
    deepCloneQuestions[nextActiveId - 1].active = false;
    deepCloneQuestions[nextActiveId].active = true;
    setQuestions(deepCloneQuestions);
  };

  const movePrevious = () => {
    const deepCloneQuestions = cloneDeep(questions);
    const activeQuestion = deepCloneQuestions.filter(
      (question) => question.active
    );
    const nextActiveId = activeQuestion[0].id;
    console.log(nextActiveId);
    deepCloneQuestions[nextActiveId - 1].active = false;
    deepCloneQuestions[nextActiveId - 2].active = true;
    setQuestions(deepCloneQuestions);
  };

  const selectedOptions = () => {
    const selectedServices = [];
    let totalCost = 0;
    questions.map((question) =>
      question.options.filter((service) => {
        if (service.selected) {
          if (service.title === "0-10")
            totalCost = totalCost + service.cost * 10;
          if (service.title === "10-100")
            totalCost = totalCost + service.cost * 20;
          if (service.title === "100+")
            totalCost = totalCost + service.cost * 50;
          totalCost = totalCost + service.cost;
          selectedServices.push(service);
        }
        return service.selected;
      })
    );

    return [selectedServices, totalCost];
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [selectedFeatures, totalCost] = selectedOptions();
  return (
    <div className={classes.root}>
      {showAlert && (
        <Alert
          severity="success"
          style={{ margin: "0 auto 0 auto", width: "400px" }}
        >
          We will connect you shortly
        </Alert>
      )}
      <Grid container direction="row">
        {/* -- first column */}
        <Grid item container direction="column" md>
          <Grid item style={{ maxWidth: "30em", marginBottom: "2em" }}>
            <Typography variant="h3"> Estimate Page </Typography>
          </Grid>

          <Grid item className={classes.animation}>
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Grid>
        </Grid>

        {/* {defaultOptions.filter(question => question.active).map((question, index) => (
          <React.Fragment key={index}>
          <Grid item>
            <Typography variant="h6" align="center" gutterBottom>
              {question.title}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ marginBottom: "2em" }}
              gutterBottom
            >
              {question.subtitle}
            </Typography>
          </Grid>
          </React.Fragment>
        ))} */}
        {/* second column */}
        <Grid item container direction="column" md>
          {questions
            .filter((question) => question.active)
            .map((question, index) => (
              <React.Fragment key={index}>
                <Grid item>
                  <Typography variant="h6" align="center" gutterBottom>
                    {question.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    style={{ marginBottom: "2em" }}
                    gutterBottom
                  >
                    {question.subtitle}
                  </Typography>
                </Grid>
                <Grid item container>
                  {question.options.map((serviceOption) => (
                    <Grid
                      item
                      container
                      direction="column"
                      style={{ padding: "1em" }}
                      key={serviceOption.id}
                      sm
                      component={Button}
                      style={{ display: "grid", textTransform: "none" }}
                      onClick={() =>
                        selectServiceHandler(serviceOption.id, question.id)
                      }
                      className={classes.selectedService}
                    >
                      <Grid
                        item
                        style={{
                          maxWidth: "12em",
                          backgroundColor: serviceOption.selected
                            ? "orange"
                            : undefined,
                        }}
                      >
                        <Typography variant="h6" align="center">
                          {serviceOption.title}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          backgroundColor: serviceOption.selected
                            ? "orange"
                            : undefined,
                        }}
                      >
                        <img
                          src={serviceOption.icon}
                          className={classes.iconImg}
                          alt={serviceOption.iconAlt}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ))}

          <Grid item container justify="center">
            <Grid item>
              <IconButton
                disabled={previousArrowDisableHelper()}
                onClick={movePrevious}
              >
                <img
                  src={
                    previousArrowDisableHelper() ? backArrowDisabled : backArrow
                  }
                  alt="goBack"
                />
              </IconButton>
            </Grid>
            <Grid item style={{ marginLeft: "3em" }}>
              <IconButton
                disabled={nextArrowDisableHelper()}
                onClick={moveNext}
              >
                <img
                  src={
                    nextArrowDisableHelper() ? forwardArrowDisabled : frontArrow
                  }
                  alt="goAhed"
                />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item container justify="center">
            <Button
              variant="contained"
              className={classes.estimateBtn}
              color="primary"
              onClick={handleOpen}
            >
              Estimate now
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        // aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Your all selection options , Please review"}
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column" sm>
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

              <Grid item style={{ marginBottom: "1em" }}>
                <TextFieldComponent
                  label="Phone"
                  id="phone"
                  fullWidth
                  bind={bindPhone}
                  error={Boolean(phoneError["phone"])}
                  helperText={phoneError["phone"] ? phoneError["phone"] : ""}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">
                  Your total estimation is
                  <span style={{ color: "orange", marginLeft: "0.3em" }}>
                    {totalCost}$
                  </span>
                  .
                </Typography>
                <Typography variant="subtitle1">
                  Please fill your name, email address and phone number . We
                  will connect with you shortly .
                </Typography>
              </Grid>
            </Grid>

            <Grid item sm>
              <Typography variant="subtitle2">Services you choose</Typography>
              <List>
                {selectedFeatures.map((option, index) => (
                  <>
                    <ListItem key={index}>
                      <img
                        src={check}
                        alt="tickmark"
                        style={{ marginRight: "0.5em" }}
                      />{" "}
                      <ListItemText>{option.title}</ListItemText>
                    </ListItem>
                  </>
                ))}
              </List>
            </Grid>
          </Grid>
        </DialogContent>
        {selectedFeatures.length ? (
          <DialogActions>
            <Button
              onClick={handleEmailSend}
              variant="contained"
              disabled={
                !(
                  !Boolean(nameError["name"]) &&
                  Boolean(bindName.value) &&
                  !Boolean(emailError["email"]) &&
                  Boolean(bindEmail.value) &&
                  !Boolean(phoneError["phone"]) &&
                  Boolean(bindPhone.value)
                )
              }
              color="secondary"
            >
              Send
              <img style={{ marginLeft: ".5em" }} src={send} alt="send btn" />
            </Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Typography variant="subtitle1">
              Please select atleast one service .
            </Typography>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default Estimate;
