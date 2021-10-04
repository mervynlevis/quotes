import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='top'>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <ChatBubbleIcon className="logo" />
              Quotes
            </Navbar.Brand>
            <Link className="navLink" to="/kanye">Kanye West</Link>
            <Link className="navLink" to="/swanson">Ron Swanson</Link>
          </Navbar>
        </div>
    );
  };

export default Navigation;