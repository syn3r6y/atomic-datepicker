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
      <TouchableOpacity onPress={() => this.props.btnClick()}>
        <View>
          <Image source={this.props.imageSrc} style={this.props.btnStyle}/>
        </View>
      </TouchableOpacity>
    );
  }
}

ButtonPrompt.propTypes = {
  imageSrc: PropTypes.number,
  btnClick: PropTypes.func,
  btnStyle: PropTypes.number,
};

export default ButtonPrompt;
