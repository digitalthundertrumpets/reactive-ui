import initialState from '../store/initialState';
import * as types from '../actions/action-types';

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case types.ACTION_TYPE:
      return state;
  }

  return state;
};
