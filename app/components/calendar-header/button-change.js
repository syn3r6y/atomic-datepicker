// Import libraries
import React, { PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// Import assets
const arrowImg = require('../../assets/icon-arrow.png');

class ButtonChange extends React.Component {

    render() {
      const variant = this.props.variant === 'right' ? true : false;

        return (
          variant  ?
          <TouchableOpacity onPress={this.props.onClick} disabled={this.props.disabled}>
            <View style={[styles.wrapper, styles.rotate]}>
              <Image style={styles.image} source={arrowImg}/>
            </View>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={this.props.onClick} disabled={this.props.disabled}>
            <View style={styles.wrapper}>
              <Image style={styles.image} source={arrowImg}/>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  wrapper:{
    height: 20,
    width: 20,
    paddingHorizontal: 20,
  },
  image: {
    height: 20,
    width: 20,
  },
  rotate: {
    transform: [
      { rotate: '180deg' }
    ]
  }
});

ButtonChange.propTypes = {
    variant: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default ButtonChange;
