import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useResponsiveParameter from "../../custom-hooks/useResponsiveParameter";
import backArrow from "../../../assets/backArrow.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import integrationAnimation from "../../../animations/integrationAnimation/data.json";
import extendFunctionality from "../../../assets/swissKnife.svg";
import extendAccess from "../../../assets/extendAccess.svg";
import increaseEngagement from "../../../assets/increaseEngagement.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: "2em 0",
  },
  heading: {
    maxWidth: "30em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
    },
  },
  arrowContainer: {
    marginTop: "0.2em",
  },
  startColumnMargin: {
    marginLeft: "3em",
  },
  topMarginControl: {
    marginTop: "6em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
    },
  },
  rightHandColumn: {
    maxWidth: "20em",
    marginRight: "1em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  iconImg: {
    marginLeft: "1em",
  },
  typographyMargin: {
    marginBottom: "2em",
  },
  extendAccessImg: {
    height: "auto",
    maxWidth: "500px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
    },
  },
}));
function AppDevelopment() {
  const classes = useStyles();
  const [matchesMD, matchesSM, matchesXS] = useResponsiveParameter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid
          item
          container
          justify={matchesMD ? "space-around" : undefined}
          component={Card}
          style={{ padding: "16px" }}
        >
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={backArrow} alt="go back" />
            </IconButton>
          </Grid>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h4">iOS/Android App Development</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Wheather you want to build an Android App or IOS App we are
                always there to help as maximum as possible. This opens you up
                to a whole new world of possibilities by taking advantage of
                phone features like the camera, GPS, push notifications, and
                more.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={forwardArrow} alt="go back" />
            </IconButton>
          </Grid>
        </Grid>
        {/* ------------- end of first row --------------- */}

        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? undefined : "space-around"}
          alignItems={matchesSM ? "center" : undefined}
          className={clsx(classes.topMarginControl)}
          component={Card}
          style={{ padding: "16px" }}
        >
          <Grid item className={classes.startColumnMargin}>
            <Grid container direction={matchesSM ? "column" : "row"}>
              <Grid
                item
                container
                direction="column"
                className={classes.heading}
              >
                <Grid item>
                  <Typography variant="h4">Integration</Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="subtitle1">
                    Our technology enables an innate interconnection between web
                    and mobile applications, putting everything you need right
                    in one convenient place.
                  </Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="subtitle1">
                    This allows you to extend your reach, reinvent interactions,
                    and develop a stronger relationship with your users than
                    ever before.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item className={classes.iconImg}>
                <Lottie
                  options={defaultOptions}
                  // isStopped={true}
                  style={{ maxWidth: "18em" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* first column */}
          <Grid
            item
            container
            direction="column"
            className={clsx(classes.heading)}
          >
            <Grid item>
              <Typography variant="h4">
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <br />
            <Grid item>
              <Typography variant="subtitle1">
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
            </Grid>{" "}
            <br />
            <Grid item>
              <Typography variant="subtitle1">
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
          {/* second column */}
        </Grid>
        {/* --------- second row -------------- */}

        <Grid
          item
          container
          justify="space-around"
          className={clsx(classes.topMarginControl)}
          style={{ padding: "16px" }}
        >
          <Grid item style={{ marginBottom: matchesXS ? "2em" : 0 }}>
            <Grid item container direction="column">
              <Grid item className={classes.typographyMargin}>
                <Typography variant="h4">Extend Functionality</Typography>
              </Grid>
              <Grid item>
                <img src={extendFunctionality} alt="extendFunctionality" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginBottom: matchesXS ? "2em" : 0 }}>
            <Grid item container direction="column">
              <Grid item className={classes.typographyMargin}>
                <Typography variant="h4" align="center">
                  Extend Access
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={extendAccess}
                  className={classes.extendAccessImg}
                  alt="extendAccess"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginBottom: matchesXS ? "2em" : 0 }}>
            <Grid item container direction="column">
              <Grid item className={classes.typographyMargin}>
                <Typography variant="h4">Increase Engagement</Typography>
              </Grid>
              <Grid item style={{ marginLeft: "3em" }}>
                <img src={increaseEngagement} alt="increaseEngagement" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ---------- Third Row ----------- */}
      </Grid>
    </div>
  );
}

export default AppDevelopment;
