import React from 'react';
import './App.css';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import {  Row, Col, Button } from "antd";



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
