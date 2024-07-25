/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Componente1 = ({ bgColor, changeColor }) => {
  return (
    <div 
      style={{
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        width: '85%',
        marginBottom: '10px',
      }}
    >
      <button onClick={changeColor}>Cambiar Color</button>
    </div>
  );
};

export default Componente1;
