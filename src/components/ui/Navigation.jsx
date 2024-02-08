import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
    <Navbar bg="danger" variant="dark">
    <Container>
          <Navbar.Brand href="#home">Bienvenido</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/home'>Listado Notas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to='/register'> Crear cuenta</Nav.Link>
            <Nav.Link as={NavLink} to='/login'> Login</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Daniel Dieguez" id="main-menu">
            <NavDropdown.Item >Cerrar sesion</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/listadonotas'>Notas</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}
