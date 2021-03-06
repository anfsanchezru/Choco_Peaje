import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function BannerChoco() {
  const imgStyle = {
    position: `relative`,
    right: "-30px",
  };

  const bannerStyle = {
    background: `#2A98C7`,
    height: `330px`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    flexGrow: "1"
  };

  const containerStyle = {
    background: `#2A98C7`,
    height: `330px`,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "70px",
    paddingRight: "70px"
  };

  const h1 = {
    fontSize: "54px",
    lineHeight: "63px",
    letterSpacing: "-0.025em",
    color: "white",
  };

  const h2 = {
    fontSize: "48px",
    lineHeight: "56px",
    letterSpacing: "-0.025em",
    color: "#97DAF8",
  };

  const h3 = {
    fontSize: "48px",
    lineHeight: "56px",
    letterSpacing: "-0.025em",
    color: "#006EA0",
  };

  return (
    <>
      <Container style={containerStyle} fluid className="">
        <Row style={bannerStyle}>
          <Col xs={12} lg={6} md={12}>
              <h1 style={h1}>Peajes del Chocó</h1>
              <h1 style={h2}>Tu tarjeta</h1>
              <h1 style={h3}>Tu control</h1>
          </Col>
          <Col className="d-none d-lg-block">
            <img
              className="img-fluid"
              style={imgStyle}
              src="/images/veectezyTollRoad.svg"
              alt="car"
              height="400px"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
