import * as types from './action-types';
import store from '../store/store';

export function updateWeightings(liked) {
  return {
    type: types.UPDATE_WEIGHTINGS,
    liked: liked
  }
}

export function generateNewScreen() {
  return {
    type: types.GENERATE_NEW_SCREEN,
    colour: randomiseProperty('colour'),
    location: randomiseProperty('location'),
    shape: randomiseProperty('shape')
  }
};

function randomiseProperty(property) {

  var weightings = store.getState().getIn(['properties',property]);
  var probability = 0;
  var r = Math.random();

  for(var i = 0; i < weightings.size; i ++) {
    probability = probability + weightings.get(i).get('weighting')
    if(r < probability) {
      return weightings.get(i).get('value');
    }
  }

  return weightings.get(weightings.size-1).get('value');

};
