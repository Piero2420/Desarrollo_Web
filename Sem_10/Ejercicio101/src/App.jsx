/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Componente1 from './Components/Componente1';
import Componente3 from './Components/Componente3';

const App = () => {
  const initialColors = ['blue', 'green', 'lightblue'];
  const [colors, setColors] = useState(initialColors);

  const changeColor = () => {
    const newColors = colors.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    setColors(newColors);
  };

  return (
    <>
      <Componente1 bgColor={colors[0]} changeColor={changeColor} />
      <Componente1 bgColor={colors[1]} changeColor={changeColor} />
      <Componente3 bgColor={colors[2]} changeColor={changeColor} />
    </>
  );
};

export default App;
