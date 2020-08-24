import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import {  Row, Col, Button, Carousel } from "antd";
import Girl from '../../Images/Girl.webp'
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



function Home() {
  return (
    <Col className="App" span={24}>
      <img src={Girl} className="girlimg" alt="girl thinking"></img>
      <NavBar></NavBar>
      <Row className="firstRow">
        <Col span={10} className="welcomeSection" offset={4}> 
          <h2 className="Title">Welcome Everyone</h2>
          <p className="welcomeParagraph">Welcome to our website you re welcome to check our activities and everything we do here is a glimpse of it all</p>
          <Button>Check It</Button>
        
        </Col>
      </Row>

      <div className="WIESection"> 
        <Row className="WIESection">
        <img src={WIEINSAT} alt="IEEE INSAT" className="TitleWIE"></img>
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
       
    </Col>
  );
}

export default Home;
