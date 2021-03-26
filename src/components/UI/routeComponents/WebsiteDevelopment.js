import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useResponsiveParameter from "../../custom-hooks/useResponsiveParameter";
import { makeStyles } from "@material-ui/core/styles";
import backArrow from "../../../assets/backArrow.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import analytics from "../../../assets/analytics.svg";
import ecommerce from "../../../assets/ecommerce.svg";
import outreach from "../../../assets/outreach.svg";

const useStyles = makeStyles((theme) => ({
  root: {
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
  backwardIconBtn: {
    marginTop: "-6px",
  },
  startColumnMargin: {
    marginLeft: "3em",
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  moveToRight: {
    float: "right",
  },
}));

function WebsiteDevelopment() {
  const classes = useStyles();
  const [matchesMD, matchesSM, matchesXS] = useResponsiveParameter();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item container justify={matchesSM ? "space-between" : undefined}>
          <Grid item>
            <IconButton
              className={classes.backwardIconBtn}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={backArrow} alt="back" />
            </IconButton>
          </Grid>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h4">Website Development</Typography>
            </Grid>
            <br />
            <Grid item>
              <Typography variant="subtitle1">
                Website design is one of our mazor task where we promise to
                design and develop all your requirements with eye catchy
                designing.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <img src={forwardArrow} alt="go forward" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : undefined}
          alignItems={matchesSM ? "center" : undefined}
          className={classes.startColumnMargin}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4">Analytics</Typography>
              </Grid>
              <br />
              <Grid item>
                <img src={analytics} alt="analytics.svg" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.heading}>
            <div style={{ marginTop: "100px", marginLeft: "16px" }}>
              <Typography variant="subtitle1" align="center">
                Knowledge is power, and data is 21st Century gold. Analyzing
                this data can reveal hidden patterns and trends in your
                business, empowering you to make smarter decisions with
                measurable effects.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "5em" }}
        >
          <Grid container justify={matchesSM ? "center" : "flex-end"}>
            <Grid item>
              <img src={ecommerce} alt="ecommerce.jpg" />
            </Grid>
            <Grid
              item
              style={{
                marginTop: "100px",
                marginLeft: "16px",
                maxWidth: "30em",
              }}
            >
              <Typography variant="subtitle2">
                It is no secreat that people like to shop online
              </Typography>
              <br />
              <Typography variant="subtitle2">
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.
              </Typography>
              <br />
              <Typography variant="h4" className={classes.moveToRight}>
                E-commerce
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          style={{ marginTop: "5em" }}
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid item className={classes.startColumnMargin}>
            <img src={outreach} alt="ecommerce.jpg" />
          </Grid>
          <Grid
            item
            style={{
              marginTop: "100px",
              marginLeft: "16px",
              maxWidth: "30em",
            }}
          >
            <Typography variant="subtitle2">
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
            <br />
            <Typography variant="h4" className={classes.moveToRight}>
              Outreach
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WebsiteDevelopment;
