import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import Lottie from "react-lottie";
import useResponsiveParameter from "../../custom-hooks/useResponsiveParameter";
import { makeStyles } from "@material-ui/core/styles";
import vision from "../../../assets/vision.svg";
import technologyAnimation from "../../../animations/technologyAnimation/data.json";
import consultationIcon from "../../../assets/consultationIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3em 0",
  },
  startColumnMargin: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  containerMaxSize: {
    maxWidth: "45em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
    },
  },
  addPaddingToContainer: {
    padding: "6em",
    [theme.breakpoints.down("sm")]: {
      padding: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2em",
    },
  },
  consulTationContainer: {
    maxWidth: "25em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
    },
  },
  consultationImg: {
    width: "500px",
    height: "300px",
    marginTop: "80px",
    marginLeft: "3em",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
  },
}));
function Revolution() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [, matchesSM] = useResponsiveParameter();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.startColumnMargin}>
          <Typography variant="h4" align={matchesSM ? "center" : undefined}>
            The Revolution
          </Typography>
        </Grid>
        <Grid item container>
          <Grid
            item
            xs={12}
            sm={6}
            className={clsx(
              classes.containerMaxSize,
              classes.addPaddingToContainer
            )}
          >
            <img src={vision} alt="Our-Vision.svg" width="100%" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? "center" : "flex-end"}
              className={classes.containerMaxSize}
            >
              <Grid item>
                <Typography variant="h4">Vision</Typography>
              </Grid>
              <br />
              <Grid item>
                <Typography variant="subtitle1">
                  he rise of computers, and subsequently the Internet, has
                  completely altered every aspect of human life. This has
                  increased our comfort, broadened our connections, and reshaped
                  how we view the world.
                </Typography>
              </Grid>
              <br />
              <Grid item>
                <Typography variant="subtitle1">
                  What once was confined to huge rooms and teams of engineers
                  now resides in every single one of our hands. Harnessing this
                  unlimited potential by using it to solve problems and better
                  lives is at the heart of everything we do.
                </Typography>
              </Grid>
              <br />
              <Grid item>
                <Typography variant="subtitle1">
                  We want to help businesses capitalize on the latest and
                  greatest technology. The best way to predict the future is to
                  be the one building it, and we want to help guide the world
                  into this next chapter of technological expansion,
                  exploration, and innovation.
                </Typography>
              </Grid>
              <br />
              <Grid item>
                <Typography variant="subtitle1">
                  By holding ourselves to rigorous standards and pristine
                  quality, we can ensure you have the absolute best tools
                  necessary to thrive in this new frontier.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.root}
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            container
            direction="column"
            className={clsx(
              classes.startColumnMargin,
              classes.containerMaxSize
            )}
          >
            <Grid item>
              <Typography variant="h4">Technology</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Instead of chaining together long individual pages, like
                traditional websites, React websites are built with little
                chunks of code called components. These components are faster,
                easier to maintain, and are easily reused and customized, each
                serving a singular purpose.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Two years later they shocked the world by releasing a similar
                system, React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development
                platforms, you can leverage the knowledge you already possessed
                from building websites and reapply it directly! This was a huge
                leap forward.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                This technology is now being used by companies like AirBnB,
                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                Facebook purchased Instagram large portions of it were even
                rebuilt using React.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Developers have since built on top of these systems by
                automating project setup and deployment, allowing creators to
                focus as much as possible on their work itself.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                These technical advancements translate into savings by
                significantly reducing the workload and streamlining the
                workflow for developing new pieces of software, while also
                lowering the barrier to entry for mobile app development.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                This puts personalization in your pocket — faster, better, and
                more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie
              options={defaultOptions}
              style={{ maxWidth: "40em", margin: 0 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          component={Card}
          justify="center"
          style={{ marginTop: "3em", padding: "2em" }}
        >
          <Grid item>
            <Typography variant="h4" color="secondary">
              The Process
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.root}
          style={{
            backgroundColor: "#969287",
            padding: "2em 0",
          }}
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            container
            direction="column"
            className={clsx(
              classes.consulTationContainer,
              classes.startColumnMargin
            )}
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Consultation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Our process begins the moment you realize you need a piece of
                technology for your business. Whether you already have an idea
                for where to start and what to do, or if you just know you want
                to step things up, our initial consultation will help you
                examine your business holistically to find the best solutions.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identify other potential areas
                for consideration
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Cutting-edge advancements in machine learning like object
                detection and natural language processing allow computers to do
                things previously unimaginable, and our expertise and intuition
                will help usher you into this new future of possibilities.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={consultationIcon}
              alt="consultationIcon"
              className={classes.consultationImg}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Revolution;
