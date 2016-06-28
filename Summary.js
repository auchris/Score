'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var Homepage = require('./Homepage');

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

class Summary extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: Homepage,
                    title: 'Overview'
            }}/>  
        );
    }
}

module.exports = Summary;