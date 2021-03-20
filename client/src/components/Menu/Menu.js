import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import "./Menu.css";
import UserAuthContext from "../../context/UserAuth";

const SideMenu = () => {

  const location = useHistory("");

  const [visible, setVisible] = useState(false);

  const handleShowClick = () => setVisible(true);
  const handleSidebarHide = () => setVisible(false);

  const { doLogout } = useContext(UserAuthContext);

  const handleLogout = async () => {
    await doLogout();
    // location.push("/logout");
  }

  return (
    <div>
      <img
        disabled={visible}
        onClick={handleShowClick}
        className="clover-logo"
        src={`${process.env.PUBLIC_URL}/Plantica.png`}
        alt="Plantica Logo"
      />

      <Sidebar
        as={Menu}
        animation="overlay"
        direction="left"
        icon="labeled"
        inverted
        onHide={handleSidebarHide}
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
        <Menu.Item as={Link} to="/signup">
          <Icon name="signup" />
            Signup
          </Menu.Item>
        <Menu.Item onClick={handleLogout}>
          <Icon name="sign out" />
            Logout
          </Menu.Item>
      </Sidebar>
    </div>
  );
}

export default SideMenu;
