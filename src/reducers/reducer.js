import initialState from '../store/initialState';
import * as types from '../actions/action-types';

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case types.GENERATE_NEW_SCREEN:
      let newState = state;
      newState = newState.set("color",action.color);
      newState = newState.set("location",action.location);
      newState = newState.set("shape",action.shape);
      return newState;
  }

  return state;
};
