import React from 'react'
import { Button } from 'react-bootstrap'
import '../interactive/Interactive.css'

const Interactive = () => {
  return (
    <div className='section-interactive' id='interactivesection'>
      <div className='title-secundary-interactive'>Interactivo</div>
      <div className='container-interactive'>
        <a href='/exercices/breath'>
          <Button className='button-interactive' variant="info">
            Respiración Guiada
          </Button>
        </a>
        <a href='/exercices/whitenoise'>
          <Button className='button-interactive' variant="info">
            Ruido Blanco
          </Button>
        </a>
        <a href='/exercices/phraseoftheday'>
          <Button className='button-interactive' variant="info">
            Frases motivacionales
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Interactive
