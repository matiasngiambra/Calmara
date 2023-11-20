import React from 'react'
import svg from '../../../../assets/svg/mock.svg';
import LandingSectionRight from '../landing-section/LandingSectionRight';
import LandingSectionLeft from '../landing-section/LandingSectionLeft';

const Information = () => {
  
  return (
    <div className='section' id='informationsection'  >
      <h1>Información</h1>
      <LandingSectionRight 
      svg={svg} 
      text={"Texto Dummy"}/>
     <LandingSectionLeft
      svg={svg} 
      text={"Texto Dummy"}/>
    </div>
  )
}

export default Information
