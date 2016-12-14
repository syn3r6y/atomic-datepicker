import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Calendar from './containers/calendar';

class App extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Calendar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#CCC',
  }
});

export default App;
