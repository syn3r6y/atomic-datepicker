// Import libraries
import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
 } from 'react-native';
// Import Components
import OptionBar from '../components/calendar-header/option-bar';

class CalendarHeader extends React.Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <OptionBar titleText={this.props.year.toString()} nextClick={this.props.nextYearClick} previousClick={this.props.previousYearClick}/>
                <OptionBar titleText={this.props.month} nextClick={this.props.nextMonthClick} previousClick={this.props.previousMonthClick}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  }
});

CalendarHeader.propTypes = {
    month: PropTypes.string,
    year: PropTypes.number,
    nextMonthClick: PropTypes.func,
    previousMonthClick: PropTypes.func,
    nextYearClick: PropTypes.func,
    previousYearClick: PropTypes.func,
};

export default CalendarHeader;
