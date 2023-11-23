import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../home/home.css'

const Home = () => {


  return (
    <Container className='home-container'>
          <h1 className='title-main'>Cálmara</h1>
              <h4 className='subtitle'>
                Vivimos en un mundo lleno de ansiedad y estrés.
                <br />
                Te invitamos a aprender sobre "mindfulness" y a realizar ejercicios guiados.
              </h4>
    </Container>
  );
};

export default Home;
