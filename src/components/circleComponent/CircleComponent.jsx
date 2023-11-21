import React from 'react';
import '../circleComponent/circleComponent.css'; 

const CircleComponent = (props) => {
  
  return (
    <div className={`circle`+props.size} style={props.style}></div>
  );
}

export default CircleComponent;
