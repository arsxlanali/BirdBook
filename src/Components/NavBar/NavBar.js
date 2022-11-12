import "./NavBar.css";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/LogIn";

import "../../Pages/SignUp/SignUp.css";
import "../../Pages/LogIn/LogIn.css";

import React from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [LoginShow, setloginShow] = React.useState(false);
  const [SignupShow, setSignupShow] = React.useState(false);
  const nagivate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="Nav--bar row navbar-default">
      <Container className="container-fluid">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="./Resources/nav_logo.webp"
              alt="logo"
              className="nav-logo"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0 nav-text">
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/"
            >
              Home
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/Learning/Articles"
            >
              Learning
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/Maps"
            >
              Maps
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/Forum"
            >
              Forum
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/Ecomerce"
            >
              Ecomerce
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/BirdRecognition"
            >
              Recognition
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 hidden-md"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-5">
              Search
            </Button>
          </Form>
          <div>
            <button
              type="button"
              className="btn btn-secondary me-2 btn-sm"
              onClick={() => setloginShow(true)}
            >
              LogIn
            </button>
            <LogIn show={LoginShow} onHide={() => setloginShow(false)} />

            <button
              type="button"
              className="btn btn-primary me-3 btn-sm"
              onClick={() => setSignupShow(true)}
            >
              SignUp
            </button>
            <SignUp show={SignupShow} onHide={() => setSignupShow(false)} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
