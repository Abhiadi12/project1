import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import history from "../../../assets/history.svg";
import founder from "../../../assets/founder.jpg";
import yearbook from "../../../assets/yearbook.svg";
import puppy from "../../../assets/puppy.svg";
import useResponsiveParameter from "../../custom-hooks/useResponsiveParameter";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2em 0",
  },
  rowContainer: {
    padding: "2em",
  },
  bodyOneStyle: {
    color: "#2bb1ff",
    fontFamily: "Pacifico",
    fontWeight: "400",
  },
  sizeOfTextContainer: {
    maxWidth: "40em",
  },
  sidePic: {
    height: "20em",
    width: "20em",
    [theme.breakpoints.down("sm")]: {
      height: "15em",
      width: "15em",
      marginTop: "25px",
    },
  },
  avatar: {
    height: "10em",
    width: "10em",
    [theme.breakpoints.down("sm")]: {
      height: "7em",
      width: "7em",
      maxHeight: 300,
      maxWidth: 300,
      marginTop: "25px",
    },
  },
  historyPic: {
    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "300px",
    },
    "@media (max-width: 400px)": {
      width: "250px",
    },
  },
}));
function AboutPage() {
  const classes = useStyles();
  const [, matchesSM] = useResponsiveParameter();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        {/* first row */}
        <Grid
          item
          container
          direction="column"
          className={classes.rowContainer}
        >
          <Grid item>
            <Typography variant="h4">About us</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              classes={{ body1: classes.bodyOneStyle }}
              style={{ margin: "80px auto 0 auto" }}
              className={classes.sizeOfTextContainer}
            >
              Whether it be person to person, business to consumer, or an
              individual to their interests, technology is meant to bring us
              closer to what we care about in the best way possible. Arc
              Development will use that principle to provide fast,modern,
              inexpensive and aethetic software to the Midwest and beyond .
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.rowContainer}
          justify="space-between"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.sizeOfTextContainer}
          >
            <Grid item>
              <Typography variant="h4">History</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary">
                We're the new kid on the block.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={history}
              alt="history.svg"
              className={classes.historyPic}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.rowContainer}
          direction="column"
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h4">Team</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Zachary Reece, Founder
              </Typography>
            </Grid>
            <Grid item>
              <Avatar alt="founder" src={founder} className={classes.avatar} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            justify={matchesSM ? undefined : "space-between"}
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook.svg"
                className={classes.sidePic}
              />
            </Grid>
            <Grid
              item
              className={classes.sizeOfTextContainer}
              style={{ marginTop: "2em" }}
            >
              <Typography variant="subtitle2">
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>

              <Typography variant="subtitle2">
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
            <Grid item>
              <img src={puppy} alt="puppy.svg" className={classes.sidePic} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPage;
