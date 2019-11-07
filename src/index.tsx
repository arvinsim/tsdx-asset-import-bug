import * as React from 'react';
import AASVG from './aa.svg';
import tuxPng from './tux.png';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

export const WithSVG = () => {
  return <AASVG />;
};

export const WithPNG = () => {
  return <img src={tuxPng} alt={'tuxPng'} />;
};
