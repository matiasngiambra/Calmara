import React from 'react'
import CircleComponent from '../../components/circleComponent/CircleComponent'

const CircleLayout = () => {
    return (
        <div>
            <CircleComponent style={{ top: '-30%', left: '85%' } } size='1' />
            <CircleComponent style={{ top: '10%', left: '-2%' }} size='2'/>
            <CircleComponent style={{ top: '81%', left: '-18%' }} size='1'/>
            <CircleComponent style={{ top: '70%', left: '85%' }} size='2'/>
            <CircleComponent style={{ top: '10%', left: '25%' }} size='3'/>
            <CircleComponent style={{ top: '60%', left: '65%' }} size='3'/>
        </div>
    )
}

export default CircleLayout
