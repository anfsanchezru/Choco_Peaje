import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function BannerChoco3() {
  const imgStyle = {
    position: ``,
    right: "-50px",
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
    background: `white`,
    height: `400px`,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "70px",
    paddingRight: "70px",
  };

  const h1 = {
    fontSize: "36px",
    lineHeight: "42px",
    letterSpacing: "-0.025em",
    color: "#000000",
    width: "80%"
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
          <Col xs={12} lg={6} md={12}>
            <h1 style={h1}>Usa tu tarjeta para pagar peajes</h1>
            <br />
            <h1 style={h2}>
              Usa tu tarjeta al momento de pagar, realiza recargas online con
              cualquier medio de pago y genera reportes de tus pagos
            </h1>
          </Col>
          <Col className="d-none d-lg-block" style={imgContainer}>
            <img
              className="img-fluid"
              style={imgStyle}
              src="/images/undrawOnlinePayments.svg"
              alt="car"
              height="400px"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
