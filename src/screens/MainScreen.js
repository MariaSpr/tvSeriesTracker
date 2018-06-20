import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginForm from '../components/LoginForm';

class MainScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is MAIN</Text>
            </View>
        );
    }
}

export default MainScreen;