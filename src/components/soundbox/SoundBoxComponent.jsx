import React from 'react'
import '../soundbox/soundboxcomponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faTree, faWater, faFire, faDove} from '@fortawesome/free-solid-svg-icons'

const SoundBoxComponent = ({ title, logo }) => {

  const selectLogo = (logo) => {
    if (logo === 'Rain') {
      return <FontAwesomeIcon className='logo' icon={faCloudRain} />
    }
    else if (logo === 'Ocean') {
      return  <FontAwesomeIcon className='logo' icon={faWater} />
    }
    else if (logo === 'Forest') {
      return  <FontAwesomeIcon className='logo' icon={faTree} />
    }
    else if (logo === 'Bonefire') {
      return <FontAwesomeIcon className='logo' icon={faFire} />
    }
    else if (logo === 'Birds') {
      return <FontAwesomeIcon className='logo' icon={faDove} />
    }


  }

  return (
    <div className='box' >
      <h2>{title}</h2>
      {selectLogo(logo)}
    </div>
  )
}

export default SoundBoxComponent
