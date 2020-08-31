import React from 'react';
import './Home.css';
import Container from '@material-ui/core/Container';
import Girl from '../../Images/Girl.webp'
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '@material-ui/core/Button';
import I1 from '../../Images/1.jpg'
import I2 from '../../Images/2.jpg'
import I3 from '../../Images/3.jpg'
import I4 from '../../Images/4.jpg'
import I5 from '../../Images/5.jpg'
import I6 from '../../Images/6.jpg'
import IEEEINSAT from '../../Images/IEEEINSAT.webp'
import WIEINSAT from '../../Images/WIEINSAT.webp'

//import WIE from '../../Images/WIETitle.png'

const contentStyle = {
  height: "60%",
  textAlign: "center",
  width : "60%",
  margin: "5% 20%",
};

const mainFeaturedPost = {
  title: 'Welcome Everyone',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
};

const featuredPosts = [
  {
    title: 'IEEE INSAT',
    description:
      'IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.',
  },
  {
    title: 'WIE IEEE',
    
    description:
      'IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
  },
];


function Home() {
  return (
    <div className="App">
      
        <img src={Girl} alt="girlthinking" className="girlimg"></img>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Carousel>
          {[I1, I2, I3, I4, I5, I6].map((value) => (
            <div>
              <img src={value} alt="Hong Kong" />
            </div>
          ))}
      </Carousel>
    </div>
    /*

      <div className="WIESection"> 
        <Row className="WIESection">
        <img src={WIEINSAT} alt="WIE INSAT" className="TitleIEEE"></img>
        </Row>
        <p className="IEEEParagraph">IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
        <Carousel autoplay 
        >
          <div>
            <img style={contentStyle} src={I1} alt="image0"></img>
          </div>
          <div>
            <img style={contentStyle} src={I2} alt="image1"></img>
          </div>
          <div>
            <img style={contentStyle} src={I3} alt="image2"></img>
          </div>
          <div>
            <img style={contentStyle} src={I4} alt="image3"></img>
          </div>
          <div>
            <img style={contentStyle} src={I5} alt="image4"></img>
          </div>
          <div>
            <img style={contentStyle} src={I6} alt="image5"></img>
          </div>
          
        </Carousel>
      </div>
      <div className="welcomeSection2">
        
        <Row className="IEEESection">
          <img src={IEEEINSAT} alt="IEEE INSAT" className="TitleIEEE"></img>
        </Row>
        <h2 className="Title1">JOIN THE TEAM   </h2>
        <p className="IEEEParagraph">EEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.</p>
      </div>
      <div className="EventsSection">
        <h2 className="Title2">Our Events</h2>
        <Row>
          <col span={3} offset={1}>

          </col>
        </Row>
      </div>
       
    </Col>*/
  );
}

export default Home;
