import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeDetails, employeeEdit, employeeSave } from '../actions';

class EditEmployee extends Component {
  componentWillMount() {
    _.each(this.props.emp, (value, prop) => {
      this.props.employeeDetails({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift, emp } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: emp.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Edit
          </Button>
          <Button>
            Delete
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.add;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeDetails,
  employeeEdit,
  employeeSave
})(EditEmployee);
