import React from 'react'
import meditation1 from '../../../../assets/svg/meditation1.svg';
import meditation2 from '../../../../assets/svg/meditation2.svg';
import meditation3 from '../../../../assets/svg/meditation3.svg';
import meditation4 from '../../../../assets/svg/meditation4.svg';
import meditation5 from '../../../../assets/svg/meditation5.svg';
import '../information/information.css';
import { Image } from 'react-bootstrap';

const Information = () => {

  return (
    <div className='informationsection' id='informationsection' >
      <div className='title-secundary-information'>Información</div>

      <div className='contenedor-info'>
        <div className='info-card'>
          <p className='infotext'>

            El estrés y la ansiedad son fenómenos comunes en la vida moderna, afectando la salud física y mental.
            El estrés crónico puede desencadenar diversos problemas, desde trastornos del sueño hasta enfermedades cardiovasculares.
            La ansiedad, por otro lado, se manifiesta en preocupaciones excesivas y miedo constante. Ambos trastornos a menudo coexisten,
            intensificando sus efectos adversos.
          </p>
          <div className='info-image'>
            <Image src={meditation1} fluid rounded />
          </div>
        </div>

        <div className='info-card-reverse'>
          <p className='infotext'>
            El estrés y la ansiedad son respuestas naturales del cuerpo ante situaciones desafiantes,
            pero el exceso de ambos puede tener efectos negativos en la salud mental.
            La respiración controlada es una técnica eficaz para reducir el estrés, ya que ayuda a calmar el sistema nervioso.
            Combinarla con sonidos ambiente relajantes, como la música suave o el murmullo del agua, proporciona un entorno propicio para la relajación.
          </p>
          <div className='info-image'>
            <Image src={meditation2} fluid rounded />
          </div>
        </div>

        <div className='info-card'>
          <p className='infotext'>
            La lectura de frases motivadoras también puede contrarrestar la ansiedad al cambiar el enfoque mental y fomentar pensamientos positivos,
            brindando apoyo emocional durante momentos difíciles. Estas prácticas simples pueden ser herramientas efectivas para gestionar el estrés
            y la ansiedad en la vida cotidiana.
          </p>
          <div className='info-image'>
            <Image src={meditation5} fluid rounded />
          </div>
        </div>

      </div>


    </div>
  )
}

export default Information
