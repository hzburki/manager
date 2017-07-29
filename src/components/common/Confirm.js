import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onReject }) => {
  const { TextStyle, ContainerStyle, CardSectionStyle } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={ContainerStyle}>
        <CardSection stlye={CardSectionStyle}>
          <Text style={TextStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onReject}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  CardSectionStyle: {
    justifyContent: 'center'
  },
  TextStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    lineHeight: 40
  },
  ContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
