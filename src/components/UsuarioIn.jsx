import React from "react";
import { Container, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./UsuarioIn.module.css";

export default function UsuarioIn() {
  const background = {
    backgroundImage: "linear-gradient(90deg, #2A98C7 0%, #ACCDE5 100%",
    flexGrow: "1",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
  };

  const p1 = {
    color: "#0085BB",
    textAlign: "left",
  };

  const p2 = {
    textAlign: "left",
  };

  const containerStyle = {
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
    padding: "100px",
    maxWidth: "800px",
    maxHeight: "720px",
  };

  const formStyle = {
    borderRadius: "20px",
    padding: "50px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
  };

  const user = localStorage.getItem("user");

  return (
    <div style={background}>
      <Container fluid="md" style={containerStyle}>
        <Form style={formStyle}>
          <div>
            <Col sm="12">
              <h1 style={p1}>{user}</h1>
              <p style={p2}>Ha iniciado sesión como Usuario Interno</p>
              <br />
              <Form className="d-grid gap-2">
                <Link size="lg" className={styles.container} to="/peajesin">
                  <p className={styles.butt}>CREA UN PEAJE</p>
                </Link>
                <Link size="lg" className={styles.container} to="/consorciosin">
                  <p className={styles.butt}>CREA UN CONSORCIO</p>
                </Link>
                <Link size="lg" className={styles.container} to="/pagosin">
                  <p className={styles.butt}>PAGOS Y RECARGAS</p>
                </Link>
              </Form>

              {/* <img style={imgStyle} src=".\public\img\car.jpg" alt="car" height="300px"/> */}
            </Col>
          </div>
        </Form>
      </Container>
    </div>
  );
}
