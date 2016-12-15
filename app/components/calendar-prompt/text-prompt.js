import React, {PropTypes} from 'react';
import {
  View,
  Text,
} from 'react-native';

class TextPrompt extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

TextPrompt.propTypes = {
  text: PropTypes.string,
};


export default TextPrompt;
