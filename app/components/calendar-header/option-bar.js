// Import libraries
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
// Import Components
import ButtonChange from './button-change';
import Title from './title';

class OptionBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ButtonChange variant="left" onClick={this.props.previousClick}/>
                <Title titleText={this.props.titleText}/>
                <ButtonChange variant="right" onClick={this.props.nextClick}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    justifyContent: 'space-between',
    backgroundColor: '#BBB',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

OptionBar.propTypes = {
  titleText: PropTypes.string,
  nextClick: PropTypes.func,
  previousClick: PropTypes.func,
};

export default OptionBar;
