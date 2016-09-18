import initialState from '../store/initialState';
import * as types from '../actions/action-types';

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case types.GENERATE_NEW_SCREEN:
      let newState = state;
      newState = newState.setIn(["currentDisplay","colour"],action.colour);
      newState = newState.setIn(["currentDisplay","location"],action.location);
      newState = newState.setIn(["currentDisplay","shape"],action.shape);
      return newState;
    case types.UPDATE_WEIGHTINGS:
      newState = updatePropertyWeightings(state, 'shape', action.liked);
      newState = updatePropertyWeightings(newState, 'location', action.liked);
      return updatePropertyWeightings(newState, 'colour', action.liked);
  }

  return state;
};

function updatePropertyWeightings(state, property, liked) {

  var weightings = state.getIn(['properties',property]);
  var propertyOnDisplay = state.getIn(['currentDisplay',property]);

  var propertyOnDisplayPosNeg = 1;
  var propertyOtherPosNeg = -1;

  if(!liked) {
    propertyOnDisplayPosNeg = -1;
    propertyOtherPosNeg = 1;
  }

  var adjustValue = 0.01;
  var adjustProperyOnDisplay = propertyOnDisplayPosNeg * adjustValue * (weightings.size - 1);
  var adjustOtherProperies = propertyOtherPosNeg * adjustValue;

  for(var i = 0; i < weightings.size; i ++) {

    var currentRow = weightings.get(i);

    // Check if this is the property on display
    if(currentRow.get('value') === propertyOnDisplay) {
      weightings = weightings.set(i,currentRow.set('weighting',(currentRow.get('weighting') + adjustProperyOnDisplay)));
    // If not then adjust them all the same
    } else {
      weightings = weightings.set(i,currentRow.set('weighting',(currentRow.get('weighting') + adjustOtherProperies)));
    }
  }

  for(var i = 0; i < weightings.size; i ++) {
    console.log(weightings.get(i).get('value') + ':' + weightings.get(i).get('weighting'));
  }

  return state.setIn(['properties',property],weightings);

}
