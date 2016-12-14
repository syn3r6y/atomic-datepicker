import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

let sharedStyle;

class CalendarCell extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  render() {
    let styles = StyleSheet.create({
      dayStyle: {
        width: this.props.width,
        height: this.props.width,
        borderRadius: this.props.width / 2,
        backgroundColor: this.props.selected ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.0)',
        alignItems: 'center',
        justifyContent: 'center',
      }
    });

    return (
      <TouchableOpacity onPress={() => this.props.onClick(this.props.text)} disabled={this.props.disabled}>
        <View style={styles.dayStyle}>
            <Text style={{textAlign: 'center'}}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CalendarCell.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CalendarCell;
