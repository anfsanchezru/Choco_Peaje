import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <Container fluid="md" className="">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            INGRESA
          </Button>
        </Form>
      </Container>
    </div>
  );
}