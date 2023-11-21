import React, { useEffect, useState } from 'react'
import getRandomQuote from '../../../services/getRandomQuote';

export const PhraseOfTheDay = () => {

    const [loading, setLoading] = useState(true);
    const [phrase, setPhrase] = useState('');
  
    useEffect(() => {
      const fetchQuote = async () => {
        try {
          setLoading(true);
          const randomQuote = await getRandomQuote();
          setPhrase(randomQuote.frase);
        } catch (error) {
          console.error('Error fetching quote:', error);
        } finally {
          setLoading(false); // Ensure loading state is set to false regardless of success/failure
        }
      };
  
      fetchQuote();
    }, []);


  return (
    <div>
        {!loading && phrase}
    </div>
  )
}
