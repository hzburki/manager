import React, { Component } from 'react';

import { Card, CardSection, Button, Input } from './common';

class AddEmployee extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeHolder="Haseeb"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeHolder="03005013068"
          />
        </CardSection>

        <CardSection>
          <Button>
            Add
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default AddEmployee;
