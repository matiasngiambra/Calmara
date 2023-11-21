import React from 'react'
import { useNavigate } from 'react-router';

const BackButton = () => {
    let navigate = useNavigate();
    return (
        <div onClick={() => navigate("/")}> BackButton</div>
    )
}

export default BackButton

