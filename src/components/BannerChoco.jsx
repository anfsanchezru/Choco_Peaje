import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function BannerChoco({setLogged}) {
    const imgStyle = {
        position: `absolute`,
        width: `631.11px`,
        height: `297.31px`,
        top: `120px`,
        right: `200px`
    }

    const bannerStyle = {
        background: `#2A98C7`,
        height: `330px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"

    }

    const h1 = {
        fontSize: "54px",
        lineHeight: "63px",
        letterSpacing: "-0.025em",
        color: "white"
    }

    const h2 = {
        fontSize: "48px",
        lineHeight: "56px",
        letterSpacing: "-0.025em",
        color: "#97DAF8"
    }

    const h3 = {
        fontSize: "48px",
        lineHeight: "56px",
        letterSpacing: "-0.025em",
        color: "#006EA0"
    }
 

    return (
        <div>
            <Container style={bannerStyle} fluid className="">
                <Container style={bannerStyle} className="container-sm">      
                <h1 style={h1}>Peajes del Chocó</h1>
                <h1 style={h2}>Tu tarjeta</h1>
                <h1 style={h3}>Tu control</h1>
                </Container>
                <img style={imgStyle} src="/images/veectezyTollRoad.svg" alt="car" height="300px"/>
            </Container>
        </div>
    )
}
