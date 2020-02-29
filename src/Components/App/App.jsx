import React, { useState } from 'react';
import './_App.scss';
import DisplayRandomColor from '../DisplayRandomColor/DisplayRandomColor';
import DisplayChangeColor from '../DisplayChangeColor/DisplayChangeColor';

const App = () => {
  const [initialColor, setInitialColor] = useState({
    r: 255,
    g: 0,
    b: 0,
  });

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setInitialColor({
      r,
      g,
      b,
    });
  };

  return (
    <div className="container">
      <DisplayRandomColor
        bgndColor={initialColor}
        randomColorFunc={randomColor}
      />
      <DisplayChangeColor bgndColor={initialColor} />
    </div>
  );
};

export default App;
