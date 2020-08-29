import React from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Menu, Row, Col } from "antd";
import { HomeFilled, CaretRightOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const activitiesStyle = {
  color: "seashell",
};

class NavBar extends React.Component {
  
  render() {
    return (
     
        <Row className="na">
          <Col span={12} className="na" offset={1}>
            <Menu
              mode= "horizontal"
              className="na"
            >
              <Menu.Item icon={<HomeFilled />} className="links">
                <a href="https://www.lesnumeriques.com/carte-graphique/nvidia-geforce-rtx-2060-p50213/test.html" rel="noopener noreferrer" className="links">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item  icon={<CaretRightOutlined />} className="links">
                <a href="AboutUs" target="_blank" rel="noopener noreferrer" >
                  About Us
                </a>
              </Menu.Item>
              <SubMenu
                icon={<CaretRightOutlined />}
                title="Activities"
                className="droplinks"
                style={activitiesStyle}
                
              >
                <Menu.Item key="setting:1" href="Events" >
                  Events
                </Menu.Item>
                <Menu.Item key="setting:2" href="Training">
                  Training
                </Menu.Item>
                <Menu.Item key="setting:3" href="Charity">
                  Charity
                </Menu.Item>
              </SubMenu>
              <Menu.Item  icon={<CaretRightOutlined />} className="links">
                <a
                  href="Humanitarian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Humanitarian
                </a>
              </Menu.Item>
              <Menu.Item  icon={<CaretRightOutlined />} className="links">
                <a href="Members" target="_blank" rel="noopener noreferrer" >
                  Members
                </a>
              </Menu.Item>
              <Menu.Item icon={<CaretRightOutlined />} className="links">
                <a href="Contact" target="_blank" rel="noopener noreferrer" >
                  Contact
                </a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4} offset={7}>
            <p id="WIEIEEE">
              WIE IEEE
            </p>
          </Col>

          
        </Row>
     
    );
  }
}

export default NavBar;
