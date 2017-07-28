import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddEmployee from './AddEmployee';

export default combineReducers({
  auth: AuthReducer,
  add: AddEmployee
});
