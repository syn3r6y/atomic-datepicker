// Import Libraries
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
// Import Components
import CalendarHeader from './calendar-header';
import CalendarTable from './calendar-table';

class Calendar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dateDays: [],
      dateMonths: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
      currentMonth: '',
      currentYear: 0,
    };

    this.populateDays = this.populateDays.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextYear = this.nextYear.bind(this);
    this.previousYear = this.previousYear.bind(this);
  }

  componentWillMount(){
    const Calendar = new Date();
    const currentMonth = Calendar.getMonth();
    let activeYear = Calendar.getFullYear();

    const state = {...state};
    let month = new Date();
    month = month.getMonth();

    this.setState({ currentMonth: this.state.dateMonths[month] }, () => { this.populateDays(currentMonth, activeYear); })
  }

  render() {
      return (
          <View style={styles.wrapper}>
              <CalendarHeader
                month={this.state.currentMonth}
                year={this.state.currentYear}
                nextMonthClick={this.nextMonth}
                previousMonthClick={this.previousMonth}
                nextYearClick={this.nextYear}
                previousYearClick={this.previousYear}
              />
              <CalendarTable
                days={this.state.dateDays}
                month={this.state.currentMonth}
                year={this.state.currentYear.toString()}
              />
          </View>
      );
  }

  populateDays(month, year){
    const state = {...this.state};
    // find the start day
    const startDay = new Date(`${state.dateMonths[month]} 1, ${year}`).getDay();
    // find the number of days in the month
    const numOfDays = new Date(year, month + 1, 0).getDate();
    // make a grid
    const cols = 7;
    const rows = 5;
    let daysPopulated = 0;
    let day = 1;
    let datesArray = [];

    // populate the grid
    for(let rowIndex = 0; rowIndex < rows; rowIndex++){
        if (!datesArray[rowIndex]) datesArray[rowIndex] = [];

        for(let columnIndex = 0; columnIndex < cols; columnIndex++){

            if (daysPopulated < startDay){
                datesArray[rowIndex][columnIndex] = '';
            } else if ( day > numOfDays ){
                datesArray[rowIndex][columnIndex] = '';
            } else {
                datesArray[rowIndex][columnIndex] = day;
                day++;
            }
            daysPopulated++;
        }
    }
    this.setState({
      dateDays: datesArray,
      currentMonth: this.state.dateMonths[month],
      currentYear: year,
    });
  }

  nextMonth(){
    const state = {...this.state};
    let month = state.currentMonth;
    let year = state.currentYear;

    if(month === 'DECEMBER'){
      year += 1;
      month = 0;
    } else {
      month = state.dateMonths.indexOf(month) + 1;
    }

    this.populateDays(month, year);
  }

  previousMonth(){
    const state = {...this.state};
    let month = state.currentMonth;
    let year = state.currentYear;

    if(month === 'JANUARY'){
      year -= 1;
      month = 11;
    } else {
      month = state.dateMonths.indexOf(month) - 1;
    }

    this.populateDays(month, year);
  }

  nextYear(){
    const state = {...this.state};
    let month = state.currentMonth;
    let year = state.currentYear + 1;

    this.populateDays(state.dateMonths.indexOf(month), year);
  }

  previousYear(){
    const state = {...this.state};
    let month = state.currentMonth;
    let year = state.currentYear - 1;

    this.populateDays(state.dateMonths.indexOf(month), year);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width * 0.95,
    backgroundColor: '#FFF',
  }
});

export default Calendar;
