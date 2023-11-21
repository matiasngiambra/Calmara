import React from 'react'
import CircleLayout from '../../layout/components/CircleLayout'
import Home from './components/home/Home'
import Nav from '../../layout/components/nav/Nav'
import { Container, Row } from 'react-bootstrap'
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
        <Row>
          <Home />
        </Row>
        <Row>
          <Information />
        </Row>
        <Row>
          <Interactive />
        </Row>
      </Container>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default LandingPage
