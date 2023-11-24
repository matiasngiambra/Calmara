import React from 'react';
import '../circleComponent/CircleComponent.css'; 

const CircleComponent = (props) => {
  
  return (
    <div className={`circle`+props.size} style={props.style}></div>
  );
}

export default CircleComponent;
