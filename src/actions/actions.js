import * as types from './action-types';

export function generateNewScreen() {
  return {
    type: types.GENERATE_NEW_SCREEN,
    color: randomColor(),
    location: randomLocation(),
    shape: randomShape()
  }
};

function randomColor() {
  var r = Math.random();
  if(r<0.25) {
    return 'yellow';
  } else if (r <0.5) {
    return 'red';
  } else if (r <0.75) {
    return 'green';
  } else if (r <1) {
    return 'blue';
  }
};

function randomLocation() {
  var r = Math.random();
  if(r<0.25) {
    return 0;
  } else if (r <0.5) {
    return 1;
  } else if (r <0.75) {
    return 2;
  } else if (r <1) {
    return 3;
  }
};

function randomShape() {
  var r = Math.random();
  if(r<0.25) {
    return 'Egg';
  } else if (r <0.5) {
    return 'Rectangle';
  } else if (r <0.75) {
    return 'Circle';
  } else if (r <1) {
    return 'Line';
  }
};
