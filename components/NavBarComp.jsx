import Link from "next/link";
import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const session = null;

const NavBarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid="lg">
        <Navbar.Brand as={Link} href="/">
          A-Connect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* <Form  className="d-flex me-auto">
          <Form.Control
            
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form> */}

          <Nav className="d-flex me-auto">
            <Nav.Link as={Link} href="/aboutus">
              <i className="bi bi-cart4"></i> About Us
            </Nav.Link>


            <Nav.Link as={Link} href="/contact">
              <i className="bi bi-cart4"></i> Contact Us
            </Nav.Link>


          </Nav>

          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} href="/cart">
              {" "}
              <i className="bi bi-cart4"></i> Iniciar Sesion
            </Nav.Link>

            {!session && (
              <Nav.Link as={Link} href="/login">
                <i className="bi bi-person-fill-lock"></i> Registrarse
              </Nav.Link>
            )}

            {session && (
              <NavDropdown
                title={session.user.name}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => signOut()}>
                  {/* <button onClick={()=>signOut()}>log out</button> */}
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
