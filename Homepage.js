'use strict';
 
import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var QuizPage = require('./QuizPage');
 
const styles = StyleSheet.create({
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 72,
    left: 56,
    width: 90,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: "100"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#152d44',
    padding: 50
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
 
class Homepage extends Component {

    onSearchPressed() {
            this.props.navigator.push({
            title: 'Survey',
            component: QuizPage,
            passProps: {}
        });
    }

    render() {
        return (
          <View
            style={styles.container}>
            <AnimatedCircularProgress
              size={200}
              width={3}
              fill={50}
              tintColor="#00e0ff"
              backgroundColor="#3d5875">
              {
                (fill) => (
                  <Text style={styles.points}>
                    { 50 }
                  </Text>
                )
              }
            </AnimatedCircularProgress>
            <TouchableHighlight style={styles.button}
              onPress={this.onSearchPressed.bind(this)}
              underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Take Score Quiz!</Text>
            </TouchableHighlight>
          </View>
        );
    }
}
 
module.exports = Homepage;




