import React from "react";
import "./Home.css";
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
import {
  featuredPost,
  featuredPost1,
  partners,
  sponsors,
} from "../../shared/data";

function Home() {
  return (
    <div>
      <MainFeaturedPost container post={featuredPost} />
      <div className="layout">
        <div className="ktiba">
          <h1>Yes we are doing it!</h1>
          <p>
            The number of our members is increasing each you and our events are
            being well planned and structured with a clear goal of benifit for
            each person either participatring or organizing the event,
            workshop...
          </p>
          <div>
            <h1>21</h1>
            <h5>Members</h5>
          </div>
          <div>
            <h1>15</h1>
            <h5>Events</h5>
          </div>
          <div>
            <h1>+1000</h1>
            <h5>Participants</h5>
          </div>
        </div>
        <Carousel className="Carouselitems">
          {[I1, I2, I3, I4, I5, I6].map((value) => (
            <div key={value.toString()}>
              <img src={value} alt="WIE Pic" />
            </div>
          ))}
        </Carousel>
      </div>
      <Grid container className="posts">
        <Grid item id="articles" xs={12}>
          <FeaturedPost key={featuredPost1.title} post={featuredPost1} />
        </Grid>
      </Grid>

      <div className="sponsors">
        <h1 component="h1" variant="h2" align="center" className="sponso">
          Sponsors
        </h1>
        <div className="gridofpartners">
          {sponsors.map((sponsor) => (
            <div className="item" key={sponsor.Name}>
              <img
                src={sponsor.image}
                className="imagepartner"
                alt="partners"
              ></img>
              <h2 className="text">{sponsor.Name}</h2>
            </div>
          ))}
        </div>
        <h1 component="h1" variant="h2" align="center" className="sponso">
          Partners
        </h1>
        <div className="gridofpartners">
          {partners.map((partner) => (
            <div className="item" key={partner.Name}>
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
    </div>
  );
}

export default Home;

/*<h1 component="h1" variant="h2" align="center" className="Events">
OUR EVENTS
</h1>
<Album cards={cards}></Album>*/
