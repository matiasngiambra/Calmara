import React, { useEffect, useState } from 'react';
import '../phraseoftheday/PhraseOfTheDay.css'
import getRandomQuote from '../../../services/getRandomQuote';
import CircleLayout from '../../../layout/components/CircleLayout';
import { Col, Container, Row, Button } from 'react-bootstrap'; // Importa Button desde react-bootstrap
import FooterComponent from '../../../layout/components/footer/FooterComponent';
import Navclass from '../../../layout/components/nav/Nav';

export const PhraseOfTheDay = () => {
  const [loading, setLoading] = useState(true);
  const [phraseText, setPhraseText] = useState('');
  const [phraseAuthor, setPhraseAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const randomQuote = await getRandomQuote();
      const [text, author] = randomQuote.frase.split(' - '); // Dividir la frase en texto y autor
      setPhraseText(text);
      setPhraseAuthor(author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleGenerateNewQuote = () => {
    fetchQuote();
  };

  return (
    <div>
      <CircleLayout />
      <Navclass isSecondary={true} />
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row className="d-flex align-items-center">
          <Col className="d-flex flex-column align-items-center">
            {!loading ? (
              <>
                <h1 className="text-center phrase-text">{phraseText}</h1>
                <p className="text-center text-muted phrase-autor">{phraseAuthor}</p>
                <div className='phrase-button-container'>
                  <Button onClick={handleGenerateNewQuote}>¡Generar nueva frase!</Button> {/* Botón para generar nueva frase */}
                </div>
              </>
            ) : (
              <div>Cargando</div>
            )}
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};
