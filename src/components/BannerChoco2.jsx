import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function BannerChoco2() {
  const imgStyle = {
    position: `relative`,
    right: "0px",
  };

  const imgContainer = {
    textAlign: "center",
  };

  const bannerStyle = {
    height: `400px`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    flexGrow: "1",
  };

  const containerStyle = {
    background: `#F1FAFE`,
    height: `400px`,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "100px",
    paddingRight: "70px",
  };

  const h1 = {
    fontSize: "36px",
    lineHeight: "42px",
    letterSpacing: "-0.025em",
    color: "#000000",
  };

  const h2 = {
    fontSize: "24px",
    fontWeight: "300",
    lineHeight: "32px",
    letterSpacing: "-0.025em",
    color: "#000000",
  };

  return (
    <>
      <Container style={containerStyle} fluid className="">
        <Row style={bannerStyle}>
          <Col className="d-none d-lg-block" style={imgContainer}>
            <img
              className="img-fluid"
              style={imgStyle}
              src="/images/undrawCar.svg"
              alt="car"
              height="400px"
            />
          </Col>
          <Col xs={12} lg={6} md={12}>
            <h1 style={h1}>
              Registra y consulta todos los peajes que has pagado
            </h1>
            <br />
            <h1 style={h2}>
              Ingresa y consulta tus pagos realizados en los peajes gestionados
              por la Gobernación del Chocó
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
