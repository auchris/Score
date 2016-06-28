'use strict';
 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var SettingsPage = require('./SettingsPage');
 
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
 
class Settings extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: SettingsPage,
                    title: 'Settings'
            }}/>  
        );
    }
}
 
module.exports = Settings;