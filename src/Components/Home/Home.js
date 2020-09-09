import React from 'react';
import './Home.css';
import Container from '@material-ui/core/Container';
import Girl from '../../Images/Girl.webp'
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../Frequently Used/MainFeaturedPost';
import FeaturedPost from '../Frequently Used/FeaturedPost';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import I1 from '../../Images/1.jpg'
import I2 from '../../Images/2.jpg'
import I3 from '../../Images/3.jpg'
import I4 from '../../Images/4.jpg'
import I5 from '../../Images/5.jpg'
import I6 from '../../Images/6.jpg'
import Typography from '@material-ui/core/Typography';
import AdvancedGridList from '../Frequently Used/ManyPics'
import Album from '../Frequently Used/CardWithPic';


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

const featuredPost1 ={
    title: 'IEEE INSAT',
    description:
      'IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.',
  }
const featuredPost2={
    title: 'WIE IEEE',
    
    description:
      'IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.IEEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.',
  }


const tileData = [
     {
       img: I1,
       title: 'Image',
       author: 'author',
       featured: true,
     },
     {
      img: I2,
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: I3,
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: I4,
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: I5,
      title: 'Image',
      author: 'author',
      featured: true,
    },
    {
      img: I6,
      title: 'Image',
      author: 'author',
      featured: true,
    },
   ];

   const Cards = [
     {
       img: I1,
       imgTitle: 'event',
       header : 'event name',
       desc: 'cet evenement est blablabla'
     },
     {
      img: I1,
      imgTitle: 'event',
      header : 'event name',
      desc: 'cet evenement est blablabla'
    },
    {
      img: I1,
      imgTitle: 'event',
      header : 'event name',
      desc: 'cet evenement est blablabla'
    },
    {
      img: I1,
      imgTitle: 'event',
      header : 'event name',
      desc: 'cet evenement est blablabla'
    },
    {
      img: I1,
      imgTitle: 'event',
      header : 'event name',
      desc: 'cet evenement est blablabla'
    },
    {
      img: I1,
      imgTitle: 'event',
      header : 'event name',
      desc: 'cet evenement est blablabla'
    },
   ]


function Home() {
  return (
    <div className="App">
      
        <img src={Girl} alt="girlthinking" className="girlimg"></img>
        <MainFeaturedPost container post={mainFeaturedPost} />
        <Grid container spacing={4} className="posts">
          <Grid item  spacing={4} id="articles" xs={12} md={10}>
                <FeaturedPost key={featuredPost1.title} post={featuredPost1} />
                <FeaturedPost key={featuredPost2.title} post={featuredPost2} />
          </Grid>
          
        </Grid>
        <div className="win">
        <Carousel className="Carouselitems">
          {[I1, I2, I3, I4, I5, I6].map((value) => (
            <div>
              <img src={value} alt="WIE Pic" />
            </div>
          ))}
        </Carousel>
        </div>
        <Typography component="h1" variant="h2" align="center" className="Events" gutterBottom>
              OUR EVENTS
        </Typography>
        <Album cards={Cards}></Album>
        
      
    </div>
    
  );
}

export default Home;
/*
<Grid xs={10} md={5} sm={5} item className="picsPlacement">
            <AdvancedGridList titleData={tileData}></AdvancedGridList>
          </Grid>
*/