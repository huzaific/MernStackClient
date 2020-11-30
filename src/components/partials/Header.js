import React from 'react'
import {Row , Col , Container, Navbar , Nav } from 'react-bootstrap'

export default function Header() {
    return (
<Row>
<Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">Coaching Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Col />
      <Nav className="mr-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">SignUp</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
</Row>
     

    )
}
