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
            cellWidth: 0
        };
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
                      <View style={[styles.day, {width: this.state.cellWidth}]} key={index}>
                        <Text style={{textAlign: 'center'}}></Text>
                      </View>
                    );
                } else{
                    return (
                      <View style={[styles.day, {width: this.state.cellWidth}]} key={index}>
                        <Text style={{textAlign: 'center'}}>{day}</Text>
                      </View>
                    );
                }
            });
            return <View style={styles.dayRow} key={index}>{days}</View>;
        } );

        return (
            <View>
                <View style={styles.dayRow} onLayout={(e) => {
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
}

const styles = StyleSheet.create({
  dayRow: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  day:{
    // backgroundColor: '#CCC',
  },
});

export default CalendarTable;
