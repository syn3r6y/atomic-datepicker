import React, {PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import CalendarCell from '../components/calendar-table/calendar-cell';
import DatePrompt from '../components/calendar-prompt/date-prompt';

class CalendarTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            days: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
            cellWidth: 0,
            titleHeight: 0,
            selectedCell: 0,
            tableDateHeight: 0,
            promptVisibility: 0,
            activeRowPos: 0,
            activeRowNumber: 0,
            zIndex: 0,
            promptSide: 'center',
            columnSelected: 1,
        };

        this.onCellSelected = this.onCellSelected.bind(this);
        this.closePrompt = this.closePrompt.bind(this);
    }

    render() {
        const state = {...this.state};
        const dayTitles = state.days.map( (day, index) => {
            return <View key={index} style={[styles.day, {width: this.state.cellWidth}]}><Text style={{textAlign: 'center'}}>{ day.substring(0,3) }</Text></View>;
        });
        const dateRows = this.props.days.map( (row, rowIndex) => {
            const days = row.map( (day, index) => {
                if(day == ''){
                    return (
                      <CalendarCell
                        width={this.state.cellWidth}
                        key={index}
                        row={rowIndex}
                        disabled={true}
                      />
                    );
                } else{
                    return (
                      <CalendarCell
                        width={this.state.cellWidth}
                        key={index}
                        column={index}
                        row={rowIndex}
                        text={day.toString()}
                        selected={day == this.state.selectedCell ? true : false}
                        onClick={this.onCellSelected}
                      />
                    );
                }
            });
            return <View style={styles.dayRow} key={rowIndex} onLayout={(e) => {
              if(rowIndex === 0){
                const {x, y, width, height} = e.nativeEvent.layout;
                this.setState({
                  tableDateHeight: height,
                })
              }
            }}>{days}</View>;
        } );

        return (
            <View style={{padding: 10}}>
              <DatePrompt
                visibility={this.state.promptVisibility}
                yPos={this.state.activeRowPos}
                text={`${this.props.month} ${this.state.selectedCell}, ${this.props.year}`}
                onClose={this.closePrompt}
                zIndex={this.state.zIndex}
                activeRowNumber={this.state.activeRowNumber}
                promptSide={this.state.promptSide}
                xArrowPos={this.state.cellWidth * this.state.columnSelected - this.state.cellWidth}
              />
              <View style={[styles.dayRow, styles.titleBar]} onLayout={(e) => {
                const {x, y, width, height} = e.nativeEvent.layout;
                this.setState({
                  cellWidth: width / 7,
                  titleHeight: height,
                });
              }}>
                  {dayTitles}
              </View>
              {dateRows}
            </View>
        );
    }

    onCellSelected(dateValue, rowIndex, columnIndex){
      const state = {...this.state};
      const row = rowIndex + 1;
      const topPos = state.tableDateHeight * row + state.titleHeight + 20;
      let promptSide = 'center';

      switch(columnIndex){
        case 0:
          promptSide = 'left';
          break;
        case 6:
          promptSide = 'right';
          break;
      }

      this.setState({
        selectedCell: dateValue,
        activeRowPos: topPos,
        promptVisibility: 1,
        zIndex: 10,
        activeRowNumber: rowIndex,
        promptSide: promptSide,
        columnSelected: columnIndex + 1,
      });
    }

    closePrompt(){
      this.setState({
        promptVisibility: 0,
        zIndex: 0,
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

CalendarTable.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default CalendarTable;
