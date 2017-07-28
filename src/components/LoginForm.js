import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, Input, Button, CardSection, Spinner } from './common';
import { emailChanged, passwordChanged, userLogin } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onUserLogin() {
    const { email, password } = this.props;

    this.props.userLogin({ email, password });
  }

  renderButton() {
    if (this.props.spinner) {
      return <Spinner size={'large'} />;
    }

    return (
      <Button onPress={this.onUserLogin.bind(this)}>
        Login
      </Button>
    );
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

        <Text style={styles.errorStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const { email, password, error, spinner } = state.auth;

  return ({ email, password, error, spinner });
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, userLogin })(LoginForm);
