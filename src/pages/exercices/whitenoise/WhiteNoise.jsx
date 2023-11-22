import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import Nav from '../../../layout/components/nav/Nav'
import CircleLayout from '../../../layout/components/CircleLayout'
import SoundBoxComponent from '../../../components/soundbox/SoundBoxComponent'
import './whitenoise.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import FooterComponent from '../../../layout/components/footer/FooterComponent'


const WhiteNoise = () => {

    let navigate = useNavigate();

    document.title = "White Noise - Cálmara"

    const audioRefs = [
        { ref: useRef(null), name: 'RainFallMedium.mp3', originalName: 'Rain' },
        { ref: useRef(null), name: 'Calm-waves.mp3', originalName: 'Ocean' },
        { ref: useRef(null), name: 'Campfire-crackling-fireplace.mp3', originalName: 'Bonefire' },
        { ref: useRef(null), name: 'Evening-birds-singing.mp3', originalName: 'Birds' },
        { ref: useRef(null), name: 'Forest-ambience.mp3', originalName: 'Forest' },
    ];

    const [isPlaying, setIsPlaying] = useState(Array(audioRefs.length).fill(false));

    const handleDivClick = (index) => {
        const newIsPlaying = Array(audioRefs.length).fill(false);
        newIsPlaying[index] = !isPlaying[index];

        audioRefs.forEach(({ ref, name }, i) => {
            if (newIsPlaying[i]) {
                ref.current.play();
            } else {
                ref.current.pause();
                ref.current.currentTime = 0;
            }
        });

        setIsPlaying(newIsPlaying);
    };

    /*
    
    <button onClick={() => navigate("/")}>Back</button>
   
   */


    return (
        <>
            <Nav isSecondary={true} />
            <CircleLayout />
            <Container className='container' >
                <h1 className='title'>White Noise</h1>
                <h5 className='subtitle'>
                    ¿Estás buscando un espacio de calma y relajación? Has llegado al lugar indicado.
                    Te invitamos a sumergirte en un mundo de sonidos que te transportarán a un estado de serenidad incomparable.
                    Explora nuestra amplia variedad de sonidos, desde suaves olas del océano hasta sutiles murmullos de arroyos
                    en el bosque. Sumérgete en el mundo del ruido blanco y experimenta una nueva dimensión de tranquilidad.
                    ¡Explora nuestro catálogo ahora y comienza tu viaje hacia la serenidad hoy mismo!
                </h5>
                <div className='container-icons'>
                    {audioRefs.map(({ ref, name, originalName }, index) => (
                        <div key={index} onClick={() => handleDivClick(index)} style={{ cursor: 'pointer' }}>
                            <SoundBoxComponent title={originalName} logo={originalName} ></SoundBoxComponent>
                        </div>
                    ))}
                    {audioRefs.map(({ ref, name }, index) => (
                        <audio key={index} ref={ref} loop>
                            <source src={`../src/assets/sounds/${name}`} type="audio/mp3" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                    ))}
                </div>
            </Container>
            <FooterComponent></FooterComponent>
        </>
    )
}

export default WhiteNoise
