import { fromJS } from 'immutable';

var initialState = fromJS({
  currentDisplay: {
    shape: "line",
    location: 3,
    colour: "green"
  },
  properties: {
    shape: [
      {value: 'circle', weighting: 0.25},
      {value: 'rectangle', weighting: 0.25},
      {value: 'egg', weighting: 0.25},
      {value: 'line', weighting: 0.25},
    ],
    location: [
      {value: 0, weighting: 0.25},
      {value: 1, weighting: 0.25},
      {value: 2, weighting: 0.25},
      {value: 3, weighting: 0.25},
    ],
    colour: [
      {value: 'green', weighting: 0.25},
      {value: 'red', weighting: 0.25},
      {value: 'yellow', weighting: 0.25},
      {value: 'blue', weighting: 0.25},
    ]
  }
});

export default initialState;
