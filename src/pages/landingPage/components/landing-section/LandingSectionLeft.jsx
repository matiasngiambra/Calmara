import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingSection.css';

const LandingSectionLeft = ({ svg, text }) => {
  return (
    <Container>
      <Row className="my-4 align-items-center">

        {/* Imagen */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="text-center">
            <Image src={svg} fluid rounded />
          </div>
        </Col>
        {/* Texto */}
        <Col xs={12} md={6}>
          <Card className="blue-background">
            {text}
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default LandingSectionLeft;
