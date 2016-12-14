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
      selectedColor: 'rgba(255,255,255, 0.0)',
    };

    this.onDateClick = this.onDateClick.bind(this);
  }

  render() {
    let styles = StyleSheet.create({
      dayStyle: {
        width: this.props.width,
        height: this.props.width,
        borderRadius: this.props.width / 2,
        backgroundColor: this.state.selectedColor,
        alignItems: 'center',
        justifyContent: 'center',
      }
    });

    return (
      <TouchableOpacity onPress={this.onDateClick}>
        <View style={styles.dayStyle}>
            <Text style={{textAlign: 'center'}}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  onDateClick(){
    this.setState({
      selectedColor: 'rgba(0, 0, 0, 0.5)'
    });
  }
}

CalendarCell.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
};

export default CalendarCell;
