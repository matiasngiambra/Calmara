import React from 'react'
import meditation1 from '../../../../assets/svg/meditation1.svg';
import meditation2 from '../../../../assets/svg/meditation2.svg';
import LandingSectionRight from '../landing-section/LandingSectionRight';
import LandingSectionLeft from '../landing-section/LandingSectionLeft';

const Information = () => {
  
  return (
    <div className='section' id='informationsection'  >
      <h1>Información</h1>
      <LandingSectionRight 
      svg={meditation1} 
      text={"Texto Dummy"}/>
     <LandingSectionLeft
      svg={meditation2} 
      text={"Texto Dummy"}/>
    </div>
  )
}

export default Information
