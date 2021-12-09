import { Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";
import PrettyCar from '../images/undrawCar.svg';


export default function Pagos() {
    return (
        <>
        <PagosStyled>
        <StyledCard>
            <div>
            <Col sm="10">
            <Form.Select>
            <option>Seleccione el método de pago</option>
            <option value="1">Tarjeta de Crédito</option>
            <option value="2">Tarjeta Debito</option>
            <option value="3">PSE</option>
            </Form.Select>
            <br />

            <Form.Select>
            <option>Seleccione la entidad bancaria</option>
            <option value="1">Bancolombia</option>
            <option value="2">Davivienda</option>
            <option value="3">Banco Genérico 3</option>
            </Form.Select>
            <br />

            <Form.Select>
            <option>Introduzca el tipo de identificación</option>
            <option value="1">C.C.</option>
            <option value="2">T.I.</option>
            <option value="3">Pasaporte</option>
            </Form.Select>
            <br />

            <Form.Control type="text" placeholder='Introduzca su número de identificación' />
            <br />
            <Form.Control type="text" placeholder='Introduzca su dirección ' />
            <br />
            <Form.Control type="text" placeholder='Introduzca su correo ' />

            <br />
            <br />
            <Form.Control type="number" placeholder='Introduzca el valor a recargar ' />
            </Col>
            </div>
            <div>
            <img src={PrettyCar}></img>
            </div>
            <br />
            
        </StyledCard>
        <Button variant="primary" type="submit">
            Recargar
        </Button>
        </PagosStyled>
      </>
    )
}