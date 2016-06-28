import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

var Summary = require('./Summary');
var Settings = require('./Settings');

class Score extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Summary'
        };
    }

    render() {
        return (
            <TabBarIOS 
                selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'Summary'}
                    systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Summary'
                        });
                    }}>
                    <Summary/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'Settings'}
                    systemIcon="more"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Settings'
                        });
                    }}>
                    <Settings/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('Score', () => Score);
