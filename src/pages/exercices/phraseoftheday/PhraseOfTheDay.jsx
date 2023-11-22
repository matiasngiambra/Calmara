import React, { useEffect, useState } from 'react';
import getRandomQuote from '../../../services/getRandomQuote';
import CircleLayout from '../../../layout/components/CircleLayout';
import { Col, Container, Row } from 'react-bootstrap';
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

  return (
    <div>
      <CircleLayout />
      <Navclass isSecondary={true}></Navclass>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            {!loading ? (
              <>
                <h1 className="text-center">{phraseText}</h1>
                <p className="text-center text-muted">{phraseAuthor}</p>
              </>
            ) : <div>Cargando</div>}
          </Col>
        </Row>
      </Container>

      <FooterComponent/>

    </div>
  );
};
