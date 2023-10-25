import React from 'react'
import CircleComponent from '../../components/circleComponent/CircleComponent'

const CircleLayout = () => {
    return (
        <div>
            <CircleComponent style={{ top: '-30%', left: '85%', height: '70%', width: '35%' }} />
            <CircleComponent style={{ top: '10%', left: '-2%', height: '10%', width: '5%' }} />
            <CircleComponent style={{ top: '75%', left: '-15%', height: '70%', width: '35%' }} />
            <CircleComponent style={{ top: '70%', left: '85%', height: '10%', width: '5%' }} />
            <CircleComponent style={{ top: '10%', left: '25%', height: '5%', width: '2.5%' }} />
        </div>
    )
}

export default CircleLayout
