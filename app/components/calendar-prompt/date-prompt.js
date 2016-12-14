import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import ButtonPrompt from './button-prompt';
import TextPrompt from './text-prompt';

class DatePrompt extends React.Component {

  render() {
    let styles = StyleSheet.create({
      width: 0,
      opacity: 0,
      height: 0,
      position: 'absolute',
      top: 0,
      zIndex: 10,
    });

    return (
      <View>
        <ButtonPrompt />
        <TextPrompt />
        <ButtonPrompt />
      </View>
    );
  }
}

export default DatePrompt;
