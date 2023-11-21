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
                            <small>"La vida es una aventura, atrévete." - Teresa de Calcuta</small>
                        </p>
                    </Col>
                    <Col sm={6}>
                        <ul className="list-inline">
                            <li>
                                <a className='footer-link' href="#">Inicio</a>
                            </li>
                            <li>
                                <a className='footer-link' href="#">Sobre nosotros</a>
                            </li>
                            <li>
                                <a className='footer-link' href="#">Contacto</a>
                            </li>
                        </ul>
                        <Button variant="primary">Suscríbete a nuestro boletín</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent

