import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Lottie from "react-lottie";
import landingPageAnimation from "../../../animations/landinganimation/data";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CustomSoftwareDevIcon from "../../../assets/Custom-Software-Icon.svg";
import MobileAppDevIcon from "../../../assets/mobileIcon.svg";
import WebsiteDevIcon from "../../../assets/websiteIcon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import revolutionBackGroundPage from "../../../assets/repeatingBackground.svg";
import infoBackground from "../../../assets/infoBackground.svg";
import background from "../../../assets/background.jpg";
import mobileBackground from "../../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: "1em 0",
  },
  heroBlockTextMapping: {
    ...theme.typography.heroText,
    color: "#2196f3",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  heroBlockColumnOne: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  button: {
    marginLeft: "2em",
    borderRadius: "50px",
    ...theme.typography.estimate,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.arcOrange,
  },
  serviceBlockConainer: {
    margin: "5em 0",
    padding: "16px",
  },
  serviceBlockItem: {
    marginBottom: "2.5em",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  iconImg: {
    marginLeft: "3em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  revolutionContainer: {
    backgroundImage: `url(${revolutionBackGroundPage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "auto",
    width: "100%",
    marginBottom: "2em",
    padding: "5em",
  },
  infoBlock: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    marginBottom: "2em",
    "& .MuiButton-root": {
      borderRadius: "50px",
    },
  },
  personalBlock: {
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
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesForPaper = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: landingPageAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.root}>
      {/* ----------- hero block for landing page ------------ */}
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.heroBlockColumnOne}
          >
            <Grid item>
              <Typography
                className={classes.heroBlockTextMapping}
                align="center"
              >
                {" "}
                Bringing West Coast Technology <br />
                <Typography
                  className={classes.heroBlockTextMapping}
                  align="center"
                >
                  to the Midwest
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Estimate
              </Button>
              <Button variant="outlined" className={classes.button}>
                learn more
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
      {/* service block */}
      <Grid container className={classes.serviceBlockConainer}>
        <Grid
          container
          className={classes.serviceBlockItem}
          component={matchesForPaper ? Paper : "div"}
        >
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Time, Money and Effort With Us.
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital Solution From Investigation To{" "}
              <span className={classes.specialText}>Celebration .</span>
            </Typography>
            <IconButton className={classes.button}>
              learn more <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.iconImg}>
            <img src={CustomSoftwareDevIcon} alt="Custom-sw-development" />
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.serviceBlockItem}
          justify="flex-end"
          component={matchesForPaper ? Paper : "div"}
        >
          <Grid item>
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1">
              Extend Functionality, Extend Access and Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate Your Web Experience or Create a Stabdalone App With
              Either{" "}
              <span className={classes.specialText}>Mobile Platform .</span>
            </Typography>
            <IconButton className={classes.button}>
              learn more <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.iconImg}>
            <img src={MobileAppDevIcon} alt="Mobile-app-development" />
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.serviceBlockItem}
          component={matchesForPaper ? Paper : "div"}
        >
          <Grid item>
            <Typography variant="h4">Web App Development</Typography>
            <Typography variant="subtitle1">
              Rich More, Discover More and Sell More .
            </Typography>
            <Typography variant="subtitle1">
              Responsive Design, Optimized for Search Engine and Built for Speed
              .
            </Typography>
            <IconButton className={classes.button}>
              learn more <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.iconImg}>
            <img src={WebsiteDevIcon} alt="Website-dev-development" />
          </Grid>
        </Grid>
      </Grid>
      {/* Revolution Page Card */}
      <Grid
        container
        className={classes.revolutionContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item style={{ textAlign: "center", width: "700px" }}>
          <Card>
            <CardContent>
              <Typography variant="h3"> The Revolution </Typography>
              <Typography variant="subtitle2">
                " Enhance the vision and make your hands dirty with cutting
                <br />
                edge technology to get your dream product "
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                className={classes.button}
                style={{ margin: "0 auto" }}
              >
                learn more <ArrowForwardIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* cccccccc :happy: */}
      <Grid
        container
        direction={matchesForPaper ? "column" : "row"}
        justify={matchesForPaper ? "space-evenly" : "space-between"}
        alignItems="center"
        className={classes.infoBlock}
      >
        <Grid item style={{ marginLeft: matchesForPaper ? "0" : "3em" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            {" "}
            About Us
          </Typography>
          <Typography variant="subtitle2"> Let's get personal </Typography>
          <br />
          <Button variant="outlined" color="secondary">
            Learn More
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesForPaper ? "0" : "3em" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            {" "}
            Contact Us
          </Typography>
          <Typography variant="subtitle2">
            Let's meet for a discussion
          </Typography>
          <br />
          <Button variant="outlined" color="secondary">
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* ---------- About us and contact us --------------  */}
      <Grid
        container
        direction={matchesForPaper ? "column" : "row"}
        justify={matchesForPaper ? "space-evenly" : "space-between"}
        alignItems="center"
        className={classes.personalBlock}
      >
        <Grid item style={{ marginLeft: matchesForPaper ? "0" : "3em" }}>
          <Typography variant="h4" color="secondary">
            Simple Software. <br />
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle2" style={{ color: "white" }}>
            {" "}
            Take advantage of the 21st century{" "}
          </Typography>
          <br />
        </Grid>
        <Grid item style={{ marginRight: matchesForPaper ? "0" : "3em" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
