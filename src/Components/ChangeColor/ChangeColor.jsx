import React from 'react';

const ChangeColor = (props) => {
  const prop = props;

  return (
    <div
      style={{
        backgroundColor: `rgb(${256 - prop.bgndColor.r}, ${256
          - prop.bgndColor.g}, ${256 - prop.bgndColor.b})`,
      }}
      className={prop.className}
    />
  );
};

export default ChangeColor;
