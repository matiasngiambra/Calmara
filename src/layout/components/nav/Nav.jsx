import React from 'react'
import '../nav/Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate} from "react-router-dom";
import BackButton from '../../../components/backbutton/BackButton';


const Navclass = ( {isSecondary} ) => {
    let navigate = useNavigate();
    const handleScroll = (destino) => {
        const seccionDestino = document.getElementById(destino);
        const destinoOffset = seccionDestino.offsetTop;

        window.scrollTo({
            top: destinoOffset,
            behavior: 'smooth'
        });
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar bg-body-tertiary">
                
                <a className="navbar-brand" href="#" onClick={() => navigate("/")}> <img style={{ marginLeft: '30px', height: '30px' }} src="../src/assets/images/Calmara-logo.png" alt="" /> </a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {!isSecondary ? 
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" onClick={() => handleScroll('informationsection')}>Info</Nav.Link>
                            <Nav.Link href="#" onClick={() => handleScroll('interactivesection')} >Interactivo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> :  <BackButton></BackButton>}
                
            </Navbar>

        </>

    )
}

export default Navclass
