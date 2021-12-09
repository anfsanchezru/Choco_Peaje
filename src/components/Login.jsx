import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setLogged }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (email !== "javier@javier.com") {
      alert("usuario invalido");
      return;
    }
    if (password !== "1234") {
      alert("password invalido");
      return;
    }
    setLogged(true);
    localStorage.setItem("logged", true);
    localStorage.setItem("user", email);

    navigate("/");
  };

  useEffect(() => {
    let userState = localStorage.getItem("logged");

    if (userState === "true") {
      navigate("/");
    }
  });

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
    textAlign: "left"
  }

  const background = {
    backgroundImage: "linear-gradient(90deg, #2A98C7 0%, #ACCDE5 100%",
    flexGrow: "1",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
  }

  const textStyles = {
    h1: {
      color: "#0085BB"
    },
    link: {
      textDecoration: "none"
    },
    button: {
      marginTop: "20px",
      borderRadius: "30px",
      height: "45px",
      background: "#0085BB"
    },
    formBox: {
      borderRadius: "20px"
    }
  }

  return (
    <>
      <div style={background}>
        <Container fluid="md" style={containerStyle}>
          <Form style={formStyle}>
            <div>
              <h1 style={textStyles.h1}>LOGIN</h1>
              <p>¿No tienes cuenta? <Link to="/registro" style={textStyles.link}>Registrate aquí</Link></p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control style={textStyles.formBox}
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control style={textStyles.formBox}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={login} style={textStyles.button}>
              INGRESA
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}
