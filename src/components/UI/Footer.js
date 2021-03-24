import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../myTheme";
import { useTheme } from "@material-ui/core/styles";
import FooterAdornment from "../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import withActiveRoute from "./hoc/withActiveRoute";
import { Link } from "react-router-dom";
import FacebookSvg from "../../assets/facebook.svg";
import TwitterSvg from "../../assets/twitter.svg";
import InstagramSvg from "../../assets/instagram.svg";
import LinkedinSvg from "../../assets/linkedin-svgrepo-com.svg";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    width: "100%",
    backgroundColor: "#2196f3",
    position: "relative",
  },
  footerSideImg: {
    verticalAlign: "bottom",
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "17em",
    },
  },
  mainContainer: {
    position: "absolute",
    top: "25%",
  },
  Link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      opacity: "0.7",
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  itemColumn: {
    // border: "1px solid red",
    margin: "1em",
    [theme.breakpoints.down("sm")]: {
      margin: "0.2em",
    },
  },
  socialIcons: {
    height: "50px",
    width: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "25px",
      width: "30px",
    },
  },
  socialIconsContainer: {
    position: "absolute",
    bottom: "1.5em",
  },
}));
function Footer({ value, setValue, selectedMenuIndex, setSelectedMenuIndex }) {
  const classes = useStyles();
  return (
    <div className={classes.footerStyle}>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          spacing={1}
          className={classes.mainContainer}
        >
          <Grid item className={classes.itemColumn}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/"
                onClick={() => {
                  setValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.itemColumn}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                }}
              >
                Web Development
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                }}
              >
                Mobile Development
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                }}
              >
                Native App Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.itemColumn}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.itemColumn}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.itemColumn}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.Link}
                component={Link}
                to="/contactUs"
                onClick={() => {
                  setValue(4);
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={FooterAdornment}
        className={classes.footerSideImg}
        alt="footer side way"
      />
      <Grid
        container
        className={classes.socialIconsContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid item component="a" href="#facebook">
          <img
            src={FacebookSvg}
            alt="facebook svg"
            className={classes.socialIcons}
          />
        </Grid>
        <Grid item component="a" href="#twitter">
          <img
            src={TwitterSvg}
            alt="twitter svg"
            className={classes.socialIcons}
          />
        </Grid>
        <Grid item component="a" href="#instagram">
          <img
            src={InstagramSvg}
            alt="instagram svg"
            className={classes.socialIcons}
          />
        </Grid>
        {/* <Grid item component="a" href="#linkedin">
          <img
            src={LinkedinSvg}
            alt="instagram svg"
            className={classes.socialIcons}
          />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default withActiveRoute(Footer);
