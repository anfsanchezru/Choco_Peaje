import React, { useState, useEffect } from 'react';
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Registro() {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [documento, setDocumento] = useState("");
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        const registerData = {
            email: email,
            documento: documento,
            name: name,
            lastname: lastName,
            password: password
        }
        console.log(registerData);
    }

    return (
        <>
            <Container fluid="md" className="">
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                            <Form.Control type="email" placeholder="name@example.com"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDocument">
                        <FloatingLabel controlId="floatingInput" label="Número de documento">
                            <Form.Control type="number" placeholder="110478956413"
                                onChange={(e) => {
                                    setDocumento(e.target.value);
                                }} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNombre">
                        <FloatingLabel controlId="floatingInput" label="Nombre">
                            <Form.Control type="text" placeholder="Adam"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicApellido">
                        <FloatingLabel controlId="floatingInput" label="Apellido">
                            <Form.Control type="text" placeholder="Smith"
                                onChange={(e) => {
                                    setlastName(e.target.value);
                                }} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Contraseña">
                            <Form.Control type="password" placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={register}>
                        REGISTRARSE
                    </Button>
                </Form>
            </Container>
        </>
    )
}