import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../breath/Breath.css'
import CircleLayout from '../../../layout/components/CircleLayout';
import FooterComponent from '../../../layout/components/footer/FooterComponent';
import Navclass from '../../../layout/components/nav/Nav';

const Breath = () => {
  const [isMeditating, setIsMeditating] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [inhale, setInhale] = useState(true);
  const [repetition, setRepetition] = useState(0);

  const bubbleSize = 125; // Tamaño inicial de la burbuja
  const maxBubbleSize = 250; // Tamaño máximo de la burbuja
  const breathDuration = 5; // Duración de la inhalación y exhalación en segundos

  useEffect(() => {
    let interval;

    if (isMeditating) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);

        if (seconds === breathDuration) {
          setInhale((prevInhale) => !prevInhale);
          setSeconds(0);

          if (!inhale) {
            setRepetition((prevRepetition) => prevRepetition + 1);

            if (repetition === 3) {
              // Finalizar la meditación después de 3 repeticiones
              stopMeditation();
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isMeditating, seconds, repetition, inhale]);

  const startMeditation = () => {
    setIsMeditating(true);
  };

  const stopMeditation = () => {
    setIsMeditating(false);
    setSeconds(0);
    setRepetition(0);
  };

  const calculateBubbleSize = () => {
    if (inhale) {
      return (
        bubbleSize + (seconds * (maxBubbleSize - bubbleSize)) / breathDuration
      );
    } else {
      return (
        maxBubbleSize -
        (seconds * (maxBubbleSize - bubbleSize)) / breathDuration
      );
    }
  };

  return (
    <>
      <CircleLayout />
      <Navclass isSecondary={true} />
      <Container className="vh-100 container-breath">
        <div className='conteiner-breath-app'>




          <div className='breath-container'>
            <p className='repetition-title'>Repeticion <span className='repetition-number'>{repetition}/3</span></p>
            <p className='breath-title'>{inhale ? 'Inhalar' : 'Exhalar'}</p>
            <div
              style={{
                width: `${calculateBubbleSize()}px`,
                height: `${calculateBubbleSize()}px`,
                borderRadius: '50%',
                backgroundColor: '#3498db', // Azul primario de la paleta de colores
                transition: 'all 0.5s ease-out',
                margin: '30px auto',
              }}
            />
            <p className='breath-subtitle'>{seconds}</p>
          </div>

          <div className='conteiner-breath-buttons'>

            <Button onClick={startMeditation} variant="primary" className="button button-start">
              Empezar
            </Button>
            <Button onClick={stopMeditation} variant="danger" className="button button-stop">
              Parar
            </Button>
          </div>

        </div>

      </Container>
      <FooterComponent />
    </>
  );
};

export default Breath;
