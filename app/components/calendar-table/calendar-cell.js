import React from 'react';
import {

} from 'react-native';

class CalendarCell extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: ''
    };

    //this._dateSelected = this._dateSelected.bind(this);
  }

  render() {
    return (
      <View>
          <Text>{this.props.value}</Text>
      </View>
    );
  }
}

export default CalendarCell;
