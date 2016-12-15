import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ButtonPrompt from './button-prompt';
import TextPrompt from './text-prompt';

class DatePrompt extends React.Component {

  render() {
    let styles = StyleSheet.create({
      promptWrapper:{
        width: Dimensions.get('window').width * 0.75,
        opacity: this.props.visibility,
        height: 60,
        position: 'absolute',
        top: this.props.yPos,
        left: Dimensions.get('window').width * 0.125 - 10,
        zIndex: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      buttonPrompt:{
        width: Dimensions.get('window').width * 0.125,
        height: Dimensions.get('window').width * 0.125,
      }
    });

    return (
      <View style={styles.promptWrapper}>
        <ButtonPrompt
          imageSrc={require('../../assets/icon-prompt-close.png')}
          btnStyle={styles.buttonPrompt}
        />
        <TextPrompt
          text={this.props.text}
        />
        <ButtonPrompt
          imageSrc={require('../../assets/icon-prompt-ok.png')}
          btnStyle={styles.buttonPrompt}
        />
      </View>
    );
  }
}

DatePrompt.propTypes = {
  visibility: PropTypes.number,
  yPos: PropTypes.number,
  text: PropTypes.string,
};

export default DatePrompt;
