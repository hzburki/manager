import { FETCH_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
