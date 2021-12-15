import React from "react";
import { Container } from "react-bootstrap";

export default function Comofunciona() {
  const imgStyle = {
    position: `relative`,
    right: "-30px",
  };

  const containerStyle = {
    flexGrow: "1",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
    padding: "100px",    
    maxWidth: "800px",
    maxHeight: "650px"
  }

  const formStyle = {
    flexGrow: "1",
    borderRadius: "20px",
    padding: "50px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    aligntItems: "center",
    textAlign: "center",
  };
  return (
    <Container fluid="md" style={containerStyle}>
      <div style={formStyle}>
        <h1>Under Construction!</h1>
        <img
          className="img-fluid"
          style={imgStyle}
          src="/images/veectezyTollRoad.svg"
          alt="car"
          height="400px"
        />
      </div>
    </Container>
  );
}
