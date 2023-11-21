import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getRandomQuote from '../../../../services/getRandomQuote';

const Home = () => {


  return (
    <Container className='section'>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={8}>
          <h1 className='title-main'>Cálmara</h1>
              <h4 className='subtitle'>
                Vivimos en un mundo lleno de ansiedad y estrés.
                <br />
                Te invitamos a aprender sobre "mindfulness" y a realizar ejercicios guiados.
              </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
