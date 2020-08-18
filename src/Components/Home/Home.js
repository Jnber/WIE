import React from 'react';
import './Home.css';
import '../Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import {  Row, Col, Button } from "antd";



function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Row className="firstRow">
        <Col span={10} className="welcomeSection" offset={4}> 
          <h2 className="Title">Welcome Everyone</h2>
          <p className="welcomeParagraph">Welcome to our website you re welcome to check our activities and everything we do here is a glimpse of it all</p>
          <Button>Check It</Button>
        
        </Col>
      </Row>
      <div className="welcomeSection">
        <h2 className="Title1">JOIN THE TEAM   </h2>
        <Row className="IEEESection">
          <Col>
            <Row>
              <h1 className="a">I</h1>
              <h1 className="b">E</h1>
              <h1 className="c">E</h1>
              <h1 className="d">E</h1> 
            </Row>
          </Col>
          <Col offset={1} >
            <Row>
              <h1 className="e">I</h1>
              <h1 className="f">N</h1>
              <h1 className="g">S</h1>
              <h1 className="h">A</h1>
              <h1 className="i">T</h1>
            </Row>
          </Col>
        </Row>
        <p className="IEEEParagraph">EEE INSAT student branch is a branch of IEEE at insat institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12 students of the institute, it has now about 550 members and by that It breaks the record of the largest student branch in Region 8.</p>
      </div>
       
    </div>
  );
}

export default Home;
