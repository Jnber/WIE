import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Girl from "../../Images/Girl.webp";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "../Frequently Used/MainFeaturedPost";
import FeaturedPost from "../Frequently Used/FeaturedPost";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import I1 from "../../Images/1.jpg";
import I2 from "../../Images/2.jpg";
import I3 from "../../Images/3.jpg";
import I4 from "../../Images/4.jpg";
import I5 from "../../Images/5.jpg";
import I6 from "../../Images/6.jpg";
import Typography from "@material-ui/core/Typography";
import Album from "../Frequently Used/CardWithPic";
import Carousel1 from "../Frequently Used/Carousel";
import Delice from "../../Images/delice.png";
import Nescafe from "../../Images/nescafe.png";
import IPB from "../../Images/IPB.png";
import patisserie from "../../Images/patisserie.png";

//import WIE from '../../Images/WIETitle.png'

const contentStyle = {
  height: "60%",
  textAlign: "center",
  width: "60%",
  margin: "5% 20%",
};

const featuredPost1 = {
  title: "IEEE INSAT",
  description:
    "IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.",
};
const featuredPost = {
  title: "WIE IEEE",

  description:
    "IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.",
};

const partners = [
  {
    image: Delice,
    Name: "Délice",
  },
  {
    image: Nescafe,
    Name: "Nescafé",
  },
  {
    image: IPB,
    Name: "IPB",
  },
  {
    image: patisserie,
    Name: "Patisserie Maher Mrabet Nabeul",
  },
  {
    image: Delice,
    Name: "Délice",
  },
  {
    image: Nescafe,
    Name: "Nescafé",
  },
  {
    image: IPB,
    Name: "IPB",
  },
  {
    image: patisserie,
    Name: "Patisserie Maher Mrabet Nabeul",
  },
  {
    image: Delice,
    Name: "Délice",
  },
  {
    image: Nescafe,
    Name: "Nescafé",
  },
  {
    image: IPB,
    Name: "IPB",
  },
  {
    image: patisserie,
    Name: "Patisserie Maher Mrabet Nabeul",
  },
];

const tileData = [
  {
    img: I1,
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img: I2,
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img: I3,
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img: I4,
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img: I5,
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img: I6,
    title: "Image",
    author: "author",
    featured: true,
  },
];

const Cards = [
  {
    img: I1,
    imgTitle: "event",
    header: "event name",
    desc: "cet evenement est blablabla",
  },
  {
    img: I1,
    imgTitle: "event",
    header: "event name",
    desc: "cet evenement est blablabla",
  },
  {
    img: I1,
    imgTitle: "event",
    header: "event name",
    desc: "cet evenement est blablabla",
  },
  {
    img: I1,
    imgTitle: "event",
    header: "event name",
    desc: "cet evenement est blablabla",
  },
  {
    img: I1,
    imgTitle: "event",
    header: "event name",
    desc: "cet evenement est blablabla",
  },
  {
    img: I1,
    imgTitle: "event",
    header: "event name",
    desc: "cet evenement est blablabla",
  },
];

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
      <Album cards={Cards}></Album>
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
            <img src={partner.image} className="imagepartner"></img>
            <h2 className="text">{partner.Name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
/*
<Grid xs={10} md={5} sm={5} item className="picsPlacement">
            <AdvancedGridList titleData={tileData}></AdvancedGridList>
          </Grid>
*/
