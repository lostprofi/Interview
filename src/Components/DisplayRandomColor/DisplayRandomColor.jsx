import React from 'react';
import './_DisplayRandomColor.scss';
import RandomColor from '../RandomColor/RandomColor';

const DisplayRandomColor = (props) => {
  const prop = props;

  return (
    <RandomColor
      randomColorFunc={prop.randomColorFunc}
      className="display-random"
      bgndColor={prop.bgndColor}
    />
  );
};

export default DisplayRandomColor;
