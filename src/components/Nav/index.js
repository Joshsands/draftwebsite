import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.jpg";

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = { navShowing : false }
  }

  render () {
    
    return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              className="logo"
              alt="Primary Fire Protection Logo"
            />
          </Navbar.Brand>

          <Nav className="mb-0 linksize">
            <Link to="/">
              Home
            </Link>
            <Link to="/shop">
              Shop
            </Link>
            <Link to="/estimator">
              Estimator
            </Link>
            <Link to="/service">
              Service
            </Link>
            <Link to="/Portfolio">
              Portfolio
            </Link>
            <Link to="/login">
              Login
            </Link>
          </Nav>
          </Container>
      </Navbar>
    </div>
  );
};
}
export default Navigation;
