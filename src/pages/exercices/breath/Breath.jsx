import React, { useState, useEffect } from 'react';

const Breath = () => {
  const [isMeditating, setIsMeditating] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [inhale, setInhale] = useState(true);
  const [repetition, setRepetition] = useState(0);

  const bubbleSize = 40; // Tamaño inicial de la burbuja
  const maxBubbleSize = 80; // Tamaño máximo de la burbuja
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

            if (repetition === 2) {
              // Finalizar la meditación después de 2 repeticiones
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
    <div>
      <button onClick={startMeditation}>Start</button>
      <button onClick={stopMeditation}>Stop</button>

      <div>
        <p>Repetition {repetition}/2</p>
        <p>{inhale ? 'Inhale' : 'Exhale'}</p>
        <div
          style={{
            width: `${calculateBubbleSize()}px`,
            height: `${calculateBubbleSize()}px`,
            borderRadius: '50%',
            backgroundColor: 'lightblue',
            transition: 'all 0.5s ease-out',
          }}
        />
        <p>{seconds} seconds</p>
      </div>
    </div>
  );
};

export default Breath;