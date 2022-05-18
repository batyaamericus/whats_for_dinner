import React from 'react'
import { Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
      <Container className="center">
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Top 10 Bets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              NavLink 2 content
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" disabled>
              NavLink 3 content
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Register</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    );
}
  

export default NavBar