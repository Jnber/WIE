import React from "react";
import "./Home.css";
import Girl from "../Images/Girl.webp";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "../Frequently Used/MainFeaturedPost";
import FeaturedPost from "../Frequently Used/FeaturedPost";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import I1 from "../Images/1.jpg";
import I2 from "../Images/2.jpg";
import I3 from "../Images/3.jpg";
import I4 from "../Images/4.jpg";
import I5 from "../Images/5.jpg";
import I6 from "../Images/6.jpg";
import Typography from "@material-ui/core/Typography";
import Album from "../Frequently Used/CardWithPic";
import {
  featuredPost,
  featuredPost1,
  partners,
  cards,
} from "../../shared/data";

function Home() {
  return (
    <div className="App">
      <img src={Girl} alt="girlthinking" className="girlimg"></img>
      <MainFeaturedPost container post={featuredPost} />

      <div className="win">
        <Carousel className="Carouselitems">
          {[I1, I2, I3, I4, I5, I6].map((value) => (
            <div key={value.toString()}>
              <img src={value} alt="WIE Pic" />
            </div>
          ))}
        </Carousel>
      </div>

      <Grid container spacing={4} className="posts">
        <Grid item spacing={4} id="articles" xs={12} md={10}>
          <FeaturedPost key={featuredPost1.title} post={featuredPost1} />
        </Grid>
      </Grid>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        className="Events"
        gutterBottom
      >
        OUR EVENTS
      </Typography>
      <Album cards={cards}></Album>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        className="sponso"
        gutterBottom
      >
        Sponsors and partners
      </Typography>
      <div className="gridofpartners">
        {partners.map((partner) => (
          <div className="item">
            <img
              src={partner.image}
              className="imagepartner"
              alt="partners"
            ></img>
            <h2 className="text">{partner.Name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
