import React, {PropTypes} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class ButtonPrompt extends React.Component {

  render() {
    const styles = StyleSheet.create({
    });

    return (
      <TouchableOpacity>
        <View>
          <Image source={this.props.imageSrc} style={this.props.btnStyle}/>
        </View>
      </TouchableOpacity>
    );
  }

}

export default ButtonPrompt;
