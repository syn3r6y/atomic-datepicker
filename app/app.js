import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Calendar from './containers/calendar';

class App extends React.Component {

  constructor(props){
    super(props);

      this.state = {
        modalVisible: false,
        iconHeight: 0,
        iconWidth: 0,
        dateSelected: "",
      };


    this.onClose = this.onClose.bind(this);
  }

  render() {

    let styles = StyleSheet.create({
      wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      calendarButton:{
        backgroundColor: '#CCC',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonImg:{
        resizeMode: 'contain',
        width: this.state.iconWidth,
        height: this.state.iconHeight,
      },
      modal:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
      }
    });

    return (
      <View style={styles.wrapper}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setState({ modalVisible: false }) }}
          >
          <View style={styles.modal}>
            <Calendar onClose={this.onClose}/>
          </View>
      </Modal>
      <TouchableOpacity onPress={() => { this.setState({ modalVisible: true }) }}>
        <View style={styles.calendarButton} onLayout={(e) => {
          const {x, y, width, height} = e.nativeEvent.layout;
          this.setState({
            iconWidth: width * 0.66,
            iconHeight: height * 0.66,
          })
        }}>
          <Image source={require('./assets/icon-calendar.png')} style={styles.buttonImg}/>
        </View>
      </TouchableOpacity>
      <Text>{this.state.dateSelected}</Text>
      </View>
    );
  }

  onClose(value){
    this.setState({
      modalVisible: false,
      dateSelected: value ? value : "",
    });
  }
}



export default App;
