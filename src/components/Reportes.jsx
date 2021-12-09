import { Form, Col, Table } from "react-bootstrap"
import { Dias } from "./meses"
import { PagosStyled, StyledReportes } from "./styled/Pagos.styled"
import { StyledCard } from "./styled/Pagos.styled"



export default function Reportes() {
    return (

            
            <PagosStyled>
            <StyledReportes>
            <h6>Los reportes son solo validos para el ano actual.</h6>
            <Col sm="10">
            <Form.Select>
            <option id='selectOption'>Seleccione el mes de su reporte</option>
            {Dias.map(l =>
                <option value={l.noMes}>{l.Mes}</option>
                )};
            
            </Form.Select>
            <br />
            </Col>
            <br />
            <br />
            <Table striped bordered hover size="sm" id='showTable'>
            <thead>
                <tr>
                <th>Peaje</th>
                <th>Dia</th>
                <th>Hora</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>San Tomas</td>
                <td>01</td>
                <td>14:12</td>
                </tr>
                <tr>
                <td>San Tamarta</td>
                <td>04</td>
                <td>14:13</td>
                </tr>
                <tr>
                <td>Peaje Generico 3</td>
                <td>12</td>
                <td>14:13</td>
                </tr>
            </tbody>
            </Table>
            
            </StyledReportes>
            </PagosStyled>
    )
}