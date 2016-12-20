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
                <OptionBar
                  titleText={this.props.year.toString()}
                  nextClick={this.props.nextYearClick}
                  previousClick={this.props.previousYearClick}
                  actionsDisabled={this.props.allActionsDisabled}
                />
                <OptionBar
                  titleText={this.props.month}
                  nextClick={this.props.nextMonthClick}
                  previousClick={this.props.previousMonthClick}
                  actionsDisabled={this.props.allActionsDisabled}
                />
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
    allActionsDisabled: PropTypes.bool,
};

export default CalendarHeader;
