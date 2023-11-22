import React from 'react'
import meditation1 from '../../../../assets/svg/meditation1.svg';
import meditation2 from '../../../../assets/svg/meditation2.svg';
import nature1 from '../../../../assets/svg/nature1.svg';
import LandingSectionRight from '../landing-section/LandingSectionRight';
import LandingSectionLeft from '../landing-section/LandingSectionLeft';

const Information = () => {

  return (
    <div className='informationsection' id='informationsection' >
      <div className='title-secundary'>Información</div>
      <LandingSectionRight
        svg={nature1}
        text={
        `
        El estrés y la ansiedad son fenómenos comunes en la vida moderna, afectando la salud física y mental. 
        El estrés crónico puede desencadenar diversos problemas, desde trastornos del sueño hasta enfermedades cardiovasculares. 
        La ansiedad, por otro lado, se manifiesta en preocupaciones excesivas y miedo constante. Ambos trastornos a menudo coexisten, 
        intensificando sus efectos adversos.
        `
        }
      />
      <LandingSectionLeft
        svg={meditation1}
        text={
        `
        El estrés y la ansiedad son respuestas naturales del cuerpo ante situaciones desafiantes, 
        pero el exceso de ambos puede tener efectos negativos en la salud mental. 
        La respiración controlada es una técnica eficaz para reducir el estrés, ya que ayuda a calmar el sistema nervioso. 
        Combinarla con sonidos ambiente relajantes, como la música suave o el murmullo del agua, proporciona un entorno propicio para la relajación.
        `
        }
      />

      <LandingSectionRight
        svg={meditation2}
        text={
        `
        La lectura de frases motivadoras también puede contrarrestar la ansiedad al cambiar el enfoque mental y fomentar pensamientos positivos, 
        brindando apoyo emocional durante momentos difíciles. Estas prácticas simples pueden ser herramientas efectivas para gestionar el estrés 
        y la ansiedad en la vida cotidiana.
        `
        }
      />
    </div>
  )
}

export default Information
