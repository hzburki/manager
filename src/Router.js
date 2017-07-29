import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" title="SignIn/SignUp" component={LoginForm} />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.addEmployee()}
          rightTitle="Add"
          key="employeeList"
          title="Employees List"
          component={EmployeeList}
        />
        <Scene
          key="addEmployee"
          title="Add Employees"
          component={AddEmployee}
        />
        <Scene
          key="editEmployee"
          title="Edit Employees"
          component={EditEmployee}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
