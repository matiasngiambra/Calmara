import React from 'react'
import CircleLayout from '../../layout/components/CircleLayout'
import Home from '../home/Home'
import Information from '../information/Information'
import Interactive from '../Interactive/Interactive'
import Nav from '../../layout/components/nav/Nav'
import { Container } from 'react-bootstrap'
import '../landingPage/LandingPage.css'



const LandingPage = () => {



  return (    
    <>
      <Nav></Nav>
      <CircleLayout></CircleLayout> 
      <Container className='container' >
        <Home></Home>
        <Information ></Information>
        <Interactive></Interactive>
      </Container>
    </>
  )
}

export default LandingPage
