import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';

import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeDetails, employeeEdit, employeeSave, employeeDelete } from '../actions';

class EditEmployee extends Component {
  state = {
    showModal: false
  };

  componentWillMount() {
    _.each(this.props.emp, (value, prop) => {
      this.props.employeeDetails({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift, emp } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: emp.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your Upcoming shift is on ${shift}`);
  }

  onReject() {
    this.setState({ showModal: false });
  }

  onAccept() {
    const { uid } = this.props.emp;

    this.props.employeeDelete({ uid });
  }

  renderModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Edit
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.renderModal()}>
            Delete
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Text Schedule
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onReject={this.onReject.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
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
  employeeSave,
  employeeDelete
})(EditEmployee);
