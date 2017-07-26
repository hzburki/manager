import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_PENDING } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: null, spinner: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.user, error: null, spinner: true };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        spinner: false
      };
    case LOGIN_USER_PENDING:
      return { ...state, spinner: true, error: null };
    default:
      return state;
  }
};
