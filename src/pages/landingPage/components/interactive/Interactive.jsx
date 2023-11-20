import React from 'react'
import { Button } from 'react-bootstrap'

const Interactive = () => {
  return (
    <div className='section' id='interactivesection'>
      <h1>Interactivo</h1>

      <a href='/exercices/breath'>
        <Button variant="info">
          Respiración Guiada
        </Button>
      </a>

      <a href='/exercices/whitenoise'>
        <Button variant="info">Sonidos ambiente</Button>
      </a>


    </div>
  )
}

export default Interactive
