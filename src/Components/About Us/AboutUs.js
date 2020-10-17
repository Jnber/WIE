import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Balade from "../Images/Balade1.png";
import Carousel1 from "../Frequently Used/Carousel";
import Syrine from "../Images/SyrineHssan.jpg";
import Chairwoman from "../Images/Chairwoman.png";
import plant from "../Images/plant.png";
import value from "../Images/value.png";
import value1 from "../Images/value1.png";
import value2 from "../Images/value2.png";
import { tileDataAboutUs } from "../../shared/data";

import "./AboutUs.css";

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundImage: "url(" + Balade + ")",
    justifyContent: "center",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "200vh",
    alignContent: "space-between",
    backgroundPosition: "bottom",
  },
  Story: {
    fontSize: "xx-large",
    marginBottom: "1vh",
    fontWeight: "bold",
  },
  Title: {
    margin: "1em 0em 0em 0em",
    fontWeight: "bold",
  },
  Teamtt: {
    margin: "10vh 5vw ",
    fontWeight: "bold",
  },
  AboutUs: {
    textAlign: "center",
  },
  IEEE: {
    color: "#662992",
    marginBottom: "1em",
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
      <h1 className={classes.Title}>Women IN Engineering</h1>
      <h1 className={classes.IEEE}>
        Student Branch<br></br>IEEE INSAT{" "}
      </h1>
      <div className="cssgrid">
        <div className="item1">
          <img
            src={plant}
            className={classes.Pictures}
            id="plant"
            alt="pic"
          ></img>
        </div>
        <div className="item2">
          <img src={Syrine} className={classes.Pictures} alt="pic1"></img>
        </div>
        <div className="item3">
          <img
            src={plant}
            className={classes.Pictures}
            id="plant"
            alt="pic2"
          ></img>
        </div>
        <div className="item4">
          <img src={Chairwoman} className={classes.Pictures} alt="pic3"></img>
        </div>
      </div>
      <Grid className={classes.Container} container id="containerinsat">
        <Grid item md={4} sm={7} xs={10}>
          <h1 className={classes.Story}>Our story</h1>
          <p className={classes.paragraph}>
            IEEE WIE INSAT was established in 2016 and its main goal is to
            reinforce women engineers through different educational and
            technical activities . By bringing together a community of men and
            women of IEEE members , they will work together on several training
            and projects for the benefit of humanity. <br></br>
            <b>Word of the founder:</b>
            <br></br>
            <i>
              "It was in a presentation about the international activities of
              Women in Engineering (WIE) group in the TSYP IEEE Seminar in
              December 2015 when I first heard about the WIE affinity group. The
              presentation motivated me, and I thought INSAT would be the best
              place to launch such association. Surrounded by talented, strong,
              and inspiring women, I believed that together we could carry the
              message of engineer women in Tunisia. Our first objective was to
              promote women in engineering fields and highlight their
              achievements and support and encourage young girls in high school
              and college to pursue engineering careers.   The opening ceremony
              of WIE was held in March 2016 during which several workshops were
              organized to present the aims and activities of the association.
              There were also sessions for engineer women working in different
              engineering fields to share their success stories.   In only a few
              months, the organization had more than 30 members, both men and
              women. The members all worked together on various actions such as
              visiting schools and hospitals, holding workshops and training
              sessions to improve women skills and knowledge. That was just the
              beginning. Today, after four years, the family has become quite
              bigger and I am impressed by the work done by the teams and the
              numerous innovative and supporting campaigns launched by our
              members. I’m very proud of being part of this group and the IEEE
              family. I thank everyone who played a role in making this dream
              come true and I count on you and the next generations to continue
              carrying the message of Tunisian engineer women and never forget
              that “YES WIE CAN”. "
            </i>
          </p>
        </Grid>
      </Grid>
      <div className={classes.team}>
        <h1 className={classes.Teamtt}> Our Team</h1>
        <Carousel1 tileData={tileDataAboutUs}></Carousel1>
      </div>
      <Grid container className={classes.Valuess}>
        <Grid item md={4}>
          <h1 className={classes.IEEE}> Our values</h1>
        </Grid>
        <Grid item md={7}>
          <Grid container className={classes.oh}>
            <Grid item md={5}>
              <img src={value} className={classes.values} alt="picure"></img>
            </Grid>
            <Grid item md={5} className={classes.valuetext}>
              <h1 className={classes.Story}>Commitment</h1>
              <p className={classes.paragraph}>
                What makes us really commited is our will to present the best of
                ourselves and make the WIE INSAT affinity group stand proud
                between chapters.
              </p>
            </Grid>
          </Grid>
          <Grid container className={classes.oh}>
            <Grid item md={5}>
              <img src={value1} className={classes.values} alt="picure"></img>
            </Grid>
            <Grid item md={5} className={classes.valuetext}>
              <h1 className={classes.Story}>Hard Work</h1>
              <p className={classes.paragraph}>
                100% is never enough. Pation is what motivates us and pushes us
                to give the best of ourselves. Making an event has never been
                more challenging and we are proud we gave our best.
              </p>
            </Grid>
          </Grid>
          <Grid container className={classes.oh}>
            <Grid item md={5}>
              <img src={value2} className={classes.values} alt="picure"></img>
            </Grid>
            <Grid item md={5} className={classes.valuetext}>
              <h1 className={classes.Story}>Dedication</h1>
              <p className={classes.paragraph}>
                It's not just a mandat, it's an experience, a touch and a print
                we leave for the new commers, this is why we are dedicated to
                give the best of us and make people remember WIE.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
