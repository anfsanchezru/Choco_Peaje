import React, { useState, useEffect } from 'react';
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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

    const containerStyle = {
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        aligntItems: "center",
        justifyContent: "center",
        padding: "100px",
        maxWidth: "800px",
        maxHeight: "720px"
    }

    const formStyle = {
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
            height: "50px",
            background: "#0085BB"
        },
        formBox: {
            borderRadius: "30px",
            margin: "0px"
        },
        title: {
            marginBottom: "20px"
        } 
    }

    return (
        <>
            <div style={background}>
                <Container fluid="md" style={containerStyle}>
                    <Form style={formStyle}>

                        <div style={textStyles.title}>
                            <h1 style={textStyles.h1}>REGISTRO</h1>
                            <p>¿Ya tienes cuenta? <Link to="/login" style={textStyles.link}>Ingresa aquí</Link></p>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel controlId="floatingInput" label="Email">
                                <Form.Control type="email" placeholder="name@email.com" style={textStyles.formBox}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDocument">
                            <FloatingLabel controlId="floatingInput" label="Número de documento">
                                <Form.Control type="number" placeholder="110478956413" style={textStyles.formBox}
                                    onChange={(e) => {
                                        setDocumento(e.target.value);
                                    }} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <FloatingLabel controlId="floatingInput" label="Nombre">
                                <Form.Control type="text" placeholder="Adam" style={textStyles.formBox}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicApellido">
                            <FloatingLabel controlId="floatingInput" label="Apellido">
                                <Form.Control type="text" placeholder="Smith" style={textStyles.formBox}
                                    onChange={(e) => {
                                        setlastName(e.target.value);
                                    }} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <FloatingLabel controlId="floatingPassword" label="Contraseña">
                                <Form.Control type="password" placeholder="Password" style={textStyles.formBox}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={register} style={textStyles.button}>
                            REGISTRARSE
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}