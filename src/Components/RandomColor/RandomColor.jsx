import React, { useEffect } from 'react';

const RandomColor = (props) => {
  const prop = props;

  useEffect(() => {
    const timerId = setInterval(prop.randomColorFunc, 2000);
    const clearTimer = () => {
      clearInterval(timerId);
    };
    return clearTimer;
  });

  return (
    <div
      className={prop.className}
      style={{
        backgroundColor: `rgb(${prop.bgndColor.r}, ${prop.bgndColor.g}, ${prop.bgndColor.b})`,
      }}
    />
  );
};

export default RandomColor;
