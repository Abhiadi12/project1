import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useResponsiveParameter from "../../custom-hooks/useResponsiveParameter";
import backArrow from "../../../assets/backArrow.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import bulb from "../../../assets/bulb.svg";
import cash from "../../../assets/cash.svg";
import root from "../../../assets/root.svg";
import stopwatch from "../../../assets/stopwatch.svg";
import documentsAnimation from "../../../animations/documentsAnimation/data";
import scaleAnimation from "../../../animations/scaleAnimation/data.json";
import automationAnimation from "../../../animations/automationAnimation/data.json";
import uxAnimation from "../../../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: "1em 0",
    // border: "1px solid red",
  },
  heading: {
    maxWidth: "27em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
    },
  },
  arrowContainer: {
    marginTop: "0.2em",
  },
  mainContainer: {
    padding: "2em 5em 5em 10em",
  },
  rowTwoItems: {
    margin: "0 4em",
    [theme.breakpoints.down("sm")]: {
      margin: "2em 0",
    },
  },
  rowTwoContainer: {
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4em",
    },
  },
  startColumnMargin: {
    marginLeft: "2em",
  },
  iconImg: {
    marginLeft: "0.5em",
  },
  scaleContainer: {
    maxWidth: "20em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  endMargin: {
    marginBottom: "7em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3.5em",
    },
  },
  rootCauseAnalogyItem: {
    maxWidth: "30em",
    marginLeft: "40px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "27em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
      textAlign: "center",
    },
  },
}));
function CustomSoftware() {
  const classes = useStyles();
  // animation defiend
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // responsive parameters
  // const theme = useTheme();
  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [matchesMD, matchesSM, matchesXS] = useResponsiveParameter();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        {/* ---------- section 1 ---------------- */}
        <Grid
          item
          container
          className={classes.arrowContainer}
          justify={matchesMD ? "space-around" : undefined}
        >
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={backArrow} alt="back button" />
            </IconButton>
          </Grid>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h4">Custom Software Development</Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>

              <Typography variant="subtitle1">
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography variant="subtitle1">
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography variant="subtitle1">
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.arrowContainer}>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={forwardArrow} alt="back button" />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="center"
          alignItems={matchesSM ? "center" : undefined}
          className={classes.rowTwoContainer}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid
            item
            className={classes.rowTwoItems}
            style={{ marginBottom: matchesSM ? "2rem" : 0 }}
          >
            <Typography variant="h4">
              Save
              <br /> Energy
            </Typography>
            <img src={bulb} alt="save energy" />
          </Grid>
          <Grid
            item
            className={classes.rowTwoItems}
            style={{
              marginBottom: matchesSM ? "2rem" : 0,
            }}
          >
            <Typography variant="h4">
              Save
              <br /> Time
            </Typography>
            <img src={stopwatch} alt="save time" />
          </Grid>
          <Grid
            item
            className={classes.rowTwoItems}
            style={{ marginBottom: matchesSM ? "2rem" : 0 }}
          >
            <Typography variant="h4">
              Save
              <br /> Money
            </Typography>
            <img src={cash} alt="save money" />
          </Grid>
        </Grid>
        {/* ------------ second section ------------- */}
        <Grid
          container
          className={classes.rowTwoContainer}
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? undefined : "space-between"}
          alignItems={matchesSM ? "center" : undefined}
        >
          {/* column 1 */}
          <Grid item>
            <Grid
              item
              container
              direction={matchesMD ? "column" : "row"}
              justify={matchesMD ? "center" : undefined}
            >
              <Grid
                container
                className={clsx(
                  classes.scaleContainer,
                  classes.startColumnMargin
                )}
                direction="column"
                // can set md
                // alignItems={matchesMD ? "center" : undefined}
                // justify={matchesMD ? "center" : undefined}
              >
                <Grid item>
                  <Typography variant="h4">
                    Digital Document & <br /> Data .
                  </Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="subtitle1">
                    Reduce Errors. Reduce Waste. Reduce Costs.
                  </Typography>
                  <Typography variant="subtitle1">
                    Billions are spent annually on the purchasing, printing, and
                    distribution of paper. On top of the massive environmental
                    impact this has, it causes harm to your bottom line as well.
                  </Typography>
                  <Typography variant="subtitle1">
                    By utilizing digital forms and documents you can remove
                    these obsolete expenses, accelerate your communication, and
                    help the Earth.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.iconImg}>
                <Lottie
                  options={documentsOptions}
                  isStopped={true}
                  style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* column 2 */}
          <Grid>
            <Grid item container direction={matchesMD ? "column" : "row"}>
              <Grid item>
                <Lottie
                  options={scaleOptions}
                  isStopped={true}
                  style={{ maxHeight: 260, maxWidth: 280 }}
                />
              </Grid>
              <Grid
                item
                className={clsx(
                  classes.scaleContainer,
                  classes.startColumnMargin
                )}
              >
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h4">Scale</Typography>
                  </Grid>
                  <br />
                  <Grid item>
                    <Typography variant="subtitle1">
                      Whether you’re a large brand, just getting started, or
                      taking off right now, our application architecture ensures
                      pain-free growth and reliability.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* --------------------  section 3 --------------- */}
        <Grid
          item
          container
          justify="center"
          className={classes.rowTwoContainer}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <img
                  src={root}
                  alt="root-tree"
                  height="400px"
                  width="450px"
                  style={{ marginLeft: "40px" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4" align="center">
                  Root-Cause Analysis
                </Typography>
              </Grid>
              <br />
              <Grid item>
                <Typography
                  variant="subtitle1"
                  // style={{ marginLeft: "40px", maxWidth: "30em" }}
                  className={classes.rootCauseAnalogyItem}
                >
                  Many problems are merely symptoms of larger, underlying
                  issues.
                  <br />
                  We can help you thoroughly examine all areas of your business
                  to <br /> develop a holistic plan for the most effective
                  implementation of technology.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* ----------- section 4 ---------------- */}
        <Grid
          container
          className={clsx(classes.rowTwoContainer, classes.endMargin)}
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? undefined : "space-between"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid item style={{ marginBottom: matchesSM ? "2em" : 0 }}>
            <Grid item container direction={matchesMD ? "column" : "row"}>
              <Grid
                container
                className={clsx(classes.heading, classes.startColumnMargin)}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h4">Automation</Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="subtitle1">
                    Why waste time when you don’t have to?
                  </Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="subtitle1">
                    We can help you identify processes with time or event based
                    actions which can now easily be automated.
                  </Typography>
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="subtitle1">
                    Increasing efficiency increases profits, leaving you more
                    time to focus on your business, not busywork.
                  </Typography>
                </Grid>
                <br />
              </Grid>
              <Grid
                item
                className={classes.iconImg}
                style={{ marginBottom: matchesXS ? "2em" : 0 }}
              >
                <Lottie
                  options={automationOptions}
                  // isStopped={true}
                  style={{ maxHeight: 290, maxWidth: 280 }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* column 2 */}
          <Grid item>
            <Grid item container direction={matchesMD ? "column" : "row"}>
              <Grid item>
                <Lottie
                  options={uxOptions}
                  // isStopped={true}
                  style={{ maxHeight: 310, maxWidth: 155 }}
                />
              </Grid>
              <Grid
                item
                className={clsx(classes.heading, classes.startColumnMargin)}
              >
                <Grid container direction="column">
                  <Grid item style={{ marginTop: matchesXS ? "2em" : 0 }}>
                    <Typography variant="h4">
                      User Experience <br /> Matters !!
                    </Typography>
                  </Grid>
                  <br />
                  <Grid item>
                    <Typography variant="subtitle1">
                      A good design that isn’t usable isn’t a good design.
                    </Typography>
                  </Grid>
                  <br />
                  <Grid item>
                    <Typography variant="subtitle1">
                      So why are so many pieces of software complicated,
                      confusing, and frustrating?
                    </Typography>
                  </Grid>
                  <br />
                  <Grid item>
                    <Typography variant="subtitle1">
                      By prioritizing users and the real ways they interact with
                      technology we’re able to develop unique, personable
                      experiences that solve problems rather than create new
                      ones.
                    </Typography>
                  </Grid>
                  <br />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomSoftware;
