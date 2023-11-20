export default function getRandomQuote() {
    return fetch('https://vucrx6cdyd.execute-api.us-east-1.amazonaws.com/default/palacios')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data; // Devuelve los datos obtenidos
      })
      .catch(error => {
        throw error; // Propaga el error para manejarlo en el componente
      });
  }
  