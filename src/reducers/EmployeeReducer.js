import { FETCH_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
};
