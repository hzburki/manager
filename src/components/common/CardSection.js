import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { CardSectionStyle } = styles;

  return (
    <View style={CardSectionStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  CardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
