import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import { employeeDetails } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            value={this.props.name}
            label="Name"
            placeHolder="Haseeb"
            onChangeText={text => this.props.employeeDetails({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={text => this.props.employeeDetails({ prop: 'phone', value: text })}
            value={this.props.phone}
            label="Phone"
            placeHolder="03005013068"
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerLabelStyle}>Shifts</Text>
          <Picker
            style={{ flex: 3 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeDetails({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.add;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeDetails })(EmployeeForm);
