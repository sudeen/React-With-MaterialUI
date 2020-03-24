import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({
  icon: {
    width: "10em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Lottie options={defaultOptions} height="30em" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{
              fontWeight: 500,
              fontSize: "2.5rem",
              marginBottom: "2.5em",
              marginTop: "5em",
            }}
            gutterBottom
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        {/* Container for options */}
        <Grid item container>
          {/* Icon 1 */}
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={software}
                alt="three floating screens"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          {/* Icon 2 */}
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={mobile}
                alt="phones and tablet outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          {/* Icon 3 */}
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={website}
                alt="computer outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Arrows block */}
        <Grid
          item
          container
          justify="space-between"
          style={{ width: "15em", marginTop: "3em" }}
        >
          <Grid item>
            <img src={backArrow} alt="Previous question" />
          </Grid>
          <Grid item>
            <img src={forwardArrow} alt="Next question" />
          </Grid>
        </Grid>
        {/*  */}
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
