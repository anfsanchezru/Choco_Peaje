import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const linkStyle = {
    "font-size": "24px",
    "line-height": "28px",
    "letter-spacing": "-0.025em",
    "color": "#6D7E8F",
    "margin-left": "40px"
}

export const NavbarChoco = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/"><img src="/images/escudoChoco.png" alt="logo" height="50px"/></Navbar.Brand>
                <Nav>
                    <Nav.Link style={linkStyle} href="/login">Login</Nav.Link>
                    <Nav.Link style={linkStyle} href="/registro">Register</Nav.Link>
                    <Nav.Link style={linkStyle} href="/como-funciona">¿Cómo funciona?</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
