import React from "react";
import Nav from "react-bootstrap/Nav";
import { SocialIcon } from "react-social-icons";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <SocialIcon
            className="social-icon"
            url="https://github.com/mervynlevis"
          />
        </Nav.Item>
        <Nav.Item>
          <SocialIcon
            className="social-icon"
            url="linkedin.com/in/mervyn-levis/"
          />
        </Nav.Item>
      </Nav>
      <p>
        <a className="footer-link" href="https://api.kanye.rest">
          Kanye Rest API{" & "}
        </a>
        <a
          className="footer-link"
          href="https://github.com/jamesseanwright/ron-swanson-quotes"
        >
          Swanson API
        </a>
      </p>
      <p>Mervyn Levis {year}</p>
    </div>
  );
}

export default Footer;
