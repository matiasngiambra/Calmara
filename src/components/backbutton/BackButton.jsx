import React from 'react'
import '../backbutton/BackButton.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const BackButton = () => {
    let navigate = useNavigate();
    return (
        <div onClick={() => navigate("/")}>
            <FontAwesomeIcon className='backbutton-logo' icon={faArrowLeft} />
            Back 
        </div>
    )
}

export default BackButton

