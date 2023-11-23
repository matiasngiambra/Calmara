import React from 'react'
import CircleLayout from '../../layout/components/CircleLayout'
import Home from './components/home/Home'
import Nav from '../../layout/components/nav/Nav'
import { Container } from 'react-bootstrap'
import '../landingPage/LandingPage.css'
import Information from './components/information/Information'
import Interactive from './components/interactive/Interactive'
import FooterComponent from '../../layout/components/footer/FooterComponent'

const LandingPage = () => {

  return (
    <>
      <Nav />
      <CircleLayout />
      <Container>
        <div className='rowhome'>
          <Home />
        </div>
        <div className='rowinformation'>
          <Information />
        </div>
        <div className='rowinteractive'>
        <Interactive />
        </div>
      </Container>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default LandingPage
