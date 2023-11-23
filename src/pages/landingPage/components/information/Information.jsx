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
            Imagina que tu mente es como una montaña rusa de emociones. El <b><u>estrés</u></b> es como cuando la montaña rusa sube muy, muy alto, y sientes
            que todo va muy rápido y se vuelve abrumador. Es como tener demasiadas cosas que hacer y sentirte un poco como "<i>¡Ah! ¡Esto es demasiado!</i>".
            La <b><u>ansiedad</u></b>, por otro lado, es como cuando te preocupas mucho por algo que podría pasar, incluso si no es muy probable.
            Es como tener un amigo miedoso en tu cabeza que dice: "<i>¿Y si algo malo sucede?</i> " y hace que te sientas nervioso,
            intensificando sus efectos adversos.
          </p>
          <div className='info-image'>
            <Image src={meditation1} fluid rounded />
          </div>
        </div>

        <div className='info-card-reverse'>
          <p className='infotext'>
            Entonces, el estrés es como estar ocupado y abrumado, y la ansiedad es cuando te preocupas mucho por lo que podría pasar. Ambas son <u>respuestas
              naturales del cuerpo ante situaciones desafiantes</u>, pero exceso de ambos puede tener efectos negativos en la salud fisica y mental.
            Pero recuerda, <b>¡eres el piloto de tu montaña rusa y puedes aprender a
              controlarla para que sea divertida en lugar de aterradora!</b> 
          </p>
          <div className='info-image'>
            <Image src={meditation2} fluid rounded />
          </div>
        </div>

        <div className='info-card'>
          <p className='infotext'>
            La <b><i>respiración guiada</i></b> es una técnica eficaz para reducir el estrés, ya que ayuda a calmar el sistema nervioso.
            Combinarla con <b><i>ruido blanco</i></b>, como una noche de lluvia o el murmullo del agua del océano,
            o la <b><i>lectura de frases motivadoras</i></b> proporcionan un entorno propicio para la relajación y también sirven
            para contrarrestar la ansiedad al cambiar el enfoque mental y fomentar pensamientos positivos.
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
