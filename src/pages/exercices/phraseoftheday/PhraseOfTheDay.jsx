import React, { useEffect, useState } from 'react';
import getRandomQuote from '../../../services/getRandomQuote';
import CircleLayout from '../../../layout/components/CircleLayout';
import { Col, Container, Row } from 'react-bootstrap';

export const PhraseOfTheDay = () => {
  const [loading, setLoading] = useState(true);
  const [phraseText, setPhraseText] = useState('');
  const [phraseAuthor, setPhraseAuthor] = useState('');

  useEffect(() => {
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

    fetchQuote();
  }, []);

  return (
    <div>
      <CircleLayout />

      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            {!loading && (
              <>
                <h1 className="text-center">{phraseText}</h1>
                <p className="text-center text-muted">{phraseAuthor}</p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
