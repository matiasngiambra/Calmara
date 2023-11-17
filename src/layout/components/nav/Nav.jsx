import React from 'react'
import '../nav/Nav.css'

const Nav = ( ) => {

    const handleScroll = ( destino ) => {
        const seccionDestino = document.getElementById(destino);
        const destinoOffset = seccionDestino.offsetTop;
    
        window.scrollTo({
          top: destinoOffset,
          behavior: 'smooth'
        });
      }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img style={{ height: '30px' }} src="../src/assets/images/Calmara-logo.png" alt="" /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=> handleScroll('informationsection')}>Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=> handleScroll('interactivesection')} >Interactive</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
