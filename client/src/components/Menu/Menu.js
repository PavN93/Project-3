import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import "./Menu.css"

class SideMenu extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <img disabled={visible} onClick={this.handleShowClick} className="clover-logo"
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Plantica Logo" ></img>
 
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="left"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/user">
            <Icon name="user" />
            Profile
          </Menu.Item>
          <Menu.Item as={Link} to="/login">
            <Icon name="sign-in" />
            Login
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default SideMenu;