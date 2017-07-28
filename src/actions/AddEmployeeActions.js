import { EMPLOYEE_DETAILS } from './types';

export const employeeDetails = ({ prop, value }) => {
  return {
    type: EMPLOYEE_DETAILS,
    payload: { prop, value }
  };
};
