import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import CalendarCell from '../components/calendar-table/calendar-cell';

class CalendarTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            days: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
            cellWidth: 0,
            selectedCell: 0,
        };

        this.onCellSelected = this.onCellSelected.bind(this);
    }

    render() {
        const state = {...this.state};
        const dayTitles = state.days.map( (day, index) => {
            return <View key={index} style={[styles.day, {width: this.state.cellWidth}]}><Text style={{textAlign: 'center'}}>{ day.substring(0,3) }</Text></View>;
        });
        const dateRows = this.props.days.map( (row, index) => {
            const days = row.map( (day, index) => {
                if(day == ''){
                    return (
                      <CalendarCell
                        width={this.state.cellWidth}
                        key={index}
                        disabled={true}
                      />
                    );
                } else{
                    return (
                      <CalendarCell
                        width={this.state.cellWidth}
                        key={index}
                        text={day.toString()}
                        selected={day == this.state.selectedCell ? true : false}
                        onClick={this.onCellSelected}
                      />
                    );
                }
            });
            return <View style={styles.dayRow} key={index}>{days}</View>;
        } );

        return (
            <View style={{padding: 10}}>
                <View style={[styles.dayRow, styles.titleBar]} onLayout={(e) => {
                  const {x, y, width, height} = e.nativeEvent.layout
                  this.setState({
                    cellWidth: width / 7,
                  });
                }}>
                    {dayTitles}
                </View>
                {dateRows}
            </View>
        );
    }

    onCellSelected(value){
      this.setState({
        selectedCell: value,
      });
    }
}

const styles = StyleSheet.create({
  dayRow: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBar:{
    paddingVertical: 20
  },
  day:{
    // backgroundColor: '#CCC',
  },
});

export default CalendarTable;
