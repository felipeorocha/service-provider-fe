import React from "react";
import { Link } from "react-router-dom";
import Notifications from "~/Components/Notifications";
import logo from "~/assets/mask_gas.svg";
import { Container, Content, Profile } from "./styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Name</strong>
              <Link to="/profile">Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="user_avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
