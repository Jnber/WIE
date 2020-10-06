import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pic3 from "../Images/3.jpg";
import Balade from "../Images/Balade04.png";
import Carousel1 from "../Frequently Used/Carousel";
import thumbnail6 from "../Images/6.png";
import thumbnail7 from "../Images/7.png";
import { tileDataAboutUs } from "../../shared/data";

import "./AboutUs.css";

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundImage: "url(" + Balade + ")",
    justifyContent: "center",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70em",
    alignContent: "space-between",
    backgroundPosition: "bottom",
  },
  Story: {
    fontSize: "xx-large",
    marginBottom: "2em",
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  Title: {
    color: "#11111",
    margin: "1em 0em 0em",
    fontFamily: "Crimson Text",
    fontWeight: "bold",
  },
  AboutUs: {
    textAlign: "center",
  },
  IEEE: {
    color: "#662992",
    marginBottom: "1em",
    fontFamily: "Crimson Text",
    fontWeight: "bold",
  },
  Pictures: {
    width: "100%",
  },
  frame: {
    marginBottom: "5em",
    marginLeft: "0em",
    justifyContent: "center",
  },
  Values: {
    padding: "3em",
  },
  paragraph: {
    fontFamily: "Inter",
  },
  team: {
    display: "contents",
    textAlign: "left",
    margin: "1em",
  },
  values: {
    width: "50%",
    alignItems: "center",
    alignSelf: "center",
  },
  Valuess: {
    marginTop: "9em",
    alignItems: "center",
  },
  valuetext: {
    backgroundColor: "white",
    margin: "1em 0em",
    padding: "1em",
  },
  oh: {
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: "0.5em",
    borderRadius: "5px",
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div className={classes.AboutUs}>
      <h1 className={classes.Title}>
        <b>W</b>omen <b>I</b>n <b>E</b>ngineering
      </h1>
      <h1 className={classes.IEEE}>
        Student Branch<br></br>IEEE INSAT{" "}
      </h1>
      <div className="cssgrid">
        <div className="item1">
          <img src={thumbnail6} className={classes.Pictures} alt="pic"></img>
        </div>
        <div className="item2">
          <img src={Pic3} className={classes.Pictures} alt="pic1"></img>
        </div>
        <div className="item3">
          <img src={thumbnail7} className={classes.Pictures} alt="pic2"></img>
        </div>
        <div className="item4">
          <img src={Pic3} className={classes.Pictures} alt="pic3"></img>
        </div>
      </div>
      <Grid className={classes.Container} container>
        <Grid item md={4}>
          <h1 className={classes.Story}>Our story</h1>
          <p className={classes.paragraph}>
            IEEE WIE INSAT was established in 2016 and its main goal is to
            reinforce women engineers through different educational and
            technical activities . By bringing together a community of men and
            women of IEEE members , they will work together on several training
            and projects for the benefit of humanity.
          </p>
        </Grid>
      </Grid>
      <div className={classes.team}>
        <h1 className={classes.Title}> Our Team</h1>
        <Carousel1 tileData={tileDataAboutUs}></Carousel1>
      </div>
      <Grid container className={classes.Valuess}>
        <Grid item md={4}>
          <h1 className={classes.IEEE}> Our values</h1>
        </Grid>
        <Grid item md={7}>
          <Grid container className={classes.oh}>
            <Grid item md={5}>
              <img
                src={thumbnail6}
                className={classes.values}
                alt="picure"
              ></img>
            </Grid>
            <Grid itme md={5} className={classes.valuetext}>
              <h1 className={classes.Story}>Commitment</h1>
              <p className={classes.paragraph}>
                , consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </Grid>
          </Grid>
          <Grid container className={classes.oh}>
            <Grid item md={5}>
              <img
                src={thumbnail6}
                className={classes.values}
                alt="picure"
              ></img>
            </Grid>
            <Grid itme md={5} className={classes.valuetext}>
              <h1 className={classes.Story}>Commitment</h1>
              <p className={classes.paragraph}>
                , consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </Grid>
          </Grid>
          <Grid container className={classes.oh}>
            <Grid item md={5}>
              <img
                src={thumbnail6}
                className={classes.values}
                alt="picure"
              ></img>
            </Grid>
            <Grid itme md={5} className={classes.valuetext}>
              <h1 className={classes.Story}>Commitment</h1>
              <p className={classes.paragraph}>
                , consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
