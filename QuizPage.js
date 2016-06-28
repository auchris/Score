'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
} from 'react-native-simple-radio-button';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  component: {
    marginBottom: 15,
  },
  radioStyle: {
    borderRightWidth: 1,
    borderColor: '#2196f3',
    paddingRight: 10
  },
  radioButtonWrap: {
    marginRight: 5
  },
});

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

class QuizPage extends Component {

  constructor () {
    super()
    this.state = {
      types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1}],
      value1: 0,
      value1Index: 0,
      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value2: 0,
      value2Index: 0,
      types3: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value3: 0,
      value3Index: 0,
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>selected: {this.state.types1[this.state.value1Index].label}</Text>
        <Text style={styles.welcome}>2. Advanced</Text>
        <View style={styles.component}>
          <RadioForm
            formHorizontal={true}
            animation={true}
          >
            {this.state.types2.map((obj, i) => {
              var that = this;
              var is_selected = this.state.value2Index == i;
              return (
                <View key={i} style={styles.radioButtonWrap}>
                  <RadioButton
                    isSelected={is_selected}
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    labelColor={'#000'}
                    style={[i !== this.state.types2.length-1 && styles.radioStyle]}
                    onPress={(value, index) => {
                      this.setState({value2:value})
                      this.setState({value2Index: index});
                    }}
                  />
                </View>
              )
            })}
          </RadioForm>
        </View>
        <Text>selected: {this.state.types2[this.state.value2Index].label}</Text>

      </View>
    );
  }
}

module.exports = QuizPage;