import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_DETAILS, EMPLOYEE_CREATE, FETCH_EMPLOYEE } from './types';

export const employeeDetails = ({ prop, value }) => {
  return {
    type: EMPLOYEE_DETAILS,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  console.log(`/users/${currentUser.uid}/employees`);

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
          dispatch({ type: EMPLOYEE_CREATE });
          Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return ((dispatch) => {
    firebase.ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_EMPLOYEE, payload: snapshot.val() });
      });
  });
};
