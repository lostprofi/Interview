import React from 'react';
import './_DisplayChangeColor.scss';
import ChangeColor from '../ChangeColor/ChangeColor';

const DisplayChangeColor = (props) => {
  const prop = props;

  return (
    <ChangeColor bgndColor={prop.bgndColor} className="changed-color" />
  );
};

export default DisplayChangeColor;
