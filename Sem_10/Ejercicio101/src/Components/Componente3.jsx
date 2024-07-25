/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Componente3 = ({ bgColor, changeColor }) => {
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
      <img src="/src/assets/foto.png" alt="Foto" style={{ height: '80px' }} />
      <button onClick={changeColor} style={{ marginLeft: '10px' }}>Cambiar Color</button>
    </div>
  );
};

export default Componente3;
