import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddEmployee from './AddEmployee';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  add: AddEmployee,
  emp: EmployeeReducer
});
