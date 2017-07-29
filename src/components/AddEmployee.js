import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeDetails, employeeCreate } from '../actions';

class AddEmployee extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Add
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

export default connect(mapStateToProps, { employeeDetails, employeeCreate })(AddEmployee);
