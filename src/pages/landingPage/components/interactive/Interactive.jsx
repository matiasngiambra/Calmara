import React from 'react'
import { Button } from 'react-bootstrap'
import '../interactive/Interactive.css'

const Interactive = () => {
  return (
    <div className='section' id='interactivesection'>
      <h1>Interactivo</h1>

      <div className='container-interactive'>

        <a href='/exercices/breath'>
          <Button className='button-interactive' variant="info">
            Respiración Guiada
          </Button>
        </a>

        <a href='/exercices/whitenoise'>
          <Button className='button-interactive' variant="info">Sonidos ambiente</Button>
        </a>
      </div>


    </div>
  )
}

export default Interactive