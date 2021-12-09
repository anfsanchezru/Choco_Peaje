import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const linkStyle = {
  fontSize: "24px",
  lineHeight: "28px",
  letterSpacing: "-0.025em",
  color: "#6D7E8F",
  marginLeft: "40px",
  textDecoration: "none",
};

const styledLink = styled(Link)` 
  &:hover {
    color: red;
  }
`;

const textStyle = {
  fontSize: "20px",
  color: "#6D7E8F",
};

const linkStyle2 = {
    fontSize: "24px",
    color: "#6D7E8F",
    textDecoration: "none"
}

const logoStyle = {
  cursor: "pointer",
};

const divHeight = {
  height: "78px",  
  borderBottom: "2px solid silver"
}

export const NavbarChoco = ({ logged, setLogged }) => {
  let navigate = useNavigate();
  function irHome() {
    navigate("/");
  }

  const logOut = () => {
    localStorage.setItem("logged", false);
    navigate("/login");
    setLogged(false);
  };

  const [user, setuser] = useState("");

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    setuser(getUser);
    console.log(getUser);

    let userState = localStorage.getItem("logged");

    if (userState === "true") {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div>
      <Navbar bg="light" variant="light" fixed="top" style={divHeight}>
        <Container>
          <Navbar.Brand onClick={irHome}>
            <img
              style={logoStyle}
              src="/images/escudoChoco.png"
              alt="logo"
              height="50px"
            />{" "}
          </Navbar.Brand>
          <Nav className="me">
            {!logged ? (
              <>
                <Link style={linkStyle} to="/login">
                  <styledLink>Login</styledLink>
                </Link>
                <Link style={linkStyle} to="/Registro">
                  Register
                </Link>
                <Link style={linkStyle} to="/Comofunciona">
                  ¿Cómo funciona?
                </Link>
              </>
            ) : (
              <>
                <Navbar.Text style={linkStyle}>
                  Usuario:{" "}
                  <Link style={textStyle} to="/user">
                    {user}
                  </Link>
                </Navbar.Text>
                <Navbar.Text style={linkStyle}>
                  <Link style={linkStyle2} to="/Comofunciona">
                    ¿Cómo funciona?
                  </Link>
                </Navbar.Text>
                <Nav.Link onClick={logOut} style={linkStyle}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div style={divHeight}></div>
    </div>
  );
};
