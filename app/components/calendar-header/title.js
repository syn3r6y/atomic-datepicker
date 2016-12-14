// Import Libraries
import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Title extends React.Component {
    render() {
        return (
            <View>
              <Text>{this.props.titleText}</Text>
            </View>
        );
    }
}

Title.propTypes = {
  titleText: PropTypes.string,
};

export default Title;
