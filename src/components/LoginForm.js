import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, Input, Button, CardSection } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label={'Email'}
            placeHolder={'Enter Email'}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            secureTextEntry
            label={'Password'}
            placeHolder={'Enter Password'}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return (
    {
      email: state.auth.email,
      password: state.auth.password
    }
  );
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
