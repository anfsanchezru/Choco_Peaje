import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavbarChoco.module.css";

const linkStyle = {
  fontSize: "24px",
  lineHeight: "28px",
  letterSpacing: "-0.025em",
  color: "#6D7E8F",
  marginLeft: "40px",
  textDecoration: "none",
};

const buttonStyle = {
  marginLeft: "40px",
  fontSize: "20px",
  color: "white",
  background: "#2A98C7",
  paddingLeft:"30px",
  paddingRight: "30px",
  borderRadius: "25px",
};

const logoStyle = {
  cursor: "pointer",
};

const divHeight = {
  height: "78px",
  borderBottom: "2px solid silver",
};

export const NavbarChoco = ({ logged, setLogged }) => {
  let navigate = useNavigate();
  function irHome() {
    navigate("/");
  }

  const logOut = () => {
    localStorage.setItem("logged", false);
    handleClose();
    navigate("/login");
    setLogged(false);
  };

  const [user, setuser] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <Link className={styles.customLink} to="/login">
                  Login
                </Link>
                <Link className={styles.customLink} to="/Registro">
                  Registro
                </Link>
                <Link className={styles.customLink} to="/Comofunciona">
                  ¿Cómo funciona?
                </Link>
              </>
            ) : (
              // Usuario Interno
              <>
                <Navbar.Text style={linkStyle}>Usuario: </Navbar.Text>
                <Nav.Link>
                  <Link className={styles.userLink} to="/usuarioin">
                    {user}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={styles.customLink} to="/Comofunciona">
                    ¿Cómo funciona?
                  </Link>
                </Nav.Link>

                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={buttonStyle}
                >
                  Menu
                </Button>

                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Bienvenido {user}</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <p>
                      Bienvenido a peajes del Chocó, escoge cualquier opción del menú
                    </p>
                    <Link className={styles.offCanvasLink} onClick={handleClose} to="/peajesin">
                      Crea un peaje
                    </Link>
                    <br />
                    <Link className={styles.offCanvasLink} onClick={handleClose} to="/consorciosin">
                      Crea un consorcio
                    </Link>
                    <br />
                    <Link className={styles.offCanvasLink} onClick={handleClose} to="/pagosin">
                      Pagos y recargas
                    </Link>
                    <br />
                    <Link className={styles.offCanvasLink} onClick={logOut} to="/Login">
                      Logout
                    </Link>
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div style={divHeight}></div>
    </div>
  );
};
