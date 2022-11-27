import "./NavBar.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/LogIn";

import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../Pages/SignUp/SignUp.css";
import "../../Pages/LogIn/LogIn.css";
import { useDispatch } from "react-redux";
import { getArticles } from "../../redux/Slice/articleSlice";
// import React from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/Slice/loginSlice";
export default function NavBar() {
  const { logedIn } = useSelector((state) => state.login);
  const [logInState, setLogInState] = React.useState(
    useSelector((state) => state.login.logedIn)
  );
  const dispatch = useDispatch();
  const [LoginShow, setloginShow] = React.useState(false);
  const [SignupShow, setSignupShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar bg="light" expand="lg" className="Nav--bar row navbar-default">
      <Container className="container-fluid">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dpxrvbatm/image/upload/v1668791466/nav_logo_ugorse.webp"
              alt="logo"
              className="nav-logo"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="my-2 my-lg-0 nav-text">
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/"
            >
              Home
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/Learning/Articles"
              onClick={() => {
                dispatch(getArticles());
              }}
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
              to="/Ecomerce/Buy"
            >
              Bird Mart
            </Link>
            <Link
              className="me-3 text-end font-face-reg nav-link nav-itm nav-pages"
              to="/BirdRecognition"
            >
              Recognition
            </Link>
          </Nav>

          <Form className="me-2 search">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </Form>
          <div className="d-flex mx-3 login-signup">
            {logedIn ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      dispatch(logOut());
                      localStorage.clear();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>{" "}
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-primary me-3 btn-sm"
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
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
