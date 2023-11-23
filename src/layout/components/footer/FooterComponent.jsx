import React from 'react'
import '../footer/FooterComponent.css'
import { Container, Row, Col, Button } from "react-bootstrap";

const FooterComponent = () => {
    return (
        <footer className='footer'>
            <Container className='footer-container'>
                <Row>
                    <Col sm={6}>
                        <p>
                            Copyright &copy; 2023 Cálmara. Todos los derechos reservados.
                            <br />
                            <small>
                                Alumnos: <small> </small>
                                <a className='link-reference-footer' href='https://www.linkedin.com/in/matias-giambra/'>Giambra Matias</a>
                                <small> y </small> <a className='link-reference-footer' href='https://www.linkedin.com/in/nahuel-palacios-salguero/'>Palacios Nahuel</a>
                            </small>
                        </p>
                    </Col>
                    <Col sm={6}>
                        <ul className="list-inline">
                            <li>
                                <a className='footer-link' href="#">Volver Arriba</a>
                            </li>
                           
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent

