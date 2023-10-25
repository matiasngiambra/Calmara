import React from 'react';
import '../circleComponent/circleComponent.css'; 

const CircleComponent = (props) => {
  
  return (
    <div className="circle fixed rounded-full bg-main-300 " style={props.style}></div>
  );
}

export default CircleComponent;
