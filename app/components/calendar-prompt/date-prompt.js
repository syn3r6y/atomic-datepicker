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

    let xPos, xArrowPos;

    switch(this.props.promptSide){
      case 'left':
        xPos = 10;
        xArrowPos = 20;
        break;
      case 'right':
        xPos = Dimensions.get('window').width * 0.125 + 10;
        xArrowPos = Dimensions.get('window').width * 0.75 - 20;
        break;
      default:
        xPos = Dimensions.get('window').width * 0.125 - 10;
        xArrowPos = this.props.xArrowPos - 10;
        break;
    }

    let styles = StyleSheet.create({
      promptWrapper:{
        width: Dimensions.get('window').width * 0.75,
        opacity: this.props.visibility,
        height: 60,
        position: 'absolute',
        top: this.props.activeRowNumber >= 2 ? this.props.yPos - 130 : this.props.yPos,
        left: xPos,
        zIndex: this.props.zIndex,
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
        borderWidth: 2,
        borderColor: '#333',
      },
      buttonPrompt:{
        width: Dimensions.get('window').width * 0.125,
        height: Dimensions.get('window').width * 0.125,
      },
      arrow:{
        position: 'absolute',
        left: xArrowPos,
        top: -10,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftWidth: 5,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#333',
        borderLeftColor: 'transparent',
      },
    });

    return (
      <View style={styles.promptWrapper}>
        <ButtonPrompt
          imageSrc={require('../../assets/icon-prompt-close.png')}
          btnStyle={styles.buttonPrompt}
          btnClick={this.props.onClose}
        />
        <TextPrompt
          text={this.props.text}
        />
        <ButtonPrompt
          imageSrc={require('../../assets/icon-prompt-ok.png')}
          btnStyle={styles.buttonPrompt}
        />
      <View style={styles.arrow}/>
      </View>
    );
  }
}

DatePrompt.propTypes = {
  visibility: PropTypes.number,
  yPos: PropTypes.number,
  text: PropTypes.string,
  onClose: PropTypes.func,
  zIndex: PropTypes.number,
  activeRowNumber: PropTypes.number,
  promptSide: PropTypes.string,
  xArrowPos: PropTypes.number,
};

export default DatePrompt;
