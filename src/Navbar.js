import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #000000;
  }

  
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #FFFFFF

    &:hover {
      color: white;
    }
  }
`;

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link  className="page-links" to="/">
            <h2> Afro Musiq </h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className="nav-item nav-link">
              <Link  className="page-links" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <Link   className="page-links" to="/blog">
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <Link  className="page-links" to="/chart">
                Chart
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <Link   className="page-links" to="/music">
                Music
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item nav-link">
              <Link   className="page-links" to="/video">
                Video
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
